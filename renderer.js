const { ipcRenderer } = require("electron");

ipcRenderer.on('fileSelected', (event, filePath) => {

    // log the file path selected in the dialog to the console of the window
    console.log('Selected file path:', filePath);

    const videoPlayer = document.querySelector('.js-player');
    const videoSource = document.getElementById('videoSource');

    // set the src attribute of the video element
    videoSource.src = filePath;

    // load and play the selected video
    videoPlayer.load();
    //videoPlayer.play();

})

