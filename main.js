const { app, BrowserWindow, Menu, ipcMain } = require('electron'); // destructuring
const menuTemplate = require('./menu');

app.on('ready', () => {
    console.log("Application is ready");

    // open up a renderer and turn IPC on
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 605,
        resizable: false,
        webPreferences: {
            nodeIntegration: true, 
            contextIsolation: false 
        }
    });
    
    // load the index.html file
    mainWindow.loadFile('index.html');
});

Menu.setApplicationMenu(menuTemplate);


