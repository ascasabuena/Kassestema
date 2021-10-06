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
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>KASSESSTEMA</title>
  <link rel="icon" type="image/png" href="logo2/kassesstema.png"/>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <!-- <link href="assets/img/favicon.png" rel="icon"> -->
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Jost:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/icofont/icofont.min.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
  <link href="assets/vendor/venobox/venobox.css" rel="stylesheet">
  <link href="assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">

</head>

<body>

  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center">

      <!-- <h1 class="logo mr-auto"><a href="index.html">SCA</a></h1> -->
      <!-- Uncomment below if you prefer to use an image logo -->
       <a href="index.php" class="logo mr-auto"><img src="logo2/kassesstema.png" alt="" class="img-fluid"></a>

      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li class="active"><a href="index.php">Home</a></li>
          <li><a href="#portfolio">Forum</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#contact">Feedback</a></li>

        </ul>
      </nav><!-- .nav-menu -->

      <a href="start.html" class="get-started-btn scrollto">Start Assesment</a>

    </div>
  </header><!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex align-items-center bg-cover" style="background: url(logo2/homepagebg2.png); height: 130vh;">

    <div class="container">
      <div class="row">
        <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h1>KASSESSTEMA</h1>
          <p style="color: #F4FDD9">Get to relate your personality, skills, and preferences to training courses to find a job you'll enjoy. The powerful specially made systems are used in our free, in-depth career test to reliably assess your career aptitude and show you the unique jobs that make the most of your strengths. <br><br>As you're the one who can determine what career path is best for you, a career test isn't fully used as a tool to address what is best for you. These tests are only intended to act as a reference, and they depend on numerous hypotheses to back up the findings that are given to you.  
          <br><br>
        This website gives students’ the information that they will need about the STEM related college courses such as Medical Technology, Engineering, Statistics, Information and Technology, and such. This website will be a guide for the students to assess the career that they really want.
        The website features include statement assessments, courses overview, universities offered, forum, and feedback.</p>
        <br>

          <div class="d-lg-flex">
            <a href="start.html" class="btn-get-started scrollto">Start Assesment</a>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <div style="display: flex; justify-content: center;"> 
            <img src="logo2/e-learning.png" class="img-fluid animated" alt="" style="max-width: 60%">
          </div>
          
          
          <div class="row" style="display: flex; justify-content: flex-end;">
              <img src="logo2/STEM_soc.png" class="img-fluid animated" alt="" style="max-width: 10%">
              <img src="logo2/umak.png" class="img-fluid animated" alt="" style="max-width: 10%">
            
          </div>
        </div>

      </div>
    </div>

  </section><!-- End Hero -->

  <main id="main">  

    <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="portfolio">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Forum</h2>
          <h4>Note: This is a public forum and the team will greatly appreciate if you will leave your comments, suggestions and questions courteously. Thank you! </h4>
          <div class="card text-left">
            <ul class="list-group list-group-flush">
                <?php
              while($row = mysqli_fetch_array($result)){
                  echo' 
                  <li class="list-group-item"><b>'.$row["name"].'</b><br>'.$row["date_comment"].'<br>'.$row["text_message"].'</li>
                  ';
              }
            ?>
            </ul>
            
          </div>

          <form action="insertComment.php" method="POST" class="mt-5" validate>
            <!-- indent -->
          <div class="form-row align-items-center">
            <div class="col-sm-3 my-1">
              <input type="text" class="form-control" id="name" name="name" placeholder="Name" required>
            </div>
            <div class="col-sm-7 my-1">
            <div class="input-group">
              <input type="text" class="form-control" id="text" name="text" placeholder="Your comment..." required>
            </div>
          </div>

          <div class="col-auto my-1">
            <!-- <button type="submit" class="btn btn-success" value="Submit">Post comment</button> -->
            <input class="btn btn-success" type="submit" id="button" name =" Submit" value="Post comment">
          </div>
        </div>
      </form>
      <!-- indent -->
        </div>

       

    <!-- ======= Team Section ======= -->
    <section id="team" class="team section-bg d-flex align-items-center">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Team</h2>
          <p>Team Sirius consists with 6 members with different perspectives and personalities but with one goal in their mind and that is to help every undecided STEM students for their future careers.</p>
        </div>

        <div class="row">

          <div class="col-lg-6">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
              <div class="pic"><img src="team/ALDRIN.png" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Aldrin R. Merilles</h4>
                <span>Member</span>
                <p>amerilles.k11940926@umak.edu.ph</p>
                <div class="social">
                  <a href="https://mobile.twitter.com/a_majesty "><i class="ri-twitter-fill"></i></a>
                  <a href="https://m.facebook.com/aldrin.merilles.1"><i class="ri-facebook-fill"></i></a>
                  <a href="https://www.instagram.com/a_aurum_/"><i class="ri-instagram-fill"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4 mt-lg-0">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
              <div class="pic"><img src="team/ARAVELA.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Aravela Atilano</h4>
                <span>Member</span>
                <p>aatilano.k11941048@umak.edu.phz</p>
                <div class="social"> 
                  <a href="https://www.facebook.com/profile.php?id=100005963085743"><i class="ri-facebook-fill"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="300">
              <div class="pic"><img src="team/CHARLOTTE.png" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Charlotte Royong</h4>
                <span>Member</span>
                <p>croyong.k11939047@umak.edu.ph</p>
                <div class="social">
                  <a href="https://twitter.com/chaaaaarlootte_"><i class="ri-twitter-fill"></i></a>
                  <a href="https://www.facebook.com/charlotteroyongg/"><i class="ri-facebook-fill"></i></a>
                  <a href="https://www.instagram.com/charlotteroyong/"><i class="ri-instagram-fill"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
              <div class="pic"><img src="team/KYLE.png" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Kyle Vincent Taguiwalo</h4>
                <span>Member</span>
                <p>ktaguiwalo.k11941699@umak.edu.ph</p>
                <div class="social">
                  <a href="https://www.facebook.com/kylevincent.taguiwalo.2002/"><i class="ri-facebook-fill"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
              <div class="pic"><img src="team/RONALYN2.png" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Ronalyn Carino</h4>
                <span>Member</span>
                <p>rcarino.k11937882@umak.edu.ph</p>
                <div class="social">
                  <a href="https://www.facebook.com/rnlyncrn/"><i class="ri-facebook-fill"></i></a>
                  <a href="https://www.instagram.com/carinoronalynn/"><i class="ri-instagram-fill"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
              <div class="pic"><img src="team/TRISHA.png" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Trisha Lene Antolin</h4>
                <span>Member</span>
                <p>tantolin.k11935555@umak.edu.ph</p>
                <div class="social">
                  <a href="https://twitter.com/trisha_leneee"><i class="ri-twitter-fill"></i></a>
                  <a href="https://www.facebook.com/trishalene"><i class="ri-facebook-fill"></i></a>
                  <a href="https://www.instagram.com/trisha_lene/"><i class="ri-instagram-fill"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section><!-- End Team Section -->


    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Help us improve!</h2>
          <p> We want to improve your experience, and hope you'll take a moment to rate us. Please elaborate on your answer by commenting below, and let us hear your thoughts!</p>
        </div>

        <div class="row">

          <div class="col-lg-5 d-flex align-items-stretch">
            <div class="info">
              <div class="address">
                <i class="icofont-google-map"></i>
                <h4>Location:</h4>
                <p>University of Makati</p>
              </div>

              <div class="email">
                <i class="icofont-envelope"></i>
                <h4>Email:</h4>
                <p>teamsiriusinfo@gmail.com</p>
              </div>

               <!-- <div class="footer-links">
            <h4>Our Social Networks</h4>
            <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
            <div class="social-links mt-3">
              <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
              <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
              <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
              <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
          </div> -->

            </div>

          </div>

          <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="sendFeedback.php" method="post" role="form" class="php-email-form">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" class="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validate"></div>
                </div>
                <!--<div class="form-group col-md-6">
                  <label for="name">Your Email</label>
                  <input type="email" class="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validate"></div>
                </div>-->
              </div>
              <!--<div class="form-group">
                <label for="name">Subject</label>
                <input type="text" class="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div class="validate"></div>
              </div>-->
              <div class="form-group">
                <label for="name">Message</label>
                <textarea class="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                <div class="validate"></div>
              </div>
              <div class="mb-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section><!-- End Contact Section -->

  </main><!-- End #main -->

  

  <a href="#" class="back-to-top"><i class="ri-arrow-up-line"></i></a>
  <div id="preloader"></div>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/jquery/jquery.min.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>
  <script src="assets/vendor/waypoints/jquery.waypoints.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/venobox/venobox.min.js"></script>
  <script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>

</body>

</html>