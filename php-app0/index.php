<?php
// Run: php -S localhost:4000
// Go to http://localhost:4000/
?>

<?php
require 'functions.php';


$task = [
    'title' => 'Finish homework',
    'due' => 'Today',
    'assigned_to' => 'Mike',
    'completed' => true
];

require 'index.view.php'



?>