<?php
// Return JSON
header('Content-Type: application/json; charset=UTF-8');

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
    exit;
}

// Collect & trim inputs, including honeypot field
$name_raw    = trim($_POST['name']    ?? '');
$email_raw   = trim($_POST['email']   ?? '');
$subject_raw = trim($_POST['subject'] ?? '');
$message_raw = trim($_POST['message'] ?? '');
$honeypot    = trim($_POST['website'] ?? '');  // hidden field

// Honeypot check: if filled, assume bot and exit quietly
if ($honeypot !== '') {
    exit;
}

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

// Prevent header injection in name & subject
foreach ([$name, $subject] as $field) {
    if (preg_match('/[\r\n]/', $field)) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Invalid input detected.']);
        exit;
    }
}

// Truncate to limits
$subject = substr($subject, 0, 100);
$message = substr($message, 0, 1000);

// Email destination & headers
$to          = 'info@christians-in-tech.org';
$from        = 'no-reply@christians-in-tech.org';
$subjectLine = "New Contact Form Submission: $subject";

$body  = "You received a new message from the contact form:\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n\n";
$body .= "Message:\n$message\n";

// Build headers array
$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = "From: Christians in Tech <$from>";
$headers[] = "Reply-To: $email";

// Send mail
$sent = mail($to, $subjectLine, $body, implode("\r\n", $headers));

if ($sent) {
    echo json_encode(['status' => 'success']);
} else {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Failed to send message. Please try again later.']);
}