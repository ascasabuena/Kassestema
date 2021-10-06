<?PHP 


    try {
        //getting data from html (all fields have to be filled up)
    $comment_name = $_POST['name'];
    $comment_text = $_POST['text'];
    

//Database Connection
    $host = "localhost";
    $username = "id16589742_kassesstema1";
    $password = "u}2y#cp!_Wp1N@&W";
    $dbname="id16589742_kassesstema";
    $con = mysqli_connect($host,$username,$password,$dbname);
    
    date_default_timezone_set('Asia/Manila');
    $date = date('Y-m-d H:i:s'); // use actual date() format displayed in your table.

     $sql = "INSERT INTO `comment` (`id`, `name`, `text_message`, `date_comment`) 
             VALUES (NULL, '$comment_name', '$comment_text', '$date')";

     mysqli_query($con,$sql);

    } catch (Exception $e) {
            
        
    }
    echo"<script>
        window.location.href='index.php#portfolio';
        </script>";

    
  mysqli_close($con);
?>