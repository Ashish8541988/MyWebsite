<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = '000webhost.org';

$email_subject = 'New Form Submission';

$email_body = "User Name: $name.\n". 
"User Email: $visitor_email.\n". 
"Subject: $subject.\n". 
"User Message: $message.\n";

$to ='ashisharya8541988@gmail.com';

$header = "from: $email_from \r\n";
$header .= "Reply-To: $visitor_email \r\n";

email($to,$subject_subject,$email_body,$header);
header("Location:contact.html");
?>
