<?php
if (isset($_POST['email'])) {
    session_start();
    require_once('dbkoneksi.php');
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM user where email = ? and password = ?";
    $stmt = $dbh->prepare($sql);
    $stmt->execute([$email, $password]);
    $row = $stmt->fetch();

    if ($row) {
        $_SESSION['login'] = true;
        $_SESSION['email'] = $row['email'];
        echo "<script>alert('Login Berhasil');window.location.href='index.php'</script>";
    } else {
        echo "<script>alert('Email atau Password Salah');window.location.href='login.html'</script>";
    }
}
