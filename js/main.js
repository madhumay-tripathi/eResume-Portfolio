
// header scroll
let nav = document.querySelector(".navbar");
let imgaqua = document.querySelector(".img-aqua-logo");
let imgred = document.querySelector(".img-red-logo");
window.onscroll = function(){
    if(document.documentElement.scrollTop>18){
        nav.classList.add("header-scrolled");
        imgred.classList.add("d-none");
        imgaqua.classList.remove("d-none")
    }else{
        nav.classList.remove("header-scrolled");
        imgred.classList.remove("d-none");
        imgaqua.classList.add("d-none")   
    }
}

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// for blink letter
var txt_arr = document.getElementById('blink').innerHTML;
document.getElementById('blink').innerHTML="";
var index = 0;
function typeText(){
    document.getElementById('blink').innerHTML =  document.getElementById('blink').innerHTML + txt_arr[index];
    if(index < txt_arr.length-1){
        index++;
        setTimeout("typeText()",250);
    }
    else if(index=== txt_arr.length-1){
        setTimeout("typeText()",2000);
        index++;
    }
    else{
        index =0;
        document.getElementById('blink').innerHTML="";
        setTimeout("typeText()",100);
    }
}




// for Read more btn
document.addEventListener('DOMContentLoaded', function() {
  var skills = document.querySelectorAll('#skills-list li');

  for (var i = 1; i < skills.length; i++) {
      skills[i].style.display = 'none';
  }

  document.getElementById('show-more-btn').addEventListener('click', function() {
      for (var i = 1; i < skills.length; i++) {
          skills[i].style.display = (skills[i].style.display === 'none' || skills[i].style.display === '') ? 'block' : 'none';
      }

      var buttonText = (skills[1].style.display === 'none' || skills[1].style.display === '') ? 'Read More' : 'Read Less';
      this.textContent = buttonText;
  });
});

