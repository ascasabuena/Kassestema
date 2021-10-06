<?PHP 

	$top1_assess = $_POST['top_result'];

    $host = "localhost";
    $username = "id16589742_kassesstema1";
    $password = "u}2y#cp!_Wp1N@&W";
    $dbname="id16589742_kassesstema";
    $con = mysqli_connect($host,$username,$password,$dbname);
    

    $sql = "INSERT INTO `submitted` (`id`, `date_submit`, `top_choice`) 
    		VALUES (NULL, current_timestamp(), '$top1_assess')";
    		
    		
    /*$sql = "INSERT INTO `submitted` (`id`, `date_submit`, `top_choice`) 
    		VALUES (NULL, current_timestamp(), 'TOP1-FROM WEBHOST')";*/
    
  
    $result = $con->query($sql);

?>