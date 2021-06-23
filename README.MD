
## 安装环境
>>https://www.electronjs.org/docs/tutorial/quick-start 

```
npm init 
npm install --save-dev electron
```

app 模块，它控制应用程序的事件生命周期。
BrowserWindow 模块，它创建和管理应用程序 窗口。

* 预加载（preload）脚本 webPreferences 
* 语境隔离（Context Isolation） contextBridge

## 安装工具并打包
```
npm install --save-dev @electron-forge/cli
npx electron-forge import

npm run make
```

package打包配置 electronPackagerConfig
```
 "packagerConfig": {
        "packageManager":"npm", 
        "icon":"src/assets/icon/login",// 提供路径名称即可，不需要后缀
        "asar":true, // 打包是将源文件封装，看不到源码
        "overwrite":true // 打包时覆盖
      },
```
## 语法  

>>> https://github.com/electron/electron-quick-start

* Notification

## Electron 运行流程

1. 读取package.json的中的入口文件,这里我们是main.js
2. main.js 主进程中创建渲染进程
3. 读取应用页面的布局和样式
4. 使用IPC在主进程执行任务并获取信息

了解BrowserWindow 的各种属性
>> https://www.electronjs.org/docs/api/browser-window#new-browserwindowoptions

## 错误锦集

1.Cannot destructure property 'BrowserWindow' of 'require(...).remote' as it i

mainWindow = new BrowserWindow({
    width: 1280,
    height: 960,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
     },
  });
```
2. Uncaught TypeError: Assignment to constant variable 错误

解决办法：改成let进行声明
```

渲染进程打开新窗口需要对主进程的窗体的属性进行设置

3. 使用Shell打开外面不浏览器无效
 
  --需要在 webPreferences中开启webviewTag的属性--

## 实现功能
- [x] 打开渲染进程新窗口
- [x] 自定义菜单(快捷键)
- [x] 右键菜单
- [x] Shell打开外部浏览器

