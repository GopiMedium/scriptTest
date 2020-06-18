function f1() {
  var head = document.getElementsByTagName("HEAD")[0];

  // Create new link Element
  var link = document.createElement("link");

  // set the attributes for link element
  link.rel = "stylesheet";

  link.type = "text/css";

  link.href = "style.css";

  // Append link element to HTML head
  head.appendChild(link);

  var button = document.createElement("button");
  button.innerHTML = "Do Something";

  // 2. Append somewhere
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(button);

  // 3. Add event handler
  button.addEventListener("click", function() {
    alert("did something");
  });
}
