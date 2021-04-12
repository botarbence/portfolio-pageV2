<?php

if (isset($_POST["submit"])){

 
   
     
      $name = $_POST["name"];
      $mailFrom = $_POST["mail"];
      $subject = $_POST["subject"];
      $number = $_POST["number"];
      $message = $_POST["message"];
      
      $mailTo = "botarbence@gmail.com"
      $headers = "From: ".$mailFrom;
      $body = "You have recieved an email from ".$name".\n\n".$message;
      
      mail($mailTo, $subject, $body, $headers);
      header("Location: index.html");

     
    }
  ?>