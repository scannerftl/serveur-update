// const {app, BrowserWindow} = require('electron');  
const { app, BrowserWindow} = require('electron');
const { autoUpdater } = require("electron-updater");
const url = require('url');
const path = require('path'); 

// const server = 'https://hazel-nine-mu.vercel.app';
// const link = `${server}/update/${process.platform}/${app.getVersion()}`;
// autoUpdater.setFeedURL(link);

autoUpdater.checkForUpdatesAndNotify();

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

// lancer l'application 
app.on('ready', onReady);
