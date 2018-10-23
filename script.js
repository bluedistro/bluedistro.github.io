// Change tabs
function switchTab(evt, Name) {
  var i, x;

  // Get all class "tab" tags
  x = document.getElementsByClassName("tab");

  // Change all display styles to "none" to hide them.
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }

  // Display current tab content.
  document.getElementById(Name).style.display = "block";
}

// Change pages
function switchCourse(page, evt, Course) {
  var i, x;

  // Get all class "course" tags
  x = document.getElementsByClassName(page);

  // Change all display styles to "none" to hide them.
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }

  // Display current tab content.
  document.getElementById(Course).style.display = "block";
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
