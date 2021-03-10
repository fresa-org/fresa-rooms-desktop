module.exports = (app, window, i18n) => {
  return [
    {
      label: app.name,
      submenu: [
        { role: 'about', label: i18n.t('about') },
        { type: 'separator' },
        { role: 'quit', label: i18n.t('quit'), accelerator: 'Ctrl+Q', click: () => app.quit() },
      ],
    },
  ]
}
