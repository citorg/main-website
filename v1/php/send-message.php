<?php
// Return JSON
header('Content-Type: application/json; charset=UTF-8');

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
    exit;
}

// reCAPTCHA response
$recaptchaResponse = $_POST['g-recaptcha-response'] ?? '';
if ($recaptchaResponse === '') {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Captcha missing.']);
    exit;
}

// VERIFY reCAPTCHA with Google
$secret = 'YOUR_SECRET_KEY'; // Better: load from env/config, not hard-coded.
$remoteIp = $_SERVER['REMOTE_ADDR'] ?? '';
$verifyUrl = "https://www.google.com/recaptcha/api/siteverify";

$ch = curl_init($verifyUrl);
curl_setopt_array($ch, [
    CURLOPT_POST            => true,
    CURLOPT_RETURNTRANSFER  => true,
    CURLOPT_POSTFIELDS      => http_build_query([
        'secret'   => $secret,
        'response' => $recaptchaResponse,
        'remoteip' => $remoteIp,
    ])
]);
$googleResponse = curl_exec($ch);
curl_close($ch);

if (!$googleResponse) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Captcha verification failed.']);
    exit;
}

$captchaResult = json_decode($googleResponse, true);
if (!($captchaResult['success'] ?? false)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Captcha check failed.']);
    exit;
}

// Collect & trim inputs
$name_raw    = trim($_POST['name']    ?? '');
$email_raw   = trim($_POST['email']   ?? '');
$subject_raw = trim($_POST['subject'] ?? '');
$message_raw = trim($_POST['message'] ?? '');

// Basic validation
if ($name_raw === '' || $email_raw === '' || $subject_raw === '' || $message_raw === '') {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Please fill out all fields.']);
    exit;
}

// Validate email format
if (!filter_var($email_raw, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid email address.']);
    exit;
}

// Sanitize & strip tags
$name    = strip_tags($name_raw);
$email   = filter_var($email_raw, FILTER_SANITIZE_EMAIL);
$subject = strip_tags($subject_raw);
$message = strip_tags($message_raw);

// Prevent header injection
foreach ([$name, $subject] as $field) {
    if (preg_match('/[\r\n]/', $field)) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Invalid input detected.']);
        exit;
    }
}

// Truncate
$subject = substr($subject, 0, 100);
$message = substr($message, 0, 1000);

// Email details
$to          = 'info@christians-in-tech.org';
$from        = 'no-reply@christians-in-tech.org';
$subjectLine = "New Contact Form Submission: $subject";

$body  = "You received a new message from the contact form:\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n\n";
$body .= "Message:\n$message\n";

// Headers
$headers   = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = "From: Christians in Tech <$from>";
$headers[] = "Reply-To: $email";

$sent = mail($to, $subjectLine, $body, implode("\r\n", $headers));

if ($sent) {
    echo json_encode(['status' => 'success']);
} else {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Failed to send message. Please try again later.']);
}