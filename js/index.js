hambMenu = document.getElementById("menuToggle");
hambMenuCheckbox = document.getElementById("hambMenuCheckbox");

let hideOnScroll = function() {
  let y = window.scrollY;
  if (y >= 38) {
    hambMenu.className = "show"
  } else {
    hambMenu.className = "hide"
    hambMenuCheckbox.checked = false;
  }
};

window.addEventListener("scroll", hideOnScroll);
