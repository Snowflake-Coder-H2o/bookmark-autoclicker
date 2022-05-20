# bookmark-autoclicker
An AutoClicker bookmarklet. Does what it says on the tin.
## How to use:
Simply paste this into the url portion of a bookmark:
`javascript:fetch("https://raw.githubusercontent.com/Snowflake-Coder-H2o/bookmark-autoclicker/main/autoclicker.js").then((response) => response.text()).then((responseText) => {eval(responseText)}).catch(function () {alert("Couldn't load, try another website.")});`
