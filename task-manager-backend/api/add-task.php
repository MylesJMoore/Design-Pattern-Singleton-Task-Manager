<?php
include '../db.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

// Define the expected token for API access (for testing, use "debug")
$expected_token = 'debug';

// Retrieve the token, title, and description from the URL parameters (GET request)
$token = isset($_GET['token']) ? $_GET['token'] : null;
$title = isset($_GET['title']) ? $_GET['title'] : null;
$description = isset($_GET['description']) ? $_GET['description'] : null;

// Validate the token
if ($token !== $expected_token) {
    echo json_encode(['status' => 'error', 'message' => 'Invalid or missing token']);
    exit;
}

// Check if title and description are set and not null
if (empty($title)) {
    echo json_encode(['status' => 'error', 'message' => 'Task title is required']);
    exit;
}

if (empty($description)) {
    echo json_encode(['status' => 'error', 'message' => 'Task description is required']);
    exit;
}

// Prepare and execute the insert statement
$stmt = $pdo->prepare('INSERT INTO tasks (title, description) VALUES (?, ?)');
$stmt->execute([$title, $description]);

// Send success response
echo json_encode(['status' => 'success', 'message' => 'Task added successfully!']);
?>
