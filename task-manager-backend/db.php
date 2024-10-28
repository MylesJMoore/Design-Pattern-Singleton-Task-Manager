<?php
$host = 'localhost';       // XAMPP uses localhost
$dbname = 'task_manager';  // The database we created
$user = 'root';            // Default XAMPP MySQL username
$password = '';            // No password for MySQL root user by default

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Could not connect to the database $dbname :" . $e->getMessage());
}
?>
