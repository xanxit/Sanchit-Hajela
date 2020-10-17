// document.addEventListener("scroll",function(){
// document.addEventListener("DOMContentLoaded",k);
// function k(){
//       var q=document.querySelector(".navbar");
      window.addEventListener("scroll",myfunction)
      function myfunction()
      {
        if(this.scrollY> 20)
        {
        document.getElementById("navbar").classList.add("sticky");
      }
      else {
        document.getElementById("navbar").classList.remove("sticky");
      }
    }

  var mybutton = document.getElementById("btn");


  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }


  function topFunction() {
    document.documentElement.scrollTop = 0;
  }
  var typed = new Typed(".typing", {
          strings: ["Web Developer!", "Full Stack Developer!", "Analyst!"],
          typeSpeed: 100,
          backSpeed: 60,
          loop: true
      });
