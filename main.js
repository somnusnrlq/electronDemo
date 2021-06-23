const { app, BrowserWindow, Notification } = require('electron')
const path = require('path')

// 启动
app
  .whenReady()
  .then(() => {
    require('./main/menu.js') // 会重写原来菜单
    createWindow()

    app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })
  .then(showNotification)
// 关闭事件
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
// 创建窗口
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // electron 5.0 后 nodeIntegration 默认为 false 渲染进程中 require is not defined
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
      // webviewTag:true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // 开启开发工具
  win.webContents.openDevTools()
  win.loadFile('demo3.html')

  // win.on('closed', () => {
  //   win = null
  // })
}

const NOTIFICATION_TITLE = 'Basic Notification'
const NOTIFICATION_BODY = 'Notification from the Main process'
// 显示通知
function showNotification() {
  new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
}
