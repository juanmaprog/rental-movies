function onLine() {
  return navigator.onLine;
}

function isOnline(cb) {
  var img = new Image();
  img.onerror = function () {
    cb(false);
  };
  img.onload = function () {
    cb(true);
  };
  img.src = "http://example.com/some_image.jpg?t=" + +new Date();
}

function doesConnectionExist() {
  var xhr = new XMLHttpRequest();
  var file = "https://www.kirupa.com/blank.png";
  var randomNum = Math.round(Math.random() * 10000);

  xhr.open("HEAD", file + "?rand=" + randomNum, true);
  xhr.send();

  xhr.addEventListener("readystatechange", processRequest, false);

  function processRequest(e) {
    if (xhr.readyState == 4) {
      if (xhr.status >= 200 && xhr.status < 304) {
        alert("connection exists!");
      } else {
        alert("connection doesn't exist!");
      }
    }
  }
}
