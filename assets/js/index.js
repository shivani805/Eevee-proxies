
function myFunction(dots,more,myBtn,cancelBtn) {
  var dots = document.getElementById(dots);
  var moreText = document.getElementById(more);
  var btnText = document.getElementById(myBtn);
  var btn = document.getElementById(cancelBtn);

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
