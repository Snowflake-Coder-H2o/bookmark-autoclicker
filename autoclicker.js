// im kool
var acurrentElement = document.body;
var a_enabled = false
var aenableKey = "["

alert('AutoClicker activated! Use "[" to toggle it!\n\nChange the keybind with "\\".\n\n~ SilasDevs 2021 ~')

document.addEventListener('mouseover', function (e) {
    acurrentElement = e.target;
});

window.addEventListener('keydown', function (e) {
    if (e.key == aenableKey) {
        a_enabled = !a_enabled

        if (i_enabled) {
            alert("Activated auto-clicker!")
        } else {
            alert("Disabled auto-clicker!")
        }
    } else if (e.key == "\\") {
         aenableKey = prompt("Change keybind:")[0].toLowerCase()   
    }
});

setInterval(function() {
  if (a_enabled) {
    acurrentElement.click()
  }
}, 1)
