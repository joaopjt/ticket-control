const Instascan = require('instascan');
const scanner = new Instascan.Scanner({ continuous: true, video: document.selectElementById('preview') });

Instascan.Camera.getCameras().then(function (cameras) {
  if (cameras.length > 0) {
    console.log(cameras);
    scanner.start(cameras[0]);
  } else {
    console.error('No cameras found.');
  }
}).catch(function (e) {
  console.error(e);
});