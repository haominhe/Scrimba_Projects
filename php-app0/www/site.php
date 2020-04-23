<?php
// Start a web server. Run: php -S localhost:4000
// Go to http://localhost:4000/www/site.php
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <title></title>
</head>

<body>
    <?php
    $charname = "Tom";
    $age = 16;
    $phrase = "To be or not to be";
    $gpa = 3.9;
    $isMale = true;


    echo "<h1>Mike's Site</h1>";
    echo "<hr>";
    echo "There once was a man named $charname <br>";
    echo "He was $age years old<br>";
    echo "He likes his name<br>";
    echo "But didn't like being $age<br>";
    echo strtoupper($phrase);
    echo "<br>";
    ?>

    <form action='site.php' method='get'>
        Name: <input type='text' name='name'>
        <br>
        Age: <input type='number' name='age'>
        <br>
        <input type='submit'>
    </form>
    Your name is <?php echo $_GET['name'] ?>
    <br>
    Your age is <?php echo $_GET['age'] ?>


    <hr>
    <form action='site.php' method='get'>
        Number1: <input type='number' name='num1'>
        <br>
        Number2: <input type='number' name='num2'>
        <br>
        <input type='submit'>
    </form>
    Sum is <?php echo $_GET['num1'] + $_GET['num2'] ?>

    <hr>
    <form action='site.php' method='get'>
        Color: <input type='text' name='color'>
        <br>
        Plural Noun: <input type='text' name='noun'>
        <br>
        Celebrity: <input type='text' name='celebrity'>
        <br>
        <input type='submit'>
    </form>
    <?php
    $color = $_GET['color'];
    $noun = $_GET['noun'];
    $celebrity = $_GET['celebrity'];

    echo "Roses are $color <br>";
    echo "$noun are blue <br>";
    echo "I love $celebrity <br>";


    ?>


</body>

</html>