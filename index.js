const { app, BrowserWindow } = require('electron');
const { autoUpdater } = require("electron-updater");
const url = require('url');
const path = require('path');

// const server = 'https://hazel-nine-mu.vercel.app';
// const link = `${server}/update/${process.platform}/${app.getVersion()}`;
// autoUpdater.setFeedURL(link);

// Logique de mise à joure automatique 
autoUpdater.checkForUpdatesAndNotify();
// setInterval(() => {
// 	autoUpdater.checkForUpdatesAndNotify();
//   }, 60000)
// autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
// 	const dialogOpts = {
// 	  type: 'info',
// 	  buttons: ['Restart', 'Later'],
// 	  title: 'Application Update',
// 	  message: process.platform === 'win32' ? releaseNotes : nomrelease,
// 	  détail:
// 		'Une nouvelle version a été téléchargée. Redémarrez l\'application pour appliquer les mises à jour.'
// 	}
// 	dialog.showMessageBox(dialogOpts).then((returnValue) => {
// 	  if (returnValue.response === 0) autoUpdater.quitAndInstall()
// 	})
//  })
// autoUpdater.on('error', (message) => {
// 	console.error('Un problème est survenu lors de la mise à jour de l\'application ')
// 	console.error(message)
// 	dialog.showMessageBox('Un problème est survenu lors de la mise à jour de l\'application:  '+ message)
// })

// interface graphique 
function onReady() {
	win = new BrowserWindow({
		width: 900,
		height: 6000,
		icon: 'electron_images/logo_GAD.ico'
	})
	win.setMenuBarVisibility(false)
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'dist/frontend_gad/index.html'),
		protocol: 'file:',
		slashes: true
	}))
}

// lancer l'application 
app.on('ready', onReady);
