function myFunction1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.style.display = "inline";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.style.display = "none";
    moreText.style.display = "inline";
  }
}

function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.style.display = "inline";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.style.display = "none";
    moreText.style.display = "inline";
  }
}
