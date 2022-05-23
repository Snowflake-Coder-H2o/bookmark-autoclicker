// im kool
var acurrentElement = document.body;
var a_enabled = false
var aEnableKey = "q"

var css = `
.autoclicker-alert {
  display: flex;
  position: fixed;
  top: 10px;
  left: 10px;
  background-color: #404040;
  align-items: center;
  padding: 7px 8px 7px 5px;
  border-left: solid red;
  border-radius: 3px;
  opacity: 1;
  z-index: 99999999999;
  transition: opacity 200ms;
}
.autoclicker-alert span {
  text-align: center;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`

function sendAlert(text, border) {
  var style = document.createElement('style');
  document.head.appendChild(style)
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));

  var alert = document.createElement('div')
  alert.style = "border-left: solid " + border
  var span = document.createElement('span')
  alert.classList.add('autoclicker-alert')
  span.innerText = text
  alert.appendChild(span)

  document.body.appendChild(alert)
  
  setTimeout(function() {alert.style.opacity = 0}, 3000)
  setTimeout(function() {alert.remove()}, 3200)
}

sendAlert("🖱️ Autoclicker loaded!\n Use the q key to enable!", "Pink")

document.addEventListener('mouseover', function (e) {
    acurrentElement = e.target;
});

var interval = setInterval(function(){}) // make global interval, only temporarily used

window.addEventListener('keydown', function (e) {
    if (e.key == aEnableKey) {
        a_enabled = !a_enabled
        if (a_enabled) {
            sendAlert("✅ Started clicking!", "Pink")
            interval = setInterval(function() {
                acurrentElement.click()
            }, 0)
        } else {
            sendAlert("👑 Stopped clicking!", "Green")
            clearInterval(interval)
        }
    } else if (e.key == "\\") {
         aEnableKey = prompt("Change keybind:")[0].toLowerCase()   
    }
});


