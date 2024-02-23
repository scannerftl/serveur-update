// const {app, BrowserWindow} = require('electron');  
const { app, BrowserWindow} = require('electron');
const { autoUpdater } = require("electron-updater");
const url = require('url');
const path = require('path'); 

// const server = 'https://hazel-nine-mu.vercel.app';
// const link = `${server}/update/${process.platform}/${app.getVersion()}`;
// autoUpdater.setFeedURL(link);
// Logique de mise à joure automatique 
setInterval(() => {
	// autoUpdater.checkForUpdates()
	autoUpdater.checkForUpdatesAndNotify();
  }, 60000)

// interface graphique 
function onReady () {     
	win = new BrowserWindow({
		width: 900, 
		height: 6000,
		icon: 'electron_images/logo_GAD.ico'
	})   
	win.setMenuBarVisibility(false)
	win.loadURL(url.format({      
		pathname: path.join(__dirname,'dist/frontend_gad/index.html'),       
		protocol: 'file:',      
		slashes: true     
	}))   
}


autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
	const dialogOpts = {
	  type: 'info',
	  buttons: ['Restart', 'Later'],
	  title: 'Application Update',
	  message: process.platform === 'win32' ? releaseNotes : nomrelease,
	  détail:
		'Une nouvelle version a été téléchargée. Redémarrez l\'application pour appliquer les mises à jour.'
	}
  
	dialog.showMessageBox(dialogOpts).then((returnValue) => {
	  if (returnValue.response === 0) autoUpdater.quitAndInstall()
	})
  })

autoUpdater.on('error', (message) => {
	console.error('There was a problem updating the application ')
	console.error(message)
  })

  // lancer l'application 
app.on('ready', onReady);
