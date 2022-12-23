$(document).ready(function (){
    $(".hamburger-menu").click(function(){
        $(".menu-bar").toggle();  
    });
    $(".explore").click(function(){
          if($(".subMenu").hasClass("active")){
              $(".subMenu").addClass("active")
              $(".subMenu").removeClass("active")
              $(".menu-inner").removeClass("activeMenu")
              $(".menu-name").removeClass("activeName")
          }
          else{
              $(".subMenu").addClass("active")
              $(this).children(".menu-inner").addClass("activeMenu")
              $(this).children(".menu-inner").children(".menu-name").addClass("activeName")
          }
    })
    $(".more-token").click(function(){
        if( $(".token-active").hasClass("activeflex")){
            $(".token-active").removeClass("activeflex")
            $(".more-token").text("View more");
        }
        else{
            $(".token-active").addClass("activeflex")
            $(".more-token").text("View less")
        }   
    })
    $(".notification,.close-icon-notification").click(function(){
        if( $(".notification-box").hasClass("active")){
            $(".notification-box").removeClass("active")
        }
        else{
            $(".notification-box").addClass("active")
        }
    })
    $(".menu-icon,.menu-btn").click(function(){
        if($(".option").hasClass("active")){
            $(".option").removeClass("active")
        }
        else{
            $(this).next(".option").addClass("active")
        }
        $(".outer-bg").addClass("active")
    })
  
    // $(".switch-on").click(function(){
    //     if($(this).hasClass("switch-on")){
    //         $(this).addClass("switch-off")
    //         $(this).removeClass("switch-on")
    //     }
    //     else{
    //         $(this).addClass("switch-on")
    //         $(this).removeClass("switch-off")
    //     }
    // })
    $(".switch-on,.switch-off").click(function(){
        $(".services-popup").addClass("service-click-popup")
        $(".bg-color").addClass("active")
        $(this).addClass("switch")
    })
  
    $(".yes-btn").click(function(){
        if($(".switch").hasClass("switch-on")){
            $(".switch").addClass("switch-off")
            $(".switch").removeClass("switch-on")
         }
         else{
            $(".switch").addClass("switch-on")
            $(".switch").removeClass("switch-off")
         }
         $(".bg-color").removeClass("active")
         $(".services-popup").removeClass("service-click-popup")
    })
  
    $(".no-btn").click(function(){
        $(".services-popup").removeClass("service-click-popup")
        $(".bg-color").removeClass("active")
        $(".logout-popup").removeClass("logout-click-popup")
    })
    // $(".switch-off").click(function(){
    //     if($(this).hasClass("switch-off")){
    //         $(this).addClass("switch-on")
    //         $(this).removeClass("switch-off")
    //     }
    //     else{
    //         $(this).addClass("switch-off")
    //         $(this).removeClass("switch-on")
    //     }
    // })
    $(".bulleted-points").click(function(){
        if($(this).hasClass("bulleted-points")){
            $(this).addClass("certificate-point")
            $(this).removeClass("bulleted-points")
        }
        else{
            $(this).addClass("bulleted-points")
            $(this).removeClass("certificate-point")
        }
    })
    $(".certificate-point").click(function(){
        if($(this).hasClass("certificate-point")){
            $(this).addClass("bulleted-points")
            $(this).removeClass("certificate-point")
        }
        else{
            $(this).addClass("certificate-point")
            $(this).removeClass("bulleted-points")
        }
    })
    $(".more-identies").click(function(){
        if( $(".identies-active").hasClass("activeflex")){
            $(".identies-active").removeClass("activeflex")
            $(".more-identies").text("View more");
        }
        else{
            $(".identies-active").addClass("activeflex")
            $(".more-identies").text("View less")
        }   
    })
    $(".remove").click(function(){
        $(this).parent().hide();
    })
  
    $(".logout").click(function(){
        $(".logout-popup").addClass("logout-click-popup")
        $(".bg-color").addClass("active")
    })
    // $(".admin-profile").click(function(){
    //      if($(".login,.bg-color").hasClass("active")){
    //          $(".bg-color").removeClass("active")
    //      }
    //      else{
    //          $(".login,.bg-color").addClass("active")
    //      }
    //  })
    $(".admin-profile").click(function(){
        if($(".admin-profile").hasClass("admin-profile-login")){
            $(".login,.bg-color").addClass("active")
        }
        else{
            if($(".user-details-active").hasClass("active")){
                $(".user-details-active").removeClass("active")
            }
            else{
                $(".user-details-active").addClass("active")
            }
        }
        // $(".bg-color").addClass("active")
        // $(".bg-color").css("background","transparent")  
    })
    $(".bg-color").click(function(){
        $(this).removeClass("active");
        $(".login").removeClass("active");
        $(".services-popup").removeClass("service-click-popup")
        $(".round-menu").hide();
        $(".forgot-passord-popup").removeClass("fp-click-popup")
        $(".edit-popup").removeClass("active")
        $(".option").removeClass("active")
        // $(".subMenu").hide();
        // $(".user-details-active").removeClass("active")
    })
    $(".outer-bg").click(function(){
      $(".option").removeClass("active")
      $(".outer-bg").removeClass("active")
    })
    $(".input").click(function(){
        if($(".search-box").hasClass("input-extend")){
            $(".search-box").removeClass("input-extend")
        }
        else{
            $(".search-box").addClass("input-extend")
        }
    })
    $(".close-icon").click(function(){
        if($(".user-details").hasClass("active")){
            $(".user-details").removeClass("active")
        }
        else{
            $(".user-details").addClass("active")
        }
    })
    $(".close-icon-login").click(function(){
        $(this).parent().parent().removeClass("active")
        $(this).parent().parent().removeClass("fp-click-popup")
        $(this).parent().removeClass("logout-click-popup")
        $(".bg-color").removeClass("active")
    })
    $(".admin-info").addClass("active")
  
   
    $(".yes-btn-logout").click(function(){
        $(".admin-profile").addClass("admin-profile-login")
        $(".admin-info").removeClass("active")
        $(".user-details-active").removeClass("active") 
        $(".logout-popup").removeClass("logout-click-popup")
        $(".bg-color").removeClass("active")
        $(".about-admin").css("border","none")
    })
    $(".login-btn").click(function(){
        if(($(".username-input").text() == null) && ($(".password-input").text() == null)){
          alert("Please fill the fields");
        }
        else{
          $(".login").removeClass("active")
          $(".bg-color").removeClass("active")
          $(".admin-info").addClass("active")
          $(".admin-profile").removeClass("admin-profile-login")
          $(".about-admin").css("border","2px solid #8f8f8f")
        }
    })
    $(".forgot-password").click(function(){
        $(".login").removeClass("active")
        $(".forgot-passord-popup").addClass("fp-click-popup")
        $(".bg-color").addClass("active")
    })
    $(".apply-btn").click(function(){
        $(".forgot-passord-popup").removeClass("fp-click-popup")
        $(".login").addClass("active")
    })
    $(".edit-1").click(function(){
          $(".edit-popup").addClass("active")
          $(".bg-color").addClass("active")
          $(".outer-bg").removeClass("active")
          $(".option").removeClass("active")
          $(this).parent().parent().parent("tr").addClass("active-tr")
          $("#name").val($(this).parent().parent().siblings(".nameField").text());
          $("#group").val($(this).parent().parent().siblings(".groupField").text());
          $("#trust-level").val($(this).parent().parent().siblings(".trustFieldOuter").find(".trustField").text());
          $("#IPAddress").val($(this).parent().parent().siblings(".ipAddressField").text());
          $("#comment").val($(this).parent().parent().siblings(".commentBox").text());
          $("#tcp").val($(this).parent().parent().siblings(".tcpField").text());
          $("#remote").val($(this).parent().parent().siblings(".remoteField").text());
          if($(this).parent().siblings(".status").hasClass("disabled")){
              $(".default-btn").addClass("disabled")
              $(".default-btn").removeClass("status")
              $(".default-btn").text("Disabled")
  
          }
          else{
              $(".default-btn").removeClass("disabled")
              $(".default-btn").addClass("status")
              $(".default-btn").text("Enabled")
          }
    })
    $(".submit-btn").click(function(){
      $(".active-tr").find(".nameField").text($("#name").val());
      $(".active-tr").find(".groupField").text($("#group").val());
      $(".active-tr").find(".trustField").text($("#trust-level").val());
      $(".active-tr").find(".ipAddressField").text($("#IPAddress").val());
      $(".active-tr").find(".commentBox").text($("#comment").val());
      $(".active-tr").find(".tcpField").text($("#tcp").val());
      $(".active-tr").find(".remoteField").text($("#remote").val());
      $(".edit-popup").removeClass("active");
      $(".bg-color").removeClass("active");
      // if(parseInt($(".trustField").text().val()) <= 5){
      //     $(".active-tr").find(".trustField").addClass("bg-red");
      //     $(".active-tr").find(".trustField").removeClass("bg-green");
      // }
      // else{
      //     $(".active-tr").find(".trustField").addClass("bg-green");
      //     $(".active-tr").find(".trustField").removeClass("bg-red");
      // }
      if( $(".active-tr").find(".remoteField").text() == "False"){
          $(".active-tr").find(".remoteField").addClass("false")
          $(".active-tr").find(".remoteField").removeClass("remote-key")
      }
      else if( $(".active-tr").find(".remoteField").text() == "True"){
          $(".active-tr").find(".remoteField").addClass("remote-key")
          $(".active-tr").find(".remoteField").removeClass("false")
      }
      else{
          alert("Enter True or False");
      }
      $("tr").removeClass("active-tr");
    });
  
    $(".Delete-1").click(function(){
      $(this).parent().parent().parent("tr").remove();
      $(".outer-bg").removeClass("active")
    })
  
  });