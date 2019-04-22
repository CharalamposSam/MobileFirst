const slider = document.querySelector( ".slider" )
    let isDown = false
    let startX
    let scrollLeft

    slider.addEventListener( "mousedown", msDown )
    slider.addEventListener( "touchstart", msDown )
    slider.addEventListener( "mouseleave", msLeave )
    slider.addEventListener( "touchend", msLeave )
    slider.addEventListener( "mouseup", msUp )
    slider.addEventListener( "touchend", msUp )
    slider.addEventListener( "mousemove", msMove )
    slider.addEventListener( "touchmove", msMove )

    function msDown( e ) {
        e.preventDefault()
        isDown = true
        slider.classList.add( "active" )
        startX = e.pageX - slider.offsetLeft
        scrollLeft = slider.scrollLeft
    }
    function msLeave( ) {
        isDown = false
        slider.classList.remove( "active" )
    }
    function msUp( ) {
        isDown = false
        slider.classList.remove( "active" )
    }
    function msMove( e ) {
        if ( !isDown ) return
        e.preventDefault()
        const x = e.pageX - slider.offsetLeft
        const walk = (x - startX) * 5
        slider.scrollLeft = scrollLeft - walk
    }
