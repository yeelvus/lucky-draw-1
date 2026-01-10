const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, 'public/favicon.ico'), // 假设你有这个图标
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  // 加载 Vue 打包后的 index.html
  win.loadFile(path.join(__dirname, 'dist/index.html'))
}

app.whenReady().then(createWindow)
