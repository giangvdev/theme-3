$( document ).ready(function() {
    var nav = $('#header-after');
    var pos = nav.offset().top;
    $(window).scroll(function() {
        var fix = ($(this).scrollTop() > pos) ? !0 : !1;
        nav.toggleClass("fix-nav", fix);
        $('body').toggleClass("fix-body", fix)
    })
});
var owl = $('.slider-02');
    owl.owlCarousel({
        items:1,
        loop:true,
        margin:0,
        navText: ["<div class='left-sli-02'><</div>","<div class='right-sli-02'>></div>"],
        dots:false,
        nav:true,
    });
    var owl = $('.slider-03');
    owl.owlCarousel({
        items:3,
        loop:true,
        margin:0,
        navText: ["<div class='left-sli'></div>","<div class='right-sli'></div>"],
        dots:false,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1024:{
                items:4
            }
        }
    });
    var owl = $('.slider-04');
    owl.owlCarousel({
        items:3,
        loop:true,
        margin:0,
        navText: ["<div class='left-sli'></div>","<div class='right-sli'></div>"],
        dots:false,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1024:{
                items:3
            }
        }

    });
    var owl = $('.slider-05');
    owl.owlCarousel({
        items:3,
        loop:true,
        margin:0,
        navText: ["<div class='left-sli-05'><</div>","<div class='right-sli-05'>></div>"],
        dots:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1024:{
                items:3
            }
        }
    });
    function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
      }
      
      // Get the element with id="defaultOpen" and click on it
      document.getElementById("defaultOpen").click();
   
      $(document).ready(function(){
        $(".overlay-content i").on({
          click: function(){
            $(this).css("color", "red");
          }  
        });
      });




