$hambMenu = document.getElementById("menu")
$hambMenuToggle = document.getElementById("menuToggle")
$hambMenuCheckbox = document.getElementById("hambMenuCheckbox")

$btnGetToTop = document.getElementById("getToTop")

let hambMenuScroll = function() 
{
  let y = window.scrollY
  
  if (y > 37) 
  {
    $hambMenuToggle.classList.remove("hide")
    $hambMenuToggle.classList.add("show")

    $hambMenu.classList.remove("hide")
    $hambMenu.classList.add("show")
  } 
  else 
  {
    $hambMenuToggle.classList.remove("show")
    $hambMenuToggle.classList.add("hide")

    $hambMenu.classList.remove("show")
    $hambMenu.classList.add("hide")

    $hambMenuCheckbox.checked = false
  }
}

let btnGetToTopScroll = function() 
{
  let y = window.scrollY

  if (y > 900) 
  {
    $btnGetToTop.classList.remove("hide")
    $btnGetToTop.classList.add("show")
  } else {
    $btnGetToTop.classList.remove("show")
    $btnGetToTop.classList.add("hide")
  }
}

window.addEventListener("scroll", hambMenuScroll)
window.addEventListener("scroll", btnGetToTopScroll)