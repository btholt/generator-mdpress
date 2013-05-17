# Generator mdpress
[![Build Status](https://secure.travis-ci.org/btholt/generator-mdpress.png?branch=master)](https://travis-ci.org/btholt/generator-mdpress)

You'll need to install Aditya Bhargava's [mdpress](http://github.com/egonSchiele/mdpress) for this work.

mdpress is a ruby gem that allows you to create rad presentations using [impress.js](http://github.com/bartaz/impress.js) in simple and readable [markdown](http://daringfireball.net/projects/markdown/).

This generator allows you to scaffold up a presentation using Yeoman. In addition, it comes bundled with a JavaScript file that enforces [Ignite presentation guidelines](http://tinyurl.com/3lxmml) that will automatically advance the slides every 15 seconds and put it into fullscreen mode for you.

## New in 0.2.0
- [Gruntjs](http://gruntjs.com)! Now you can run grunt tasks to manage your presentation. The most useful being `grunt server` which will watch for changes, run mdpress to compile for you, and do livereload.
- Implemented underscore templating in the templates.
- Made package.json and bower.json more useful.

## Current Issues
- If you're using the ignite JS, you cannot open the presentation using the mdpress -r flag. It's because mdpress creates a temporary project and only copies select files to that temp directory. Instead use the grunt tasks provided.

## Getting started
- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Install the generator **locally**: `npm install generator-mdpress`
- Run: `yo mdpress`

## Use
- To run presentation, enter `grunt server` in the terminal from the root of the project.

## Roadmap
- Split ignite JS into subgenerator.
- Add testing.
- Add multiple themes. Perhaps a Yeoman-specific theme.

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)
