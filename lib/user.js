module.exports = {
  HTML: function (header, footer, users, queryData_email, image_name) {
     return`
     <!doctype html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1" />
 <title>Runner onepage - html</title>
 <meta name="keywords" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.">
 <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.">

 <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
 <link rel="stylesheet" href="assets/fonts/flat-icon/flaticon.css">
 <link rel="stylesheet" href="css/style.css">

 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
 <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
 <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
 <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
 
 
<style>
/*
Flaticon icon font: Flaticon
Creation date: 28/09/2017 13:51
*/

@import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);

@font-face {
font-family: "Flaticon";
src: url("./Flaticon.eot");
src: url("./Flaticon.eot?#iefix") format("embedded-opentype"),
 url("./Flaticon.woff") format("woff"),
 url("./Flaticon.ttf") format("truetype"),
 url("./Flaticon.svg#Flaticon") format("svg");
font-weight: normal;
font-style: normal;
}

@media screen and (-webkit-min-device-pixel-ratio:0) {
@font-face {
font-family: "Flaticon";
src: url("./Flaticon.svg#Flaticon") format("svg");
}
}

[class^="flaticon-"]:before, [class*=" flaticon-"]:before,
[class^="flaticon-"]:after, [class*=" flaticon-"]:after {   
font-family: Flaticon;
  font-size: 20px;
font-style: normal;
margin-left: 20px;
}

.flaticon-google-plus:before { content: "\f100"; }
.flaticon-linkedin-logo:before { content: "\f101"; }
.flaticon-envato:before { content: "\f102"; }
.flaticon-twitter-logo-silhouette:before { content: "\f103"; }
.flaticon-pinterest-logo:before { content: "\f104"; }
.flaticon-instagram-photo-camera-symbol:before { content: "\f105"; }
.flaticon-facebook-letter-logo:before { content: "\f106"; }
</style>

<style>

.login-container{
  margin-top: 5%;
  margin-bottom: 5%;
}
.login-form-1{
  padding: 5%;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form-1 h3{
  text-align: center;
  color: #333;
}
.login-form-2{
  padding: 5%;
  background: #0062cc;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form-2 h3{
  text-align: center;
  color: #fff;
}
.login-container form{
  padding: 10%;
}
.btnSubmit
{
  width: 100%;
  border-radius: 1rem;
  padding: 1.5%;
  border: none;
  cursor: pointer;
}
.login-form-1 .btnSubmit{
  font-weight: 600;
  color: #fff;
  background-color: #0062cc;
}
.login-form-2 .btnSubmit{
  font-weight: 600;
  color: #0062cc;
  background-color: #fff;
}
.login-form-2 .ForgetPwd{
  color: #fff;
  font-weight: 600;
  text-decoration: none;
}
.login-form-1 .ForgetPwd{
  color: #0062cc;
  font-weight: 600;
  text-decoration: none;
}





@font-face {
  font-family: 'Geometria';
  src: url("https://raw.githubusercontent.com/kimxminsu/App_kickkick/minsu/font/fonts/Geometria.ttf");
}

@font-face {
  font-family: 'Geometria-Bold';
  src: url("https://raw.githubusercontent.com/kimxminsu/App_kickkick/minsu/font/fonts/Geometria-Bold.ttf");
}

@font-face {
  font-family: 'Geometria-Medium';
  src: url("https://raw.githubusercontent.com/kimxminsu/App_kickkick/minsu/font/fonts/geometria-medium.ttf");
}

@media (min-width: 1400px) {
.container{
    width:1370px;
    margin: 0 auto;
  }
}

ul li, li{
  list-style-type: none;
}

ul{
  padding-left: 0;
}

a:hover, a:focus{
  text-decoration: none;
  outline: 0;
}

button:focus{
  outline: 0 !important;
}

input[type="submit"]:focus{
  outline: 0;
}

@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://raw.githubusercontent.com/kimxminsu/App_kickkick/minsu/font/iconfont/MaterialIcons-Regular.ttf);
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
}

html,body {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden; 
  font-family: 'Geometria';
  line-height: 1.8;
}

h1,h2{
  font-family: 'Geometria-Bold';
}

p{
  font-family: "Geometria";
  font-weight: bold;
}

.navbar-toggle{
  background-color: #ddd;
  height: 20px;
  width: 45px;
  color:red;
  
}

.navbar-toggle .icon-bar{
  background-color: #fff;
}

.nav li a:hover, .nav li a:focus{
  background: transparent;
}

.gutters-80.row{
  margin-right: -40px;
  margin-left: -40px;
}

@media (max-width: 1199px){

.gutters-80.row{
    margin-right: -15px;
    margin-left: -15px
}
  }

.gutters-80 > [class^="col-"]{
  padding-right: 40px;
  padding-left: 40px;
}

@media (max-width: 1199px){

.gutters-80 > [class^="col-"]{
    padding-right: 15px;
    padding-left: 15px
}
  }


  .header--bg{
    background-color: #1680f8;
    background-size: 100% 100%;
  }

@media (max-width: 1399px){

.header--bg{
      background-size: cover
  }
    }

.header .navbar{
    padding-top: 20px;
    background: transparent;
  }
@media(min-width: 1000px){
  .header .nav li{
    padding-right: 15px;
  }
  .header .nav li:last-child{
    padding-right: 0;
  }
}

.header .nav li a{
  font-family: 'Geometria-Medium';
  font-size: 15px;
  color: #b0bec5;
}

@media (min-width: 1390px){
  .header .nav li a:hover{
    color: #0f81f8;
  }
}


@media(max-width: 900px){
  .navbar .nav{
    float: none !important;
  }
}

.header .row{
    padding-top: 40px;
    padding-bottom: 120px;
  }

.header__content .title{
      font-size: 55px;
      background: -webkit-linear-gradient(#2086F7, #2BA8F7);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1.3;
      padding-top: 25px;
      margin-bottom: 30px;
    }

.header__content .title-style{
        background: url("https://raw.githubusercontent.com/kimxminsu/App_kickkick/minsu/img/title-shape.png") left center no-repeat;
        padding: 0px 135px;
        vertical-align: middle;
        margin-left: 20px;
      }

.header__content p{
      font-size: 18px;
      color: #08294c;
      font-weight: bold;
      line-height: 2;
      margin-bottom: 50px;
    }

.header__button{
    display: inline-block;
    font-family: 'Geometria-Medium';
    font-size: 16px;
    color: #0f81f8;
    padding: 13px 50px;
    border: 1px solid #1A82F8;
    border-radius: 30px;
    position: relative;
    background-color: transparent;
    text-shadow: 1px 4px 4px rgba(0, 0, 0, .3);
    margin-right: 20px;
  }

@media (max-width: 1199px){

.header__button{
      border-color: gray;
      color: #fff;
      margin-bottom: 20px
  }
    }

.header__button:after{
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border-radius: inherit;
      border: inherit;
      -webkit-filter: drop-shadow(3px 5px 2px rgba(0, 0, 0, .4));
              filter: drop-shadow(3px 5px 2px rgba(0, 0, 0, .4));
    }

.header__button:hover{
      background-color: #0F81F8;
      color: #fff;
      text-shadow: none;
      border:0;
      -webkit-box-shadow: 3px 4px 7px rgba(0, 0, 0, 0.21);
              box-shadow: 3px 4px 7px rgba(0, 0, 0, 0.21);
    }

.navbar-brand{
  background: url("https://raw.githubusercontent.com/kimxminsu/App_kickkick/minsu/img/logo.png") left center no-repeat;
  padding:0px 90px;
}

.page-section{
  padding-top: 100px;
  padding-bottom: 120px;
}

.page-section__title{
    font-size: 40px;
    color: #1680F8;
    margin-bottom: 5px;
  }

.page-section__title--white{
      color: #fff;
    }

.page-section__subtitle{
    font-size: 16px;
    color: #08294c;
    margin-bottom: 80px;
  }

.page-section__subtitle a{
      font-family: "Geometria-Medium";
      color: #1780F8;
    }

.page-section__subtitle--white{
      color: #fff;
    }

.page-section__title-style{
    margin-bottom: 30px;
  }

.page-section__title-style .first-line{
      display: inline-block;
      border-top: 3px solid #1680F8;
      border-bottom: 3px solid #1680F8;
      padding: 0px 120px;
      border-radius: 5px;
      position: relative;
    }

.page-section__title-style .first-line:after{
        content: "";
        width: 7px;
        height: 7px;
        display: inline-block;
        border-radius: 50%;
        position: absolute;
        right: -17px;
        top:-4px;
        background-color: #1680F8;
      }

.page-section__title-style .second-line{
      display: inline-block;
      border-top: 3px solid #1680F8;
      border-bottom: 3px solid #1680F8;
      padding: 0px 40px;
      border-radius: 5px;
      position: relative;
      margin-left: 38px;
    }

.page-section__title-style .second-line:before{
        content: "";
        width: 7px;
        height: 7px;
        display: inline-block;
        border-radius: 50%;
        position: absolute;
        left: -15px;
        top: -4px;
        background-color: #1680F8;
      }

.steps__box{
  margin: 5%;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}

.steps__single{
    margin-bottom: 80px;
  }

.steps__single img{
      margin-bottom: 30px;
    }

.steps__single p{
      max-width: 170px;
      margin-right: auto;
      margin-left: auto;
    }

.steps__single-first{
      float: left;
    }

@media (max-width: 991px){

.steps__single-first{
        float: none
    }
      }

.steps__single-last{
      float: right;
    }

@media (max-width: 991px){

.steps__single-last{
        float: none
    }
      }

.button{

  display: inline-block;
  padding: 12px 55px;
  font-family: "Geometria-Medium";
  font-size: 16px;
  color: #fff;
  border-radius: 30px;
  background-color: #1680F8;
  -webkit-box-shadow: 3px 4px 7px rgba(0, 0, 0, 0.21);
          box-shadow: 3px 4px 7px rgba(0, 0, 0, 0.21);
}

.button--white{
    background-color: #fff;
    color: #0f81f8;
  }

.button--form{
    display: inline-block;
    padding: 12px 30px;
    border-radius: 30px;
    border: 0;
    font-family: "Geometria-Medium";
    background-color: #fff;
    font-size: 16px;
    color: #0f81f8;
    -webkit-box-shadow: 3px 4px 7px rgba(0, 0, 0, 0.21);
            box-shadow: 3px 4px 7px rgba(0, 0, 0, 0.21);
  }

.video--bg{
    background-color: white;
  }

.video__left{
    background: url("https://raw.githubusercontent.com/kimxminsu/App_kickkick/minsu/img/video-player-bg.png") left center no-repeat;
    height: 450px;
    background-size: cover;
  }

.video__left .material-icons{
      font-size: 80px;
      color: #0f81f8;
      position: absolute;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
              transform: translate(-50%, -50%);
    }

.video__title{
    font-size: 40px;
    color: #ffffff;
  }

.video__title-style{
    margin-bottom: 30px;
  }

.video__title-style .first-line{
      display: inline-block;
      border-top: 3px solid #fff;
      border-bottom: 3px solid #fff;
      padding: 0px 100px;
      border-radius: 5px;
      position: relative;
    }

.video__title-style .first-line:after{
        content: "";
        width: 7px;
        height: 7px;
        display: inline-block;
        border-radius: 50%;
        position: absolute;
        right: -17px;
        top:-4px;
        background-color: #fff;
      }

.video__title-style .second-line{
      display: inline-block;
      border-top: 3px solid #fff;
      border-bottom: 3px solid #fff;
      padding: 0px 40px;
      border-radius: 5px;
      position: relative;
      margin-left: 38px;
    }

.video__title-style .second-line:before{
        content: "";
        width: 7px;
        height: 7px;
        display: inline-block;
        border-radius: 50%;
        position: absolute;
        left: -15px;
        top: -4px;
        background-color: #fff;
      }

.video__right{
    margin-top: 10%;
  }

.video__right p{
      font-weight: bold;
      font-size: 16px;
      color: #fff;
      max-width: 350px;
      margin-right: auto;
      margin-left: auto;
      margin-bottom: 40px;
    }

#myModal{
  background: rgba(0, 0, 0, 0.8);
}

#myModal .close{
    background: rgba(255,64,134, 1) !important;
    z-index: 890;
    color: #fff;
    font-size: 24px;
    margin: 0;
    outline: none;
    opacity: 1;
    position: absolute;
    right: 0;
    text-shadow: none;
    top: 0;
    width: 28px;
    height: 28px;
  }

#myModal .modal-body{
    padding: 0;
  }

#myModal .embed-responsive {
    height: 489px;
    padding: 0;
    overflow: hidden;
  }

.sponsors--bg{
    background-color: #FAFAFA;
    padding-top: 50px;
    padding-bottom: 50px;
  }

.sponsors__single{
    text-align: center;
  }

@media(max-width: 1199px){

.sponsors__single{
      margin-bottom: 50px
  }
    }

.testimonial__title-style{
    margin-bottom: 30px;
  }

.testimonial__title-style .first-line{
      display: inline-block;
      border-top: 3px solid #1680F8;
      border-bottom: 3px solid #1680F8;
      padding: 0px 70px;
      border-radius: 5px;
      position: relative;
    }

.testimonial__title-style .first-line:after{
        content: "";
        width: 7px;
        height: 7px;
        display: inline-block;
        border-radius: 50%;
        position: absolute;
        right: -17px;
        top:-4px;
        background-color: #1680F8;
      }

.testimonial__title-style .second-line{
      display: inline-block;
      border-top: 3px solid #1680F8;
      border-bottom: 3px solid #1680F8;
      padding: 0px 25px;
      border-radius: 5px;
      position: relative;
      margin-left: 38px;
    }

.testimonial__title-style .second-line:before{
        content: "";
        width: 7px;
        height: 7px;
        display: inline-block;
        border-radius: 50%;
        position: absolute;
        left: -15px;
        top: -4px;
        background-color: #1680F8;
      }

.testimonial .button-testimonial{
    background-color: #fff;
    border: 0;
    text-align: left;
    display: block;
    padding-left: 90px;
    margin-top: 25px;
  }

.testimonial .button-testimonial h2{
      font-size: 20px;
      color: #08294c;
      margin-bottom: 5px;
    }

.testimonial .button-testimonial p{
      font-size: 13px;
      color: #08294c;
    }

.testimonial .button-testimonial-1{
      background: url("https://raw.githubusercontent.com/kimxminsu/App_kickkick/minsu/img/testimonial1.png") left center no-repeat;
    }

.testimonial .button-testimonial-2{
      background: url("https://raw.githubusercontent.com/kimxminsu/App_kickkick/minsu/img/testimonial2.png") left center no-repeat;
    }

.testimonial .button-testimonial-3{
      background: url("https://raw.githubusercontent.com/kimxminsu/App_kickkick/minsu/img/testimonial3.png") left center no-repeat;
    }

.testimonial .button-testimonial-4{
      background: url("https://raw.githubusercontent.com/kimxminsu/App_kickkick/minsu/img/testimonial4.png") left center no-repeat;
    }

.testimonial .collapsed{
    opacity: .4;
  }

.testimonial .collapse__wrapper{
    padding: 20px 40px;
    -webkit-box-shadow: 0px 2px 20px 2px rgba(0, 0, 0, 0.09);
            box-shadow: 0px 2px 20px 2px rgba(0, 0, 0, 0.09);
    border-radius: 7px;
  }

.testimonial .collapse__wrapper .paragraph{
      font-size: 16px;
      color: #08294c;
      line-height: 2;
      padding-bottom: 90px;
    }

.testimonial .collapse__wrapper .bio h2{
        font-size: 30px;
        color: #08294c;
        margin-bottom: 5px;
      }

.testimonial .collapse__wrapper .bio p{
        font-size: 16px;
        color: #08294c;
      }

.testimonial .collapse__wrapper .bio-1{
        background: url("https://raw.githubusercontent.com/kimxminsu/App_kickkick/minsu/img/testimonial1.png") left center no-repeat;
        padding: 5px 100px;
      }

.testimonial .collapse__wrapper .bio-2{
        background: url("https://raw.githubusercontent.com/kimxminsu/App_kickkick/minsu/img/testimonial2.png") left center no-repeat;
        padding: 5px 100px;
      }

.testimonial .collapse__wrapper .bio-3{
        background: url("https://raw.githubusercontent.com/kimxminsu/App_kickkick/minsu/img/testimonial3.png") left center no-repeat;
        padding: 5px 100px;
      }

.testimonial .collapse__wrapper .bio-4{
        background: url("https://raw.githubusercontent.com/kimxminsu/App_kickkick/minsu/img/testimonial4.png") left center no-repeat;
        padding: 5px 100px;
      }

.testimonial .collapse__wrapper .star{
      margin-top: 40px;
      margin-bottom: 20px;     
    }

.testimonial .collapse__wrapper .star li{
        display: inline-block;
      }

.testimonial .collapse__wrapper .star li .material-icons{
          font-size: 19px;
          color: #0f81f8;
          margin-right: 5px;
        }

.testimonial-right{
    padding-left: 50px;
    max-height: 470px;
    overflow-y: scroll;
  }

@media (max-width: 991px){

.testimonial-right{
      margin-top: 40px
  }
    }

.collapse.in:after{
  content: "";
  width: 0; 
  height: 0; 
  border-top: 16px solid transparent;
  border-bottom: 16px solid transparent;
  border-left: 25px solid #fff;
  position: absolute;
  top: 40px;
  right: -10px;
  -webkit-filter: drop-shadow(3px 0px 2px rgba(0, 0, 0, 0.07));
          filter: drop-shadow(3px 0px 2px rgba(0, 0, 0, 0.07));
}

@media(max-width: 991px){

.collapse.in:after{
    display: none
}
  }


.team--bg{
    background-color: #FCFCFC;
  }

.team__title-style{
    margin-bottom: 30px;
  }

.team__title-style .first-line{
      display: inline-block;
      border-top: 3px solid #1680F8;
      border-bottom: 3px solid #1680F8;
      padding: 0px 50px;
      border-radius: 5px;
      position: relative;
    }

.team__title-style .first-line:after{
        content: "";
        width: 7px;
        height: 7px;
        display: inline-block;
        border-radius: 50%;
        position: absolute;
        right: -17px;
        top:-4px;
        background-color: #1680F8;
      }

.team__title-style .second-line{
      display: inline-block;
      border-top: 3px solid #1680F8;
      border-bottom: 3px solid #1680F8;
      padding: 0px 18px;
      border-radius: 5px;
      position: relative;
      margin-left: 38px;
    }

.team__title-style .second-line:before{
        content: "";
        width: 7px;
        height: 7px;
        display: inline-block;
        border-radius: 50%;
        position: absolute;
        left: -15px;
        top: -4px;
        background-color: #1680F8;
      }

.team__single{
    border-radius: 10px;
    border:0;
    -webkit-box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
            box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
    padding: 30px 25px;
  }

@media (max-width: 991px){

.team__single{
      margin-bottom: 50px
  }
    }

.team__single .bio img{
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }

.team__single .bio h2{
        font-size: 20px;
        color: #08294c;
      }

.team__single .bio p{
        font-size: 16px;
        color: #08294c;
      }

.team__single .caption p{
        font-size: 16px;
        color: #08294c;
        line-height: 1.8;
        margin-bottom: 25px;
      }

.team__single .caption .social-icons li{
          display: inline-block;
          margin-right: 15px;
          vertical-align: middle;
        }

.team__single .caption .social-icons li a{
            display: block;
          }

.team__single .caption .social-icons li [class^="flaticon-"]:before, .team__single .caption .social-icons li [class*=" flaticon-"]:before{
            margin: 0;
            width: 22px;
            height: 22px;
            display: block;
            border-radius: 50%;
            font-size: 12px;
            padding-top: 2px;
            text-align: center;
            background-color: #DBE4E8;
            color: #fff;
          }

.form--bg{
     background-color: white;
    background-size: cover;
  }

.form__title-style{
    margin-bottom: 30px;
  }

.form__title-style .first-line{
      display: inline-block;
      border-top: 3px solid #fff;
      border-bottom: 3px solid #fff;
      padding: 0px 58px;
      border-radius: 5px;
      position: relative;
    }

.form__title-style .first-line:after{
        content: "";
        width: 7px;
        height: 7px;
        display: inline-block;
        border-radius: 50%;
        position: absolute;
        right: -17px;
        top:-4px;
        background-color: #fff;
      }

.form__title-style .second-line{
      display: inline-block;
      border-top: 3px solid #fff;
      border-bottom: 3px solid #fff;
      padding: 0px 20px;
      border-radius: 5px;
      position: relative;
      margin-left: 38px;
    }

.form__title-style .second-line:before{
        content: "";
        width: 7px;
        height: 7px;
        display: inline-block;
        border-radius: 50%;
        position: absolute;
        left: -15px;
        top: -4px;
        background-color: #fff;
      }

.form form{
    max-width: 540px;
    margin-right: auto;
    margin-left: auto;
  }

.form form .form-group{
      margin-bottom: 40px;
    }

.form form .form-control{
      outline: none;
      border: none;
      background: transparent;
      outline-style: none;
      outline-offset: 0;
      -webkit-box-shadow: none;
              box-shadow: none;
      border-bottom: 1px solid #C1DEFD;
      border-radius: 0;
      color: #1680f8;
      padding: 0px 10px;
    }

.form form .checkbox{
      padding-left: 40px;
    }

.form form .checkbox label{
        font-size: 15px;
        color: #fff;
        padding-left: 5px;
        position: relative;
        bottom: 2px;
      }

.form form .form-button{
      text-align: right;
    }

@media (max-width: 991px){

.form form .form-button{
        text-align: left;
        padding-top: 20px
    }
      }

.form ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    font-size: 16px;
    color: #1680f8;
}

.form :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   font-size: 16px;
   color: #1680f8;
}

.form ::-moz-placeholder { /* Mozilla Firefox 19+ */
   font-size: 16px;
   color: #1680f8;
}

.form :-ms-input-placeholder { /* Internet Explorer 10-11 */
   font-size: 16px;
   color: #1680f8;
}

.form ::-ms-input-placeholder { /* Microsoft Edge */
   font-size: 16px;
   color: #1680f8;
}

.footer--bg{
    background-color: #102F4F;
    padding-top: 50px;
    padding-bottom: 50px;
  }

.footer__left .navbar-brand{
      margin-bottom: 50px;
      display: block;
      float: none;
      margin-top: 10px;
    }

.footer__left p{
      color: #fff;
      font-size: 15px;
    }

.footer__left p span{
        color: #8392A4;
      }

.footer__link li{
      margin-bottom: 20px;
    }

.footer__link li a{
        font-family: "Geometria-Medium";
        font-size: 16px;
        color: #254B74;
      }

.footer__social-icons{
    text-align: right;
    margin-top: 60px;
  }

.footer__social-icons li{
      display: inline-block;
      margin-right: 15px;
    }

.footer__social-icons li:last-child{
        margin-right: 0;
      }

.footer__social-icons li [class^="flaticon-"]:before, .footer__social-icons li [class*=" flaticon-"]:before{
        margin: 0;
        width: 22px;
        height: 22px;
        display: block;
        border-radius: 50%;
        font-size: 12px;
        text-align: center;
        background-color: #4C627A;
        color: #102F4F;
      }

.footer__social-icons li a{
        display: block;
      }

@media (max-width: 991px){
    .footer .row>div{
      margin-bottom: 50px;
    }
  }

#user_image {
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}

.user_form {
  margin-top:20px;
}

#file_upload{
  display: flex;
  align-items: center;
  justify-content: center;
}

.filebox label {
  display: inline-block;
  padding: 10px 30px;
  border-radius: 30px;
  border: 0;
  margin: 1px 10px 0px 0px;
  font-family: "Geometria-Medium";
  background-color: #fff;
  font-size: 16px;
  color: #0f81f8;
  -webkit-box-shadow: 3px 4px 7px rgba(0, 0, 0, 0.21);
          box-shadow: 3px 4px 7px rgba(0, 0, 0, 0.21);
}



.filebox label:active {
  background-color: white;
}

.filebox input[type="file"] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

</style>

</head>
<body>
 <div id="content-wrapper">
  <header class="header header--bg">
     ${header}
  </header>

  <section class="form form--bg">
  <div class="container">
    <div class="page-section">
      <div class="text-center">
        <h2 class="page-section__title">MYPAGE</h2>
        <div class="form__title-style">
          <span class="first-line"></span>
          <span class="second-line"></span>
        </div>
        <img id="user_image" src="http://202.30.32.218:3000/uploads/${image_name}" alt="" width="150em" height="150em">
        <p class="page-section__subtitle">
          <a href="">${users[0].team}</a> 팀의
          <a href="">${users[0].name}</a> 님의 정보입니다
        </p>
      </div>
      <form action="/upload?email=${queryData_email}" method="post" enctype="multipart/form-data">
        <div id="file_upload">  
          <div class="filebox">
            <label for="ex_file">IMAGE</label>
            <input type="file" id="ex_file" name='userfile'>
          </div>
          <input type="submit" value="SUBMIT" class="button--form" /> 
        </div>   
      </form>  
      <form class="user_form">
        <div class="form-group">
          포지션<input class="form-control" type="text" name="positon" value=${users[0].position} readonly>
        </div>
        <div class="form-group">
          생년월일<input class="form-control" type="date" name="age" value=${users[0].age} readonly>
        </div>
        <div class="form-group">
          키<input class="form-control" type="text" name="height" value=${users[0].height} readonly>
        </div>
        <div class="form-group">
          몸무게<input class="form-control" type="text" name="weight" value=${users[0].weight} readonly>
        </div>
        <div class="form-group">
          성별<input class="form-control" type="text" name="gender" value=${users[0].gender} readonly>
        </div>      
         
        <div class="row">
          <div class="col-md-12 form-button">
            <input class="button--form" type="button" value="MODIFY" onClick="location.href= '/user/update?email=${queryData_email}' ">
          </div>
        </div>

      </form>
    </div>
  </div>
</section>


   <footer class="footer footer--bg">
       ${footer}
   </footer>

 </div>






 <script src="assets/jquery/jquery-3.2.1.min.js"></script>
 <script src="assets/bootstrap/js/bootstrap.min.js"></script>
 <!-- <script src="assets/owl-slider/owl.carousel.min.js"></script> -->

 <script>
   $(document).ready(function() {
     
     $('button').click( function(e) {
       $('.collapse').collapse('hide');
     });


     
   });
 </script>
</body>
</html>  


     `;
  }
}