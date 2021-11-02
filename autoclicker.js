// im kool
var currentElement = document.body;
var i_enabled = false
var enableKey = "["

alert('AutoClicker activated! Use "[" to toggle it!\n\nChange the keybind with "\\".\n\n~ SilasDevs 2021 ~')

document.addEventListener('mouseover', function (e) {
    currentElement = e.target;
});

window.addEventListener('keydown', function (e) {
    if (e.key == enableKey) {
        i_enabled = !i_enabled

        if (i_enabled) {
            alert("Activated auto-clicker!")
        } else {
            alert("Disabled auto-clicker!")
        }
    } else if (e.key == "\\") {
         enableKey = prompt("Change keybind:")[0].toLowerCase()   
    }
});

setInterval(function() {
  if (i_enabled) {
    currentElement.click()
  }
}, 1)
