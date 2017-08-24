const {app, Menu, Tray, nativeImage} = require('electron')

let tray = null
const image = nativeImage.createFromPath('tray_icon_purple.png')
image.setTemplateImage(true)

app.on('ready', () => {
  app.dock.hide()
  tray = new Tray(image)
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Item1', type: 'radio', checked: true},
    {label: 'Item2', type: 'radio'},
    {
      label: 'Say Hey',
      click () { console.log('heyo')}
    },
    {role: 'quit'}


  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
  tray.on('mouse-enter', ()=>{
    tray.setImage('tray_icon_purple.png')
  })
  tray.on('mouse-leave', ()=>{
    tray.setImage(image)
  })
})
