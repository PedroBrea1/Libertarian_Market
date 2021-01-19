<!DOCTYPE html>
<html lang="zxx">
<head>
  <!-- Meta Tag -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name='copyright' content=''>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <!-- Title Tag  -->
    <title>Eshop - eCommerce HTML5 Template.</title>
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="images/favicon.png">
  <!-- Web Font -->
  
  
  <!-- StyleSheet -->
  
  <!-- Bootstrap -->
  <link rel="stylesheet" href="css/template/bootstrap.css">
  <!-- Magnific Popup -->
    <link rel="stylesheet" href="css/template/magnific-popup.min.css">
  <!-- fontawesome -->
    <link rel="stylesheet" href="css/font-awesome-4.7.0/font-awesome-4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/template/font-awesome.css">
  <!-- Fancybox -->
  <link rel="stylesheet" href="css/template/jquery.fancybox.min.css">
  <!-- Themify Icons -->
    <link rel="stylesheet" href="css/template/themify-icons1.css">
  <!-- Nice Select CSS -->
    <link rel="stylesheet" href="css/template/niceselect.css">
  <!-- Animate CSS -->
    <link rel="stylesheet" href="css/template/animate.css">
  <!-- Flex Slider CSS -->
    <link rel="stylesheet" href="css/template/flex-slider.min.css">
  <!-- Owl Carousel -->
    <link rel="stylesheet" href="css/template/owl-carousel.css">
  <!-- Slicknav -->
    <link rel="stylesheet" href="css/template/slicknav.min.css">
  
  <!-- Eshop StyleSheet -->
  <link rel="stylesheet" href="css/template/reset.css">
  <link rel="stylesheet" href="css/template/style5.css">
  <link rel="stylesheet" href="css/template/responsive2.css">

  
</head>
<body class="js">
  
  
  
  <!-- Header -->
  <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>   
            <span class="navbar-toggler-icon"></span>    
            <span class="navbar-toggler-icon"></span>  
          </button>
          <img src="../images/5d.png" />
          <a class="navbar-brand" href="../marketplace">Libertarian Market</a>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Marketplace
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="nav-link" href="../v-marketplace/T-SHIRTS-WOMEN-CONTENT-a11">Women T-shirts </a>
                  <a class="nav-link" href="../v-marketplace/T-SHIRTS-MEN-CONTENT-a11">Men T-shirts</a>
                  <a class="nav-link" href="../v-marketplace/TOWELS-CONTENT-a11">Towels</a>
                  <a class="nav-link" href="../v-marketplace/FASHION-CONTENT-a11">Fashion</a>
                  <a class="nav-link" href="../v-marketplace/BAGS-CONTENT-a11">Bags</a>
                  <a class="nav-link" href="../v-marketplace/CUPS-CONTENT-a11">Cups</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../libertarian-blog">Blog </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../contact-request">Contact</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0" action="../v-marketplace/search">
              <input class="form-control mr-sm-2" type="search" name="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </header>
  <!--/ End Header -->
  

  <!--/ End Slider Area -->
  

  
<body class="js">
  
@yield('content')

</body>
  

  

  

  

  

  
  <!-- Start Shop Services Area -->
  <section class="shop-services section home">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-12">
          <!-- Start Single Service -->
          <div class="single-service">
            <i class="ti-rocket"></i>
            <h4>Free shiping</h4>
            <p>Orders over $100</p>
          </div>
          <!-- End Single Service -->
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <!-- Start Single Service -->
          <div class="single-service">
            <i class="ti-reload"></i>
            <h4>Free Return</h4>
            <p>Within 30 days returns</p>
          </div>
          <!-- End Single Service -->
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <!-- Start Single Service -->
          <div class="single-service">
            <i class="ti-lock"></i>
            <h4>Sucure Payment</h4>
            <p>100% secure payment</p>
          </div>
          <!-- End Single Service -->
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <!-- Start Single Service -->
          <div class="single-service">
            <i class="ti-tag"></i>
            <h4>Best Peice</h4>
            <p>Guaranteed price</p>
          </div>
          <!-- End Single Service -->
        </div>
      </div>
    </div>
  </section>
  <!-- End Shop Services Area -->
  
  <!-- Start Shop Newsletter  -->
  <section class="shop-newsletter section">
    <div class="container">
      <div class="inner-top">
        <div class="row">
          <div class="col-lg-8 offset-lg-2 col-12">
            <!-- Start Newsletter Inner -->
            <div class="inner">
              <h4>Newsletter</h4>
              <p> Subscribe to our newsletter and get <span>10%</span> off your first purchase</p>
              <form class="newsletter-inner" id="form-newsletter3">
                @csrf
                <input name="username" placeholder="Your name" type="text">
                <input name="email" placeholder="Your email address" type="email">
                <button class="btn" type="submit">Subscribe</button>
              </form>
            </div>
            <!-- End Newsletter Inner -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Shop Newsletter -->


    <script src="../js/jquery.min.js"></script>
<script type="text/javascript">
         $(document).ready(function(){
            $('#form-newsletter3').submit(function(){

               var datos = $('#form-newsletter3').serialize();
               var form = $('#form-newsletter3');

               $.ajax({
                  type:"POST",
                  url:"../newsletter-sign-up",
                  data: datos,
                  error: function (data) {
                  alert("Please fill all the data correctly");
                },
                  success:function(r){
                        if (r == 1){
                              alert("Thank you for joining our community!");
                              form[0].reset();                              
                        }else{
                              alert("Please fill all the data correctly");
                        }
                  }
               });

               /*el return false lo que hace es que no vuelva a recargar despues de que se aplico la propiedad submit del boton*/
               /*el return false aqui colocado es lo que evita la recarga*/
               return false;

            });

         });
</script>

  
  <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="ti-close" aria-hidden="true"></span></button>
                    </div>
                    <div class="modal-body">
                        <div class="row no-gutters">
                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <!-- Product Slider -->
                  <div class="product-gallery">
                    <div class="quickview-slider-active">
                      <div class="single-slider">
                        <img src="https://via.placeholder.com/569x528" alt="#">
                      </div>
                      <div class="single-slider">
                        <img src="https://via.placeholder.com/569x528" alt="#">
                      </div>
                      <div class="single-slider">
                        <img src="https://via.placeholder.com/569x528" alt="#">
                      </div>
                      <div class="single-slider">
                        <img src="https://via.placeholder.com/569x528" alt="#">
                      </div>
                    </div>
                  </div>
                <!-- End Product slider -->
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div class="quickview-content">
                                    <h2>Flared Shift Dress</h2>
                                    <div class="quickview-ratting-review">
                                        <div class="quickview-ratting-wrap">
                                            <div class="quickview-ratting">
                                                <i class="yellow fa fa-star"></i>
                                                <i class="yellow fa fa-star"></i>
                                                <i class="yellow fa fa-star"></i>
                                                <i class="yellow fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                            <a href="#"> (1 customer review)</a>
                                        </div>
                                        <div class="quickview-stock">
                                            <span><i class="fa fa-check-circle-o"></i> in stock</span>
                                        </div>
                                    </div>
                                    <h3>$29.00</h3>
                                    <div class="quickview-peragraph">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iste laborum ad impedit pariatur esse optio tempora sint ullam autem deleniti nam in quos qui nemo ipsum numquam.</p>
                                    </div>
                  <div class="size">
                    <div class="row">
                      <div class="col-lg-6 col-12">
                        <h5 class="title">Size</h5>
                        <select>
                          <option selected="selected">s</option>
                          <option>m</option>
                          <option>l</option>
                          <option>xl</option>
                        </select>
                      </div>
                      <div class="col-lg-6 col-12">
                        <h5 class="title">Color</h5>
                        <select>
                          <option selected="selected">orange</option>
                          <option>purple</option>
                          <option>black</option>
                          <option>pink</option>
                        </select>
                      </div>
                    </div>
                  </div>
                                    <div class="quantity">
                    <!-- Input Order -->
                    <div class="input-group">
                      <div class="button minus">
                        <button type="button" class="btn btn-primary btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                          <i class="ti-minus"></i>
                        </button>
                      </div>
                      <input type="text" name="quant[1]" class="input-number"  data-min="1" data-max="1000" value="1">
                      <div class="button plus">
                        <button type="button" class="btn btn-primary btn-number" data-type="plus" data-field="quant[1]">
                          <i class="ti-plus"></i>
                        </button>
                      </div>
                    </div>
                    <!--/ End Input Order -->
                  </div>
                  <div class="add-to-cart">
                    <a href="#" class="btn">Add to cart</a>
                    <a href="#" class="btn min"><i class="ti-heart"></i></a>
                    <a href="#" class="btn min"><i class="fa fa-compress"></i></a>
                  </div>
                                    <div class="default-social">
                    <h4 class="share-now">Share:</h4>
                                        <ul>
                                            <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                            <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                            <li><a class="youtube" href="#"><i class="fa fa-pinterest-p"></i></a></li>
                                            <li><a class="dribbble" href="#"><i class="fa fa-google-plus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <!-- Modal end -->
  
  <!-- Start Footer Area -->
  <footer class="footer">
    <!-- Footer Top -->
    <div class="footer-top section">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-md-6 col-12">
            <!-- Single Widget -->
            <div class="single-footer about">
              <div class="logo">
                <a href="index.html"><img src="images/5d.png" alt="#"></a>
              </div>
              <p class="text">In this site we enhance competition which is one of the values of liberty under which you will find a diverse variety of products and services.</p>

              <p class="text">No one can know better than you what is your story, what are your dreams, what are your interests and preferences.</p>
              
            </div>
            <!-- End Single Widget -->
          </div>
          <div class="col-lg-2 col-md-6 col-12">
            <!-- Single Widget -->
            <div class="single-footer links">
              <h4>Information</h4>
              <ul>
                <li><a href="../about">About Us</a></li>
                <li><a href="#">Faq</a></li>
                <li><a href="../terms-and-conditions">Terms & Conditions</a></li>
                <li><a href="../contact-request">Contact Us</a></li>
                <li><a href="#">Help</a></li>
              </ul>
            </div>
            <!-- End Single Widget -->
          </div>
          <div class="col-lg-2 col-md-6 col-12">
            <!-- Single Widget -->
            <div class="single-footer links">
              <h4>Customer Service</h4>
              <ul>
                <li><a href="#">Payment Methods</a></li>
                <li><a href="#">Money-back</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Shipping</a></li>
                <li><a href="../privacy-policy">Privacy Policy</a></li>
              </ul>
            </div>
            <!-- End Single Widget -->
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <!-- Single Widget -->
            <div class="single-footer social">
              <h4>Get In Tuch</h4>
              <!-- Single Widget -->
              <div class="contact">
                <ul>                  
                  <li>Sydney, Australia</li>
                  <li>info@libertarianmarket.com</li>
                </ul>
              </div>
              <!-- End Single Widget -->
              <ul>
                <li><a href="https://www.facebook.com/Libertarian-Market-113410003686638" target="_blank"><i class="fa fa-facebook"></i></a></li>
                <li><a href="https://twitter.com/libermarket" target="_blank"><i class="fa fa-twitter"></i></a></li>
                <li><a href="https://www.pinterest.com.au/libertarianmarket/boards/" target="_blank"><i class="fa fa-pinterest-p"></i></a></li>
                <li><a href="https://www.instagram.com/libertarianmarket/" target="_blank"><i class="fa fa-instagram"></i></a></li>
              </ul>
            </div>
            <!-- End Single Widget -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Footer Top -->
    <div class="copyright">
      <div class="container">
        <div class="inner">
          <div class="row">
            <div class="col-lg-6 col-12">
              <div class="left">
                <p>Copyright © 2020 Libertarian Market  -  All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- /End Footer Area -->
 
  <!-- Jquery -->
    <script src="js/template/jquery.min.js"></script>
    <script src="js/template/jquery-migrate-3.0.0.js"></script>
  <script src="js/template/jquery-ui.min.js"></script>
  <!-- Popper JS -->
  <script src="js/template/popper.min.js"></script>
  <!-- Bootstrap JS -->
  <script src="js/template/bootstrap.min.js"></script>
  <!-- Color JS -->
  <script src="js/template/colors.js"></script>
  <!-- Slicknav JS -->
  <script src="js/template/slicknav.min.js"></script>
  <!-- Owl Carousel JS -->
  <script src="js/template/owl-carousel.js"></script>
  <!-- Magnific Popup JS -->
  <script src="js/template/magnific-popup.js"></script>
  <!-- Waypoints JS -->
  <script src="js/template/waypoints.min.js"></script>
  <!-- Countdown JS -->
  <script src="js/template/finalcountdown.min.js"></script>
  <!-- Nice Select JS -->
  <script src="js/template/nicesellect.js"></script>
  <!-- Flex Slider JS -->
  <script src="js/template/flex-slider.js"></script>
  <!-- ScrollUp JS -->
  <script src="js/template/scrollup.js"></script>
  <!-- Onepage Nav JS -->
  <script src="js/template/onepage-nav.min.js"></script>
  <!-- Easing JS -->
  <script src="js/template/easing.js"></script>
  <!-- Active JS -->
  <script src="js/template/active.js"></script>

</html>