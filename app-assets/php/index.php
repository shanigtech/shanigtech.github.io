<?php
$server = 'localhost';
$username = 'root';
$password = '';
$dbname = 'cdhdb';

// Create a new MySQLi connection
$conn = new mysqli($server, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die('Connection Error: ' . $conn->connect_error);
}

// Check if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $contact = $_POST['contact'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Insert the form data into the database (modify this query according to your database schema)
    $sql = "INSERT INTO contacts (name, contact, subject, message) VALUES ('$name', '$contact', '$subject', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo 'Record inserted successfully';
    } else {
        echo 'Error: ' . $sql . '<br>' . $conn->error;
    }
}

// Close the database connection
$conn->close();
?>
