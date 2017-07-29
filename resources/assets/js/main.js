import Vue from 'vue';
import Instascan from 'instascan';

let app = new Vue({
  el: '#app',
  data: {
    scanner: null,
    activeCameraId: null,
    cameras: [],
    scans: []
  },
  mounted: function () {
    let self = this;
    let holder = document.querySelector('[data-preview]');

    self.scanner = new Instascan.Scanner({ 
      video: document.getElementById('preview'),
      scanPeriod: 4
    });

    self.scanner.addListener('scan', (content, image) => {
      self.scans.unshift({ date: +(Date.now()), content: content });
      alert('QR Code found and scanned.');
      console.log(content);
    });

    Instascan.Camera.getCameras().then(cameras => {
      if (cameras.length > 0) {
        self.cameras = cameras;
        self.activeCameraId = cameras[0].id;
        self.scanner.start(cameras[0]);
        holder.classList.add('active');
      } else {
        console.error('No cameras found.');
      }
    }).catch(e => {
      console.error(e);
    });
  },
  methods: {
    formatName: name => {
      return name || '(unknown)';
    },
    selectCamera: camera => {
      self.activeCameraId = camera.id;
      self.scanner.start(camera);
    }
  }
});