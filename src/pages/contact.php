<?php

require_once "PHPMailer/PHPMailer.php";
require_once "PHPMailer/SMTP.php";
require_once "PHPMailer/Exception.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if (isset($_POST["send"])) {
    $to = "office@gold-digital.rs";
    $name = $_POST["name"];
    $email = $_POST["office@gold-digital.rs"];
    $subject = $_POST["subject"];
    $body = $_POST["message"];
    
    $mail = new PHPMailer(true);

    $mail->CharSet = 'UTF-8';
	$mail->SMTPDebug = 1;
    $mail->isSMTP();
    $mail->Host = "localhost";
    $mail->SMTPAuth = true;
    $mail->Username = "office@gold-digital.rs";
    $mail->Password = "";
    $mail->Port = '25';
    $mail->SMTPSecure = 'ssl';
    $mail->setFrom($to);
    $mail->addAddress($email);
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $_POST["message"];
    $mail->send();

    echo "
        <script>
            alert('Success');
            document.location.href = '/';
        </script>
    ";
    
}
?>