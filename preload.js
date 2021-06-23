// 通过预加载脚本从渲染器访问Node.js
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
