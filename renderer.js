// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const { remote } = require("electron");
const notifier = require('node-notifier')

const showNotification = withAppId => () => {

    console.log("with appID", withAppId)
    notifier.notify({
        title: "Title",
        message: "Message",
        appID: withAppId ? process.execPath : undefined,
        actions: ['Hey', 'Jude']
    }, (err, res)=> console.log(err, res))
}

document.getElementById("without-appid").addEventListener('click', showNotification(false))
document.getElementById("with-appid").addEventListener('click', showNotification(true))