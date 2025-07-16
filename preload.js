const { contextBridge } = require('electron');
const fs = require('fs');
const path = require('path');

const notesPath = path.join(__dirname, 'notes.txt');

contextBridge.exposeInMainWorld('electronAPI', {
  saveNote: (content) => {
    return fs.promises.writeFile(notesPath, content);
  }
});
