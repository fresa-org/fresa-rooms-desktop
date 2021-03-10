const appConfig = require('../../config/app.config')
const darwinMenu = require('../menus/darwinMenu')
const otherMenu = require('../menus/otherMenu')

const Menu = require('electron').Menu

module.exports = (app, window, i18next) => {
  const template = appConfig.isDarwin ? darwinMenu(app, window, i18next) : otherMenu(app, window,
    i18next)
  return Menu.buildFromTemplate(template)
}
