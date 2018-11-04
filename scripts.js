// const app = document.getElementById('root');
//
// const container = document.createElement('div');
// container.setAttribute('class', 'container');
//
// app.appendChild(container);
//
// // Embed dash video
//
// // When mouse clicks on div / within coords of vid, screenshot
//
// (function(){
//       var url = "https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd";
//       var player = dashjs.MediaPlayer().create();
//       player.initialize(document.querySelector("#videoPlayer"), url, true);
//         })();
//
// var video = document.querySelector(‘video’);
// var canvas = document.querySelector(‘canvas’);
// var context = canvas.getContext(‘2d’);
// var w, h, ratio;

video.addEventListener(‘loadedmetadata’, function() {
    ratio = video.videoWidth / video.videoHeight;
    w = video.videoWidth - 100;
    h = parseInt(w / ratio, 10);
    canvas.width = w;
    canvas.height = h;
}, false);

function snap() {
    context.fillRect(0, 0, w, h);
    context.drawImage(video, 0, 0, w, h);
}
