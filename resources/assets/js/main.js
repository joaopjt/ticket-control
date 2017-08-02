import axios from 'axios';
import Instascan from 'instascan';
import Vue from 'vue';

let hashTest = '2cf05d94db';

let app = new Vue({
  el: '#app',
  data: {
    scanner: null,
    activeCameraId: null,
    cameras: [],
    switch: null
  },
  mounted: function () {
    let self = this;
    let holder = document.querySelector('[data-scan]');
    let switchBtn = document.querySelector('[data-scan-switch]');

    this.scanner = new Instascan.Scanner({ 
      video: document.getElementById('preview'),
      scanPeriod: 2,
      mirror: false
    });

    this.scanner.addListener('scan', (content, image) => {
      holder.classList.add('scanned');
      holder.classList.remove('scanning');

      axios.post('/tickets', {
        scan: content
      }).then((res) => {
        if (res.code === 204) {
          holder.classList.add('hidden');
          self.messages = {}
        }
      }).catch((err) => {
        console.log('Error in validation request: ', err);
      });

      setTimeout(() => {
        self.scanner.stop();
      }, 1500);
    });

    Instascan.Camera.getCameras().then(cameras => {
      if (cameras.length) {
        self.cameras = cameras;

        self.activeCameraId = cameras[0].id;
        self.scanner.start(cameras[0]);
        holder.classList.add('scanning');
      } else {
        console.error('No cameras found.');
      }
    }).catch(e => {
      console.error(e);
    });
  },
  methods: {
    selectCamera: camera => {
      self.activeCameraId = camera.id;
      self.scanner.start(camera);
    }
  }
});