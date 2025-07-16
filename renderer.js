const editor = document.getElementById('editor');

// Save note whenever text changes (with delay)
let saveTimeout;
editor.addEventListener('input', () => {
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    window.electronAPI.saveNote(editor.value);
  }, 500); // Save after user stops typing for 500ms
});
