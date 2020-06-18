function f1() {
  var head = document.getElementsByTagName("HEAD")[0];

  // Create new link Element
  var link = document.createElement("link");

  // set the attributes for link element
  link.rel = "stylesheet";

  link.type = "text/css";

  link.href = "https://onecapscript.netlify.app/style.css";

  // Append link element to HTML head
  head.appendChild(link);

  var button = document.createElement("button");
  button.innerHTML = "Do Something";

  // 2. Append somewhere
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(button);

    var d = new Date();
  d.setTime(d.getTime() + (2*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = "C1" + "=" + "I am a CapitalOne Cookie" + ";" + expires + ";path=/";
  
  // 3. Add event handler
  button.addEventListener("click", function() {
    alert("Cookie : " + getCookie("C1"));
  });
  
 
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function openModal(mod_name) {
  var modal = document.getElementById(mod_name);

  // Add open class to make visible and trigger animation
  modal.classList.add('open');
}

function closeModal(mod_name) {
  var modal = document.getElementById(mod_name);
  // Remove open class to hide and trigger animation
  modal.classList.remove('open');
}
