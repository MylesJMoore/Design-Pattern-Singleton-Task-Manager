<?php
include '../db.php';
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

// Check if the task ID is provided
if (isset($_GET['id'])) {
    $id = intval($_GET['id']); // Sanitize the ID to be an integer

    // Prepare the DELETE statement
    $stmt = $pdo->prepare('DELETE FROM tasks WHERE id = ?');
    
    if ($stmt->execute([$id])) {
        echo json_encode(['success' => true, 'message' => 'Task deleted successfully']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to delete task']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Task ID not provided']);
}
?>
