//Open cards
$(document).ready(function () {
  var firstCard = $(".defaultCard").height();
  var secondCard = $(".toggleCard").height();
  var containerSmall = $(".smallContainer").height();
  var containerBig = firstCard + secondCard;
  $(".btnShowMore").click(function (e) {
    var buttonToShow = $(this).attr("rel");
    var nowHeight = $("#" + buttonToShow + " ~ .smallContainer").height();
    if (nowHeight == containerSmall) {
      $.clicked = false;
    } else {
      $.clicked = true;
    }
    if ($.clicked) {
      $(this).html("Show more<img src='../images/arrow.svg' alt='arrow'>");
      $("#" + buttonToShow + " > img").css("transform", "rotate(0deg)");
      $("#" + buttonToShow + " ~ .smallContainer").css(
        "height",
        containerSmall + "px"
      );
      $("#" + buttonToShow + " ~ .btnAddToCard").addClass(
        "btnAddToCardOpacity"
      );
      $(
        "#" +
        buttonToShow +
        " ~ .smallContainer > .toggleCard > .toggleCardDetails > .toggleCardOpacity"
      ).css("opacity", "0");
      $(
        "#" +
        buttonToShow +
        " ~ .smallContainer > .toggleCard > .toggleCardPrice > .toggleCardOpacity"
      ).css("opacity", "0");
      $(".toggleCardOpacity").css("transition", ".4s ease-in-out");
      $(
        "#" +
        buttonToShow +
        " ~ .smallContainer > .toggleCard > .toggleCardPrice > .hr "
      ).css("transform", "scaleX(0)");
    } else {
      $(this).html("Show less<img src='../images/arrow.svg' alt='arrow'>");
      $("#" + buttonToShow + " > img").css("transform", "rotate(180deg)");
      $("#" + buttonToShow + " ~ .smallContainer").css(
        "height",
        containerBig + "px"
      );
      $("#" + buttonToShow + " ~ .btnAddToCard").removeClass(
        "btnAddToCardOpacity"
      );
      $(
        "#" +
        buttonToShow +
        " ~ .smallContainer > .toggleCard > .toggleCardDetails > .toggleCardOpacity"
      ).css("opacity", "1");
      $(
        "#" +
        buttonToShow +
        " ~ .smallContainer > .toggleCard > .toggleCardPrice > .toggleCardOpacity "
      ).css("opacity", "1");
      $(".toggleCardOpacity").css("transition", ".4s ease-in-out .2s");
      $(
        "#" +
        buttonToShow +
        " ~ .smallContainer > .toggleCard > .toggleCardPrice > .hr"
      ).css("transform", "scaleX(1)");
    }
  });
});




//Cards pop up

let button = document.querySelectorAll(".btnAddToCard");
let pop = document.querySelectorAll(".pricingPopUpcloseIcon");

for (i = 0; i < button.length; i++) {
  button[i].addEventListener("click", openPopUp);
}
for (i = 0; i < pop.length; i++) {
  pop[i].addEventListener("click", closePopUp);

}




function openPopUp() {
  
  let elemRect = this.parentNode.getBoundingClientRect();
    positionTop = -elemRect.top + window.innerHeight / 2,
    positionLeft = -elemRect.left + window.innerWidth / 2,
    popUpDiv = this.parentNode.childNodes[1].style,
    popUpBg = document.body.childNodes[1].style,
    header = this.parentNode.childNodes[1].childNodes[1].style,
    main = this.parentNode.childNodes[1].childNodes[3].style
    
  header.opacity = "1"
  main.opacity = "1"
  header.transition = "opacity .5s ease-in-out .3s"
  main.transition = "opacity .5s ease-in-out .3s"
  popUpDiv.transform = "scale(1)"
  popUpDiv.width = "90vw"
  popUpDiv.height = "300px"
  popUpDiv.borderRadius = "15px"
  popUpDiv.opacity = "1"
  popUpDiv.top = positionTop + "px"
  popUpDiv.transform = "translate(-50%, -50%)"
  popUpDiv.left = positionLeft + "px"
  popUpDiv.zIndex = "1510000"
  popUpDiv.transition =
    "width .5s ease-in-out," +
    "height .25s ease-in-out .25s," +
    "border-radius .5s ease-in-out," +
    "opacity .5s ease-in-out," +
    "top .5s ease-in-out," +
    "left .5s ease-in-out"
  popUpBg.width = "100%"
  popUpBg.height = "100%"
  popUpBg.opacity = "1"
  popUpBg.transition = "opacity .5s ease-in-out"

  
  this.classList.add("btnStayOpen")
  
}




function closePopUp() {
  let el = this.parentNode.parentNode.style,
  el2 = document.body.childNodes[1].style
  header = this.parentNode.parentNode.childNodes[1].style
  main = this.parentNode.parentNode.childNodes[3].style
  console.log(main)
  header.opacity = "0"
  header.transition = "opacity .2s ease-in-out"
  main.opacity = "0"
  main.transition = "opacity .2s ease-in-out"
  el.width = "50px"
  el.height = "50px"
  el.borderRadius = "32px"
  el.opacity = "0"
  el.top = "100%"
  el.left = "85%"
  el.zIndex = "100"
  el.transform = "scale(0)"
  el.transition =
    "width .25s ease-in-out .25s," +
    "height .5s ease-in-out 0s," +
    "border-radius .5s ease-in-out 0s," +
    "opacity .15s ease-in-out .5s," +
    "top .5s ease-in-out 0s," +
    "z-index 0s ease-in-out .5s," +
    "transform 0s ease-in-out .8s," +
    "left .25s ease-in-out .25s"
  el2.width = "0"
  el2.height = "0"
  el2.opacity = "0"
    "opacity .5s ease-in-out," +
    "width 0s ease-in-out .6s," +
    "height 0s ease-in-out .6s"

  
    
  this.parentNode.parentNode.parentNode.childNodes[5].classList.remove("btnStayOpen")
}


