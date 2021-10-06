<?PHP 
    $host = "localhost";
    $username = "id16589742_kassesstema1";
    $password = "u}2y#cp!_Wp1N@&W";
    $dbname="id16589742_kassesstema";
    $con = mysqli_connect($host,$username,$password,$dbname);
    

    $sql = "SELECT id, count(*) as number FROM submitted"; //count all ID
    $sql2 = "SELECT top_choice, count(*) as number FROM submitted GROUP by top_choice"; //count all by top_choice
    
  
    $result = $con->query($sql);
    $result2 = $con->query($sql2);

?>