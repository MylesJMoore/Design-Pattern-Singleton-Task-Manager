<?php
include '../db.php';
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$stmt = $pdo->query('SELECT * FROM tasks');
$tasks = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Wrap the tasks in a response object
$response = ['tasks' => $tasks];
echo json_encode($response);
?>
