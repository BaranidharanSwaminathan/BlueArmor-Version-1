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
$(document).ready(function (){
    $(".im-toolbar-left-inner").click(function(){
        if($(".filter").hasClass("active")){
            $(".filter").removeClass("active")
            $(".outer-bg").removeClass("active")
        }
        else{
            $(".filter").addClass("active")
            $(".outer-bg").addClass("active")
        }
    })
    $(".filter-close,.filter-cancel").click(function(){
        if($(".filter").hasClass("animate")){
            $(".filter").removeClass("animate")
        }
        else{
            $(".filter").addClass("animate")
        }
        $(".filter").removeClass("active")
        $(".outer-bg").removeClass("active")
    })
    $(".outer-bg").click(function(){
        $(".outer-bg").removeClass("active")
        $(".filter").removeClass("active")
    })
    $(".add-btn").click(function(){
        if($(".add-identity ").hasClass("active")){
            $(".add-identity ").removeClass("active")
        }
        else{
            $(".add-identity ").addClass("active")
        }
        $(".popup-bg").addClass("active")
    })
    $(".popup-bg,.add-cancel,.add-identity-close").click(function(){
        $(".popup-bg").removeClass("active")
        $(".add-identity ").removeClass("active")
    })
    $(".statistics-menu").click(function(){
        $(".statistics-container-outer").addClass("left-page")
    })
    $(".statistics-menu,.identities-menu,.trustlevel-menu,.dashboard-float-menu").click(function(){
        $(".main-container").addClass("ipad-height")
    })
    $(".statistics-close-icon,.identies-rules-close-icon,.trust-level-close-icon,.dashboard-float-close-icon").click(function(){
        $(".main-container").removeClass("ipad-height")
    })
    $(".statistics-close-icon").click(function(){
        $(".statistics-container-outer").removeClass("left-page")
        $(".main-container").removeClass("ipad-height")
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
    $(".dashboard-float-menu").click(function(){
        $(".float-db-container").addClass("left-page")
    })
    $(".dashboard-float-close-icon").click(function(){
        $(".float-db-container").removeClass("left-page")
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
    $(".dashboard-float-menu").click(function(){
        $(".main-container").addClass("mobile-view-float-db")
    })
    $(".dashboard-float-close-icon").click(function(){
        $(".main-container").removeClass("mobile-view-float-db")
    })
})