!(()=>{

    const PAGE_NAME= ["home","links","setup","wwise","udk","howtos","reference"];
    var iframe;
    var menu_elements;
    var menuActive;
    var wrapper_overlay;

    window.onload= function() {
        iframe= document.getElementsByTagName("IFRAME")[0];
        menu_elements= document.getElementsByClassName("navbar-element");
        overlay= document.getElementsByClassName("content-wrapper-overlay")[0];

        for (var i = 0; i < menu_elements.length; i++) {
            menu_elements[i].addEventListener("click", function() {
                    menuSelect(parseInt(this.getAttribute("menuid")));
                }
            );
        }

        menuActive= 0;
        menuSelect(0);
    }

    function menuSelect(i) {
        menu_elements[menuActive].classList.remove("active");
        menu_elements[i].classList.add("active");
        menuActive= i;

        // set overlay opaque again
        overlay.classList.add("opacity-one");
        overlay.classList.remove("opacity-zero");

        // set overlay transparent again after css-transition and load the page
        setTimeout(() => { 
            iframe.src= "data\\pages\\" + PAGE_NAME[i] + ".html";
            overlay.classList.remove("opacity-one");
            overlay.classList.add("opacity-zero"); 
        }, 125);
    }

})();