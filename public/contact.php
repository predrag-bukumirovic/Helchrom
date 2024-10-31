<?php
header("Content-Type: application/json; charset=UTF-8");
require_once "PHPMailer/PHPMailer.php";
require_once "PHPMailer/SMTP.php";
require_once "PHPMailer/Exception.php";

ini_set('display_errors', 0);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

function getInputData()
{
    if (count($_POST) || count($_FILES))
        return $_POST;
    if (!in_array($_SERVER["REQUEST_METHOD"], ["POST", "PUT", "PATCH"]))
        return $_GET;
    return json_decode(file_get_contents("php://input"), true);
}

$data = getInputData();

if (isset($data['name']) && isset($data['email'])) {
    
    $to = "office@helmchron.com";
    $to2 = "mivosevic@mas.bg.ac.rs, anja.andjelkovic.10.12@gmail.com, unaivosevic@gmail.com";
    
    // Sanitize and validate input data
    $name = $data["name"];
    $email = filter_var($data["email"], FILTER_SANITIZE_EMAIL);
    $subject = $data["subject"];
    $body = $data["message"]; // Ovde dolazi HTML iz React-a

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["error" => "Invalid email format."]);
        exit;
    }
    
    $mail = new PHPMailer(true);
    try {
        // Server settings
        $mail->SMTPDebug = 0; 
        $mail->isSMTP(); 
        $mail->Host = 'mail.gransy.com'; 
        $mail->SMTPAuth = true; 
        $mail->SMTPSecure = 'tls'; 
        $mail->Username = 'office@helmchron.com';
        $mail->Password = '123una123'; // Preporučuje se korišćenje environment variables
        $mail->Port = 587; 
        $mail->CharSet = 'UTF-8';

        $mail->setFrom($email, $name);
        $mail->addAddress($to);
        
        // Adding CC addresses
        $emails = explode(', ', $to2);
        foreach ($emails as $ccEmail) {
            $mail->addCC(trim($ccEmail));
        }

        $mail->addReplyTo($email, $name);
        $mail->isHTML(true); 
        $mail->Subject = $subject;
        $mail->Body = $body; // Ovo će biti HTML sadržaj

        $mail->send();
        http_response_code(200);
        echo json_encode(["success" => true]);
    } catch (Exception $e) {
        http_response_code(400);
        echo json_encode(["error" => $e->getMessage()]); // Vraća samo poruku greške
    }
}
?>
