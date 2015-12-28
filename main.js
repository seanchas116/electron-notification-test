var electron = require("electron");
var app = electron.app;
var BrowserWindow = electron.BrowserWindow

app.on("ready", function() {
  var mainWindow = new BrowserWindow({width: 600, height: 400});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.openDevTools();
});
