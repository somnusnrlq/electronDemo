// 通过预加载脚本从渲染器访问Node.js
const { remote} = require('electron')
const { BrowserWindow } = require('electron').remote


window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})


window.onload = function () {
  const btn = this.document.querySelector('#btn')
  btn.onclick = () => {
    alert(11)
    let newWin = new BrowserWindow({
      width: 500,
      height: 500
    })
    // newWin.loadFile('yellow.html')
    newWin.loadURL('https://www.baidu.com')
    newWin.on('close', () => {
      newWin = null
    })
  }
}

var rigthTemplate = [
  {label:'粘贴'},
  {label:'复制'}
]

var m = remote.Menu.buildFromTemplate(rigthTemplate)
// 右键菜单
window.addEventListener('contextmenu',function(e){
   //阻止当前窗口默认事件
   e.preventDefault();
   //把菜单模板添加到右键菜单
   m.popup({window:remote.getCurrentWindow()})
})