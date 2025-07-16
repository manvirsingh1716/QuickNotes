const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 600,
    height: 400,
    show: false,
    alwaysOnTop: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  });

  win.loadFile('index.html');
  win.setMenu(null);
}

app.whenReady().then(() => {
  createWindow();

  globalShortcut.register('CommandOrControl+Shift+Space', () => {
    if (win.isVisible()) {
      win.hide();
    } else {
      win.show();
    }
  });
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});
