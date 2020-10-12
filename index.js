// document.addEventListener("scroll",function(){
document.addEventListener("DOMContentLoaded",k);
function k(){
      var q=document.querySelector(".navbar");
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
  }
