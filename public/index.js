var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;
const path = require('path');

app.on('ready', function () {
  var appWindow;
  appWindow = new BrowserWindow();
  appWindow.loadURL(`file://${path.join(__dirname, 'index.html')}`);
  console.log(`${path.join(__dirname, 'index.html')}`);
});