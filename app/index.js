'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var MdpressGenerator = module.exports = function MdpressGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(MdpressGenerator, yeoman.generators.NamedBase);

MdpressGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // welcome message
  var welcome =
  '\n     _-----_' +
  '\n    |       |' +
  '\n    |' + '--(o)--'.red + '|   .--------------------------.' +
  '\n   `---------´  |    ' + 'Welcome to Yeoman,'.yellow.bold + '    |' +
  '\n    ' + '( '.yellow + '_' + '´U`'.yellow + '_' + ' )'.yellow + '   |   ' + 'ladies and gentlemen!'.yellow.bold + '  |' +
  '\n    /___A___\\   \'__________________________\'' +
  '\n     |  ~  |'.yellow +
  '\n   __' + '\'.___.\''.yellow + '__' +
  '\n ´   ' + '`  |'.red + '° ' + '´ Y'.red + ' `\n';

  console.log(welcome);

  var prompts = [{
    name: 'filename',
    message: 'What is the filename of your presentation?',
    default: 'presentation'
  },
  {
    name: 'theme',
    message: 'What is the filename of your theme?',
    default: 'mytheme'
  },
  {
    name: 'ignite',
    message: 'Is this an Ignite presentation?',
    default: 'Y/n'
  }];

  this.prompt(prompts, function (err, props) {
    if (err) {
      return this.emit('error', err);
    }
    this.filename = props.filename;
    this.theme = props.theme;
    this.ignite = (/y/i).test(props.ignite);

    cb();
  }.bind(this));
};

MdpressGenerator.prototype.app = function app() {
  this.engine('underscore');
  this.template('_package.json', 'package.json');
  this.template('_Gruntfile.js', 'Gruntfile.js');
  this.copy('_mytheme.css', 'themes/' + this.theme + '.css');
  this.template('_bower.json', 'bower.json');
  if (this.ignite === true) {
    this.copy('_ignite.js', this.filename + '/js/ignite.js');
    this.copy('_mythemeIgnite.html', 'themes/' + this.theme + '.html');
    this.copy('_presentationIgnite.md', this.filename + '.md');
  }
  else {
    this.copy('_presentation.md', this.filename + '.md');
    this.copy('_mytheme.html', 'themes/' + this.theme + '.html');
  }
};

MdpressGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
