<?php
$correctPassword = "castanares_11092018"; // Change this if needed

// Get password from form
$password = $_POST['password'];

// If password is correct, redirect to your file
if ($password === $correctPassword) {
    echo "<script>
            alert('Login successfully.');
            window.location.href = 'file:///F:/RAMOS%202B%20WST2/FINALS/LD3_RAMOS2.html';
          </script>";
    exit();
} else {
    // Redirect back to login with error message
    header("Location: login.html?message=Incorrect password. Try again later.");
    exit();
}
?>