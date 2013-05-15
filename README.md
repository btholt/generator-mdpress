# Generator mdpress
[![Build Status](https://secure.travis-ci.org/btholt/generator-mdpress.png?branch=master)](https://travis-ci.org/btholt/generator-mdpress)

You'll need to install Aditya Bhargava's [mdpress](http://github.com/egonSchiele/mdpress) for this work.

mdpress is a ruby gem that allows you to create rad presentations using [impress.js](http://github.com/bartaz/impress.js) in simple and readable [markdown](http://daringfireball.net/projects/markdown/).

This generator allows you to scaffold up a presentation using Yeoman. In addition, it comes bundled with a JavaScript file that enforces [Ignite presentation guidelines](http://en.wikipedia.org/wiki/Ignite_(event\)) that will automatically advance the slides and put it into fullscreen mode for you.

## Current Issues
- If you're using the ignite JS, you cannot open the presentation using the mdpress -r flag. It's because mdpress creates a temporary project and only copies select files to that temp directory. Instead compile the project (via mdpress *filename* or mdpress -a *filename*, both work) and then simply open *filename*/index.html directly in your browser. If you're not using the ignite JS, then go ahead and use the -r flag.

## Getting started
- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Install the generator **locally**: `npm install generator-mdpress`
- Run: `yo mdpress`

## Use
- To run the presentation, on the command line enter
    mdpress *filename*.md -s *themename*
    open *filename*/index.html

## Roadmap
- Address the issue with the ignite JS file not being pull across either via pull-request to mdpress or by creating a Grunt task to take care of it.
- Notwithstanding how the above is solved, create a Gruntfile to automate processes like watching, running, and even using SCSS for the CSS.
- Split ignite JS into subgenerator.
- Add testing.

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)
