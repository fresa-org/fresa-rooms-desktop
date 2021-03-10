const languages = ['en', 'ar']
const resources = {}

languages.map(language => {
  resources[language] = { translation: require(`./${language}.js`) }
})

module.exports = {
  ...resources,
}