# sources
* https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications

# intro
* 1. create websocket object
```
webSocket = new WebSocket(url, protocols);
```
* url - url to which server will respond. should be smth like: ```wss://``` or ```ws://``
* protocols - Either a single protocol string or an array of protocol strings. These strings are used to indicate sub-protocols, so that a single server can implement multiple WebSocket sub-protocols (for example, you might want one server to be able to handle different types of interactions depending on the specified protocol).
* The constructor will throw a SecurityError if the destination doesn't allow access(e.g. you want to use unsecure connection)
* If an error occurs while attempting to connect, first a simple event with the name error is sent to the WebSocket object (thereby invoking its onerror handler), and then the CloseEvent is sent to the WebSocket object (thereby invoking its onclose handler) to indicate the reason for the connection's closing.

# example
```
var exampleSocket = new WebSocket("wss://www.example.com/socketserver", "protocolOne");
//or
var exampleSocket = new WebSocket("wss://www.example.com/socketserver", ["protocolOne", "protocolTwo"]);
```
* On return, exampleSocket.readyState is CONNECTING. The readyState will become OPEN once the connection is ready to transfer data.

# send data to server
```
exampleSocket.send("Here's some text that the server is urgently awaiting!"); 
```
* You can send data as a string, Blob, or ArrayBuffer.
* As establishing a connection is asynchronous and prone to failure there is no guarantee that calling the send() method immediately after creating a WebSocket object will be successful. Here is a fix for that
```
exampleSocket.onopen = function (event) {
  exampleSocket.send("Here's some text that the server is urgently awaiting!"); 
};

```

# send data as json to server
```
function sendText() { var msg = {type: "message", text: document.getElementById("text").value,id:   clientID, date: Date.now() };

  // Send the msg object as a JSON-formatted string.
  exampleSocket.send(JSON.stringify(msg));
  
  // Blank the text input element, ready to receive the next line of text from the user.
  document.getElementById("text").value = "";
} 
```

# receive data from server
* when messages are received, a message event is sent to the WebSocket object. To handle it, add an event listener for the message event, or use the onmessage event handler
```
exampleSocket.onmessage = function (event) {
  console.log(event.data);
}
```

# receiving data as json from server
* We can receive 1) login handshakes, message text, user list updates. Code to handle this
```
exampleSocket.onmessage = function(event) {
  var f = document.getElementById("chatbox").contentDocument;
  var text = "";
  var msg = JSON.parse(event.data);
  var time = new Date(msg.date);
  var timeStr = time.toLocaleTimeString();
  
  switch(msg.type) {
    case "id":
      clientID = msg.id;
      setUsername();
      break;
    case "username":
      text = "<b>User <em>" + msg.name + "</em> signed in at " + timeStr + "</b><br>";
      break;
    case "message":
      text = "(" + timeStr + ") <b>" + msg.name + "</b>: " + msg.text + "<br>";
      break;
    case "rejectusername":
      text = "<b>Your username has been set to <em>" + msg.name + "</em> because the name you chose is in use.</b><br>"
      break;
    case "userlist":
      var ul = "";
      for (i=0; i < msg.users.length; i++) {
        ul += msg.users[i] + "<br>";
      }
      document.getElementById("userlistbox").innerHTML = ul;
      break;
  }
  
  if (text.length) {
    f.write(text);
    document.getElementById("chatbox").contentWindow.scrollByPages(1);
  }
};

```
* data type is utf8

# closing connection
```
exampleSocket.close();
```

# how to run test
```
npm install
npm run build:server
node build/server/simple-websocket-server.js
firefox  localhost:8000
```