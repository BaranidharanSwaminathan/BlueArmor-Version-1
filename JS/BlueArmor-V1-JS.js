var myVar;
        function myFunction() {
        myVar = setTimeout(showPage, 3000);
        }
        function showPage() {
            document.getElementsByClassName("loader")[0].style.display = "none";
            document.getElementsByClassName("loader-bg")[0].style.display = "none";
            document.getElementsByClassName("outer-container")[0].style.display = "block";
            document.getElementsByTagName("header")[0].style.display = "block";
            document.getElementsByTagName("footer")[0].style.display = "block";
        }
$(document).ready(function () {
    $(".menu-icon-topbar").click(function () {
        if($(".hamburger-menu-list ").hasClass("active")) {
            $(".hamburger-menu-list").removeClass("active")
        }
        else {
            $(".hamburger-menu-list").addClass("active")
        }
        $(".outer-bg").addClass("active")
    })
    $(".explore-menu").click(function () {
        if($(".explore-submenu").hasClass("active")) {
            $(".explore-submenu").removeClass("active")
        }
        else {
            $(".explore-submenu").addClass("active")
        }
        if($(".exp-dropdown-icon").hasClass("dropdown-accordian")) {
            $(".exp-dropdown-icon").removeClass("dropdown-accordian")
        }
        else {
            $(".exp-dropdown-icon").addClass("dropdown-accordian")
        }
    })
    $(".outer-bg").click(function(){
        $(".outer-bg").removeClass("active")
        $(".hamburger-menu-list ").removeClass("active")
    })
    $(".statistics-menu").click(function(){
        $(".statistics-container-outer").addClass("left-page")
    })
    $(".statistics-close-icon").click(function(){
        $(".statistics-container-outer").removeClass("left-page")
    })
    $(".identities-menu").click(function(){
        $(".identies-rules-container-outer").addClass("left-page")
    })
    $(".identies-rules-close-icon").click(function(){
        $(".identies-rules-container-outer").removeClass("left-page")
    })
    $(".trustlevel-menu").click(function(){
        $(".trust-level-container-outer").addClass("left-page")
    })
    $(".trust-level-close-icon").click(function(){
        $(".trust-level-container-outer").removeClass("left-page")
    })
    $(".statistics-menu").click(function(){
        $(".main-container").addClass("mobile-view")
    })
    $(".identities-menu").click(function(){
        $(".main-container").addClass("mobile-view-identies")
    })
    $(".trustlevel-menu").click(function(){
        $(".main-container").addClass("mobile-view-t-l")
    })
    $(".statistics-close-icon").click(function(){
        $(".main-container").removeClass("mobile-view")
    })
    $(".identies-rules-close-icon").click(function(){
        $(".main-container").removeClass("mobile-view-identies")
    })
    $(".trust-level-close-icon").click(function(){
        $(".main-container").removeClass("mobile-view-t-l")
    })

})