<?php
    $name = $_POST['name'];
    $number = $_POST['number'];

	$to = "kurgaevwebdev.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $name;
	$subject = "Заявка c сайта";

	
	$msg="
    Имя: $name /n
    Телефон: $number";
	mail($to, $subject, $msg, "From: $from ");

?>

<p>Привет, форма отправлена</p>
