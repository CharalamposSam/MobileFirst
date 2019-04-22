const slider = document.querySelector(".slider");
    let isDown = false;
    let startX;
    let scrollLeft;
    // for desktop
    slider.addEventListener("mousedown", e => {
    e.preventDefault();
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    });
    // for mobile
    slider.addEventListener("touchstart", e => {
    e.preventDefault();
    isDown = true;
    slider.classList.add("active");
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    });
    // for desktop
    slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
    });
    // for mobile
    slider.addEventListener("touchend", () => {
    isDown = false;
    slider.classList.remove("active");
    });
    // for desktop
    slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
    });
    // for desktop
    slider.addEventListener("mousemove", e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 5;
    slider.scrollLeft = scrollLeft - walk;
    });
    // for mobile
    slider.addEventListener("touchmove", e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
    });
