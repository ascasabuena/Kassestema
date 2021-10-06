<?PHP 
        //Database Connection
    $host = "localhost";
    $username = "id16589742_kassesstema1";
    $password = "u}2y#cp!_Wp1N@&W";
    $dbname="id16589742_kassesstema";
    $con = mysqli_connect($host,$username,$password,$dbname);
        $sql = "SELECT name,text_message,date_comment FROM comment";

        $result = $con->query($sql);
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>ADOP-dashboard</title>
    <link rel="icon" href="CSS/images/apclogo.png" type="image/icon">

    <!-- Bootstrap CSS CDN -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
    
    <!-- datatables js -->
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">
    <script type="text/javascript" language="javascript" src="https://code.jquery.com/jquery-3.3.1.js"></script>
    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>

    <!-- Font Awesome JS -->
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js" integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ" crossorigin="anonymous"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js" integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY" crossorigin="anonymous"></script>
    
    
    <!-- Popper.JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
    
    <!-- Bootstrap JS -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
    <!-- jQuery Custom Scroller CDN -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js"></script>

    <!-- Our Custom CSS -->
    <link rel="stylesheet" href="CSS/dashboard.css">
    <!-- Scrollbar Custom CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css">

</head>

<body>

    <!-- sidebar -->
    <div class="wrapper">

        <!-- end of sidebar -->

        <!-- Page Content  -->
        <div id="content">
            <h2>Violation Reports</h2>
             <!-- start of datatable -->
              <table id="table_id" class="display" style="width: 100%">
               <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Comment</th>    
                </tr>
               </thead>
            <?php
                    while($row = mysqli_fetch_array($result)){
                        echo'
                        <tr>
                            <td>'.$row["name"].'</td>
                            <td>'.$row["date_comment"].'</td>
                            <td>'.$row["text_message"].'</td>
                        </tr>
                        ';
                    }
            ?>
            </table>
              <!-- end of datatable -->


  
        </div>
    </div>


</body>

</html>