    const logInIcon = document.querySelector(".logIn"),
     overlay = document.querySelector(".overlay").style,
     logInPopUp = document.querySelector(".logInPopUp"),
     logInPopUpHeader = document.querySelector(".popUpHeader").style,
     logInPopUpMain = document.querySelector(".popUpMain").style,
     logInPopUpFooter = document.querySelector(".popUpFooter").style
    let bigPopUpForEver

    //open
    logInIcon.addEventListener("click", () => {

        let positionTop = (window.innerHeight / 2) + window.scrollY
        if(bigPopUpForEver == true){
          logInPopUp.style.height = "400px"
        } else {
          logInPopUp.style.height = "300px"
        }
        logInPopUp.style.width = "90vw"
        logInPopUp.style.borderRadius = "15px"
        logInPopUp.style.backgroundColor = "white"
        logInPopUp.style.top = positionTop + "px"
        logInPopUp.style.left = "50%"
        logInPopUp.style.transform = "translate(-50%, -50%)"
        logInPopUp.style.zIndex = "10000"

        overlay.width = "100%"
        overlay.height = "200%"
        overlay.opacity = "1"
        overlay.transition = "opacity .5s ease-in-out"

        logInPopUpHeader.opacity = "1"
        logInPopUpHeader.transition = ".3s ease-in-out .35s"
        logInPopUpMain.opacity = "1"
        logInPopUpMain.transition = ".5s ease-in-out .35s"
        logInPopUpFooter.opacity = "1"
        logInPopUpFooter.transition = ".7s ease-in-out .35s"

    })

    //close
    const closeButtonLogInPopUp = document.querySelector(".fa-times")
    let x
  
    closeButtonLogInPopUp.addEventListener("click", () => {
      positionTop = 50 + window.scrollY
        
          
        if(x == "0" && logInPopUp.style.height == "400px"){
          bigPopUpForEver = true
        }else{
          bigPopUpForEver = false
        }
        logInPopUp.style.width = "0";
        logInPopUp.style.height = "0";
        logInPopUp.style.backgroundColor = "transparent";
        logInPopUp.style.top = positionTop + "px"
        logInPopUp.style.left = "calc(100% - 80px)"
        logInPopUp.style.transform = "translate(0, 0)"
        logInPopUp.style.zIndex = "0"
    
        overlay.width = "0";
        overlay.height = "0";
        overlay.opacity = "0";
        overlay.transition = "opacity .5s ease-in-out";
        
        
        logInPopUpHeader.opacity = "0"
        logInPopUpHeader.transition = ".2s ease-in-out"
        logInPopUpMain.opacity = "0"
        logInPopUpMain.transition = ".2s ease-in-out"
        logInPopUpFooter.opacity = "0"
        logInPopUpFooter.transition = ".1s ease-in-out"
        
    })
    
    

//Form
let btn = document.querySelector(".btn")
btn.addEventListener("click", goForward)

function goForward() {
  let visibleInput = this.parentNode.parentNode.childNodes[3].childNodes[3].childNodes[1],
    backBtn = this.parentNode.parentNode.childNodes[3].childNodes[1],
    popUpMain = this.parentNode.parentNode.childNodes[3].style,
    popUp = this.parentNode.parentNode.style,
    popUp2 = this.parentNode.parentNode,
    currentMargin = window.getComputedStyle(visibleInput, null).getPropertyValue("margin-top"),
    currentHeight = window.getComputedStyle(popUp2, null).getPropertyValue("height")
  
  
    if (currentMargin == "0px" && currentHeight == "300px") {
      x = "-60px"
      backBtn.innerHTML = ""
      backBtn.insertAdjacentHTML("afterbegin", "<i class='fas fa-angle-up' style='font-size:20px'></>")
      backBtn.childNodes[0].addEventListener("click", goBack)
    }
    if (currentMargin == "-60px") {
      x = "-120px"
      backBtn.innerHTML = ""
      backBtn.insertAdjacentHTML("afterbegin", "Almost there")
      this.innerHTML = "Review All"
      this.style.fontSize="21px"
    }
    if (currentMargin == "-120px") {
      backBtn.innerHTML = "One more click"
      popUp.height = "400px"
      popUp.top -= "50px"
      popUp.transition = ".4s ease-in-out"
      popUpMain.height = "250px"
      popUpMain.transition = ".4s ease-in-out"
      this.style.display = "none"
      this.nextSibling.nextSibling.style.display = "flex"
      x = 0
    }
    visibleInput.style.marginTop = x
}

function goBack() {
  visibleInput = this.parentNode.parentNode.childNodes[3].childNodes[1]
  let currentMargin = window.getComputedStyle(visibleInput, null).getPropertyValue("margin-top")
  if (currentMargin == "-60px") {
    x = "0px"
  }
  visibleInput.style.marginTop = x
  }

  const btnSubmitAnim = document.querySelector(".btnSubmitAnim")
  const span = document.querySelector("span").style
  const c = document.querySelector(".stroke-solid")
  
  btnSubmitAnim.addEventListener("click", submitButton)
  function submitButton(){
      span.opacity = "0"
      this.style.width = "50px"
      this.style.height = "50px"
      this.style.borderRadius = "50%"
      c.classList.add("dash")
      
      setTimeout(myFunction, 1300)
      function myFunction() {
           btnSubmitAnim.innerHTML = "<i class='fas fa-check'></i>"
           btnSubmitAnim.style.animation = "scale .4s"
           btnSubmitAnim.style.borderColor = "white"
           btnSubmitAnim.style.transition = "border-color 0s"
           btnSubmitAnim.style.fontSize = "30px"
           document.querySelector(".popUpMain form").reset()
      }
  }