const {app, Menu, Tray, nativeImage} = require('electron')
const notify = require('electron-main-notification')

let tray = null
const image = nativeImage.createFromPath('tray_icon_black.png')
image.setTemplateImage(true)

app.on('ready', () => {
  //app.dock.setIcon(image)
  // setInterval(() => {
  //   sayHey()
  // }, 1000)
  app.dock.hide()
  tray = new Tray(image)
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Item1', type: 'radio', checked: true},
    {label: 'Item2', type: 'radio'},
    {
      label: 'Say Hey',
      click () { sayHey() }
    },
    {role: 'quit'}

  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
  tray.on('mouse-enter', () => {
    tray.setImage('tray_icon_purple.png')
  })
  tray.on('mouse-leave', () => {
    tray.setImage(image)
  })
})

var sayHey = function () {
  notify('Hey!', { body: 'How you doin?', silent: true }, () => {
    console.log('The notification got clicked on!')
  })
}
