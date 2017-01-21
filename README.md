# New-Tab-To-Do-List

A task manager to manage your to-dos and your life every time you open a new tab.

## Features

- [x] Create lists
- [x] Add Tasks
- [x] Check off tasks
- [ ] Archive tasks
- [ ] Search all tasks (completed and active)
- [ ] Settings

## Making Changes

```
# clone the repo
git clone https://github.com/walshyb/New-Tab-To-Do-List.git

# install all dependencies; install gulp globally
npm install -g gulp

# compile Sass, ES6/JSX, and EJS, bundle, and minify images into ./public/
gulp

```

## Environments
Development environment is enabled by default. This allows use of Chrome's Redux Dev Tools extension by including using Express to locally serve the Browserify's bundled result.

```
# Build in production environment and serve static bundle
gulp production 
```

## Architecture
```
package.json         : List of dependencies and dev dependencies
gulpfile.js          : Automate compilation of assets and watch for changes
server/app.js        : Node script to host Browserify's bundle locally
assets/chrome        : Dev and prodution manifests for Chrome extension
assets/javascripts   : React components and Redux actions & reducers
assets/images        : Background image and icons
assets/stylesheets   : Sass componenets
assets/index.html.ejs: HTML file with EJS to include scripts based on environment
public/              : Visible after compiling assets with gulp; Same directory architecture as `assets/` (except manifest is in root)
```
