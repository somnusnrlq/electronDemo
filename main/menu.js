const { Menu,BrowserWindow } = require('electron')

var template = [
  {
    label: '首页',
    submenu: [
      {
        label: '新窗口',
        accelerator:`ctrl+n`,
        click: () => {
           let win = new BrowserWindow({
                width:500,
                height:500,
                webPreferences:{ nodeIntegration:true}
            })
            win.loadFile('./render/yellow.html')
            win.on('closed',()=>{
                win = null
            })
        }
      },
      { label: '菜单1-2' }
    ]
  },
  {
    label: '菜单2',
    submenu: [{ label: '菜单2-1' }, { label: '菜单2-2' }]
  }
]

var m = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(m)
