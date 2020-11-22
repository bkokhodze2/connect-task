$(document).ready(function () {
  $(function ($) {
    var contents = $(".accordeon-content");
    var titles = $(".accordeon-title");
    titles.on("click", function () {
      var title = $(this);
      title.addClass("hover_accordion_active");
      contents.addClass("hover_accordion_content_active");
      contents.filter(":visible").slideUp(function () {
        $(this).prev(".accordeon-title").removeClass("is-opened");
        // $(this).prev("accordeon-title").addClass("hover_accordion_active");
        $(this).prev(".accordeon-title").removeClass("hover_accordion_active");
        
      });
  
      var content = title.next(".accordeon-content");
  
      if (!content.is(":visible")) {
        content.slideDown(function () {
          title.addClass("is-opened");
          
          // title.removeClass("hover_accordion_active");
        });
      }
    });
  });
  
});

//tabs
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
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//showmore showless
function show() {
  var dots = document.querySelector("#dots");
  var moreText = document.querySelector("#more");
  var btnText = document.querySelector("#showbtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function show2() {
  var dots = document.querySelector(".text_id > p > #dots");
  var moreText = document.querySelector(".text_id > p > #more");
  var btnText = document.querySelector(".text_id > #showbtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
