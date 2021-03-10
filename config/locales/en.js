const menu = {
  'about': 'About',
  'quit': 'Quit',
  'language': 'Language',
}

const login = {
  appName: 'Fresa Class Rooms',
  appDescription: 'Secure video meetings for Teachers and Students',
  companyName: 'Fresa',
  companyDescription: 'Fresa makes it downright pleasant to learn online wherever you are!',
  signIn: 'Sign in to Fresa',
  noWorkspace: 'Don\'t have a workspace?',
  createWorkspace: 'Create a new workspace',
}

const createWorkspace = {
  enterEmailMessage: 'First, enter your email',
  enterEmailAdvice: 'We suggest using the email address you use at work.',
}

module.exports = {
  ...menu,
  ...login,
  ...createWorkspace,
}
