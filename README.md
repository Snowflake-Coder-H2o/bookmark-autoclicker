# bookmark-autoclicker
A simple autoclicker

[link](javascript:var acurrentElement=document.body,a_enabled=!1,aEnableKey="[";alert('AutoClicker activated! Use "[" to toggle it!\n\nChange the keybind with "\\".\n\n~ SilasDevs 2021 ~'),document.addEventListener("mouseover",function(e){acurrentElement=e.target}),window.addEventListener("keydown",function(e){e.key==aEnableKey?a_enabled=!a_enabled:"\\"==e.key&&(aEnableKey=prompt("Change keybind:")[0].toLowerCase())}),setInterval(function(){a_enabled&&acurrentElement.click()},1);)
