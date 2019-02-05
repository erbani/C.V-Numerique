// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 55 || document.documentElement.scrollTop > 55) {
    document.getElementById("buttonTop").style.display = "block";
  } else {
    document.getElementById("buttonTop").style.display = "none";
  }
}
