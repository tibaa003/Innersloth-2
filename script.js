var emergencyBool = true; //sett av her hvis det skal være med eller ikke

function showDropdown(drop) {
  document.getElementById(drop).classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropButton")) {
    var dropdowns = document.getElementsByClassName("dropdownContent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function emergency() {
  if (emergencyBool == true) {
    document.getElementById("header").insertAdjacentHTML("beforeend" ,'<div class="container emergency"><h1>emergency meeting</h1><a href="./">read more</a></div>');
  }
}
