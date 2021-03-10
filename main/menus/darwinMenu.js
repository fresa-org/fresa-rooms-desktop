module.exports = (app, window, i18n) => {
  return [
    {
      label: app.name,
      submenu: [
        { role: 'about', label: i18n.t('about') },
        { type: 'separator' },
        { role: 'quit', label: i18n.t('quit'), accelerator: 'Command+Q', click: () => app.quit() },
      ],
    },
    {
      label: i18n.t('language'),
      submenu: [
        {
          label: 'English',
          click: () => i18n.changeLanguage('en'),
        },
        {
          label: 'العربية',
          click: () => i18n.changeLanguage('ar'),
        },
      ],
    },
  ]
}
