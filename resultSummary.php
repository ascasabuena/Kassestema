<?PHP 
        //Database Connection
    $host = "localhost";
    $username = "id16589742_kassesstema1";
    $password = "u}2y#cp!_Wp1N@&W";
    $dbname="id16589742_kassesstema";
    $con = mysqli_connect($host,$username,$password,$dbname);
          
      $sql = "SELECT count(*) as number FROM submitted"; //count all ID
      $sql2 = "SELECT top_choice, count(*) as number FROM submitted GROUP by top_choice"; //count all by top_choice
      
    
      $result = $con->query($sql);
      $result2 = $con->query($sql2);
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Career Assesment</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  

    <!-- Bootstrap CSS CDN -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">

  <!-- Favicons -->
  <!-- <link href="assets/img/favicon.png" rel="icon"> -->
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">
    


</head>

<body>

<div class="container m-8">
    <div class="d-flex justify-content-center m-1 ">
    <h1>Summary Assesment</h1>
  </div>

  <h4>Number of response</h4>
      <?php
      
        while($row1 = mysqli_fetch_array($result)){
                        echo'
                        <h3>
                          <b>'.$row1["number"].'</b>
                        </h3>
                        ';
                    }
                ?>

  <div id="content">
            <h2>Top1 choices and number of results</h2>
             <!-- start of datatable -->
              <table id="table_id" class="display" style="width: 100%">
               <thead>
                <tr>
                  <th>Top1 Choice</th>
                  <th>Number of result</th>   
                </tr>
               </thead>
            <?php
                    while($row = mysqli_fetch_array($result2)){
                        echo'
                        <tr>
                            <td>'.$row["top_choice"].'</td>
                            <td>'.$row["number"].'</td>
                        </tr>
                        ';
                    }
            ?>
            </table>
              <!-- end of datatable -->
  
        </div>
  
</div>

  

  <a href="#" class="back-to-top"><i class="ri-arrow-up-line"></i></a>
  <div id="preloader"></div>



</body>

</html>