<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Sanitize input
  $name = strip_tags(trim($_POST['name']));
  $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
  $subject = substr(strip_tags(trim($_POST['subject'])), 0, 100);
  $message = substr(strip_tags(trim($_POST['message'])), 0, 1000);

  // Validate input
  if (!$name || !$email || !$subject || !$message) {
    echo "Please fill out all fields correctly.";
    exit;
  }

  // Email settings
  $to = "info@christians-in-tech.org"; // destination email
  $from = "no-reply@christians-in-tech.org"; // must be a valid email hosted on your domain
  $email_subject = "New Contact Form Submission: $subject";

  $email_body = "You received a new message from the contact form:\n\n";
  $email_body .= "Name: $name\n";
  $email_body .= "Email: $email\n\n";
  $email_body .= "Message:\n$message\n";

  $headers = "From: Christians in Tech <$from>\r\n";
  $headers .= "Reply-To: $email\r\n";

  // Send the email
  if (mail($to, $email_subject, $email_body, $headers)) {
    echo "success";
  } else {
    echo "Failed to send message. Please try again later.";
  }
} else {
  echo "Invalid request.";
}
?>