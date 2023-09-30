<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $recipient = "saianvesh736@gmail.com"; // Replace with your email address
    $subject = "Feedback Submission";

    $rollNo = $_POST["rollNo"];
    $feedback = $_POST["feedback"];

    $message = "Roll No: $rollNo\n\nFeedback:\n$feedback";

    $headers = "From: webmaster@example.com"; // Replace with a valid "From" email address

    if (mail($recipient, $subject, $message, $headers)) {
        echo "Thank you for your feedback!";
    } else {
        echo "Error sending feedback.";
    }
}
?>
