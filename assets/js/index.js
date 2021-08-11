function myFunction1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn1");
  var btn = document.getElementById("cancelBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.style.display = "inline";
    moreText.style.display = "none";
    btn.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.style.display = "inline";
    btnText.style.display = "none";
    moreText.style.display = "inline";
  }
}

function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");
  var btn = document.getElementById("cancelBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.style.display = "inline";
    moreText.style.display = "none";
    btn.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.style.display = "inline";
    btnText.style.display = "none";
    moreText.style.display = "inline";
  }
}
