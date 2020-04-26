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
    <?php include 'header.html' ?>

    <?php
    $charname = "Tom";
    $age = 16;
    $phrase = "To be or not to be";
    $gpa = 3.9;
    $isMale = true;

    function say($phrase)
    {
        echo strtoupper($phrase);
    }



    echo "<h2>Mike's Site</h2>";
    echo "<hr>";
    echo "There once was a man named $charname <br>";
    echo "He was $age years old<br>";
    echo "He likes his name<br>";
    echo "But didn't like being $age<br>";
    say($phrase);
    echo "<br>";
    ?>

    <hr>
    <form action='site.php' method='post'>
        Name: <input type='text' name='name'>
        <br>
        Age: <input type='number' name='age'>
        <br>
        Password: <input type='password' name='password'>
        <br>
        <input type='submit'>
    </form>
    Your name is <?php echo $_POST['name'] ?>
    <br>
    Your age is <?php echo $_POST['age'] ?>
    <br>
    Password is <?php echo $_POST['password'] ?>


    <hr>
    <form action='site.php' method='post'>
        Number1: <input type='number' step='0.1' name='num1'>
        <br>
        Op: <input type='text' name='op'>
        <br>
        Number2: <input type='number' step='0.1' name='num2'>
        <br>
        <input type='submit'>
    </form>
    Answer is <?php
                $num1 = $_POST['num1'];
                $num2 = $_POST['num2'];
                $op = $_POST['op'];

                if ($op == '+') {
                    echo $num1 + $num2;
                } elseif ($op == '-') {
                    echo $num1 - $num2;
                } elseif ($op == '/') {
                    echo $num1 / $num2;
                } elseif ($op == '*') {
                    echo $num1 * $num2;
                } else {
                    echo 'Invalid Operator';
                }
                ?>

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

    <hr>
    <form action='site.php' method="post">
        Apples: <input type="checkbox" name="fruits[]" value="apples"><br>
        Oranges: <input type="checkbox" name="fruits[]" value="oranges"><br>
        Pears: <input type="checkbox" name="fruits[]" value="pears"><br>

        <input type='submit'>
    </form>
    <?php
    $fruits = $_POST['fruits'];
    echo $fruits[1];
    ?>

    <hr>
    <form action='site.php' method="post">
        Student: <input type="text" name="student"><br>
        <input type='submit'>
    </form>
    <?php
    $grades = array('Jim' => 'A', 'Pam' => 'B', 'Oscar' => 'C');
    echo $grades[$_POST['student']];
    ?>

    <hr>
    <form action='site.php' method="post">
        What was your grade? <input type="text" name="grade"><br>
        <input type='submit'>
    </form>
    <?php
    $grade = $_POST['grade'];
    switch ($grade) {
        case 'A':
            echo 'You did amazing!';
            break;
        case 'B':
            echo 'You did pretty good!';
            break;
        case 'C':
            echo 'You did poorly!';
            break;
        case 'D':
            echo 'You did very bad!';
            break;
        case 'F':
            echo 'You fail!';
            break;
        default:
            echo 'Invalid Grade';
    }
    ?>

    <hr>
    <?php
    class Book
    {
        public $title;
        public $author;
        private $pages;

        function __construct($aTitle, $aAuthor, $aPages)
        {
            $this->title = $aTitle;
            $this->author = $aAuthor;
            $this->pages = $aPages;
        }

        function has500()
        {
            if ($this->pages >= 500) {
                return 'true';
            }
            return 'false';
        }

        function getter()
        {
            return $this->pages;
        }

        function setter($pages)
        {
            if ($pages == 500 || $pages == 600) {
                $this->pages = $pages;
            }
            else{
                $this->pages = 'NA';

            }
        }
    }

    $book1 = new Book('Harry Potter', 'JK Rowling', 400);
    $book2 = new Book('Lord of the Rings', 'Tolkien', 700);


    // echo $book1->title;
    // echo $book2->author;
    // echo $book2->has500();
    echo $book1->getter();
    $book1->setter(600);
    echo $book1->getter();
    ?>




    <?php include 'footer.html' ?>
</body>

</html>