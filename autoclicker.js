// im kool
var acurrentElement = document.body;
var a_enabled = false
var aEnableKey = "["

alert('AutoClicker activated! Use "[" to toggle it!\n\nChange the keybind with "\\".\n\n~ SilasDevs 2021 ~')

document.addEventListener('mouseover', function (e) {
    acurrentElement = e.target;
});

window.addEventListener('keydown', function (e) {
    if (e.key == aEnableKey) {
        a_enabled = !a_enabled
    } else if (e.key == "\\") {
         aEnableKey = prompt("Change keybind:")[0].toLowerCase()   
    }
});

setInterval(function() {
  if (a_enabled) {
    acurrentElement.click()
  }
}, 1)
