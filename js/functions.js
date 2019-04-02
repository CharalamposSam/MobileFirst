//Menu transitions
function openMenu() {
  let sidemenu = document.getElementById("sidemenu");
  sidemenu.style.transform = "scale(1,1)";
  sidemenu.style.transition = "transform .5s ease-in-out";
  document.getElementById("sidemenuclose").style.display = "block";
  let x = document.getElementsByClassName("menuLinks");
  let i;
  let sum;
  for (i = 0; i < x.length; i++) {
    x[i].style.opacity = "1";
    x[i].style.top = "0px";
    sum = 1 + i;
    x[i].style.transition =
      "top .8s cubic-bezier(0.92, 0.01, 0.11, 0.99) ." + sum + "s";
  }
}
function closeMenu() {
  let sidemenu = document.getElementById("sidemenu");
  sidemenu.style.transform = "scale(0,1)";
  sidemenu.style.transition = "transform .5s ease-in-out .1s";
  document.getElementById("sidemenuclose").style.display = "none";
  let x = document.getElementsByClassName("menuLinks");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.top = "65px";
    x[i].style.opacity = "0";
    x[i].style.transition =
      "top .3s cubic-bezier(0.92, 0.01, 0.11, 0.99) 0s, opacity .2s ease .1s";
  }
}
//Nav background transition
$(window).scroll(function() {
  var wScroll = $(this).scrollTop();
  if (wScroll > 100) {
    $(".navBg").css("left", "0%");
  }
  if (wScroll == 00) {
    $(".navBg").css("left", "-100%");
  }
});

