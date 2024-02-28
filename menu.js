const { Menu, dialog } = require("electron");
const isMac = process.platform === "darwin";

// create a menu for this application
const menuTemplate = [
  {
    // file menu
    label: "File",
    submenu: [
      {
        // video menu
        label: "Video",
        submenu: [
          {
            label: "Load",
            click(event, parentWindow) {
              const dialogOptions = {
                title: "Nandu's Open File Dialog",
                defaultPath: __dirname,
                filters: [
                  { name: "Videos", extensions: ["mp4", "mkv", "avi"] },
                ],
              };
              dialog
                .showOpenDialog(parentWindow, dialogOptions)
                .then((fileSelected) => {
                  // console.log(fileSelected);
                  if (fileSelected.canceled) {
                    console.log("User cancelled file open dialog");
                  } else {
                    console.log(`User selected: ${fileSelected.filePaths[0]}`);
                    parentWindow.webContents.send(
                      "fileSelected",
                      fileSelected.filePaths[0]
                    );
                  }
                })
                .catch((err) => {
                  console.error(err);
                });
            },
          },
        ],
      },
      // separator
      { type: "separator" },
      {
        label: "Quit",
        role: isMac ? "close" : "quit",
      },
    ],
  },
  {
    // developer menu
    label: "Developer",
    submenu: [
      {
        label: "Toggle Developer Tools",
        role: "toggleDevTools",
      },
    ],
  },
];

// move menu over if on MAC, so we get a File menu
if (isMac) {
  menuTemplate.unshift({
    label: "placeholder",
  });
}

module.exports = Menu.buildFromTemplate(menuTemplate);
