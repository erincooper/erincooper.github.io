var express = require('express');
var app = express();
app.use(express.static(__dirname));

var browserSync = require('browser-sync').create('myServer');
browserSync.init({
  server: "./",
  notify: false
});

var currentSession = require('browser-sync').get('myServer');
currentSession.watch('*.html').on('change', currentSession.reload);
console.log("Watching HTML files...");
currentSession.watch('assets/css/*.css').on('change', currentSession.reload);
console.log("Watching all CSS files...");
