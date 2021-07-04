<?

try{
    $db = new PDO('mysql:host=localhost;dbname=muslimov_otel', 'muslimov_otel', 'Qwerty123#');
} catch (PDOExeption $e) {
    echo $e->getMessage();
    die();
}