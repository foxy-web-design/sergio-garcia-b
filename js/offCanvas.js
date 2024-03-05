/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.body.classList.add("offcanvas-open"); /* add a class to body */
  document.getElementById("mySidepanel").style.width = "100%";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.body.classList.remove("offcanvas-open"); /* remove a class to body */
  document.getElementById("mySidepanel").style.width = "0";
}