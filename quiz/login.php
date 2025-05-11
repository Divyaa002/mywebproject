<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    $sql = "SELECT password FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($hashed_password);
    $stmt->fetch();
    
    if ($stmt->num_rows > 0 && password_verify($password, $hashed_password)) {
        echo "<script>alert('Login successful!'); window.location.href='quiz.html';</script>";

    } else {
        echo "<script>alert('Incorrect password!'); window.location.href='index.html';</script>";

    }
    
    $stmt->close();
    $conn->close();
}
?>
