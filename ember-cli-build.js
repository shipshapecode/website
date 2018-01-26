'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const shim = require('@html-next/flexi-layouts/lib/pod-templates-shim');

shim(EmberApp);

module.exports = function(defaults) {
  const app = new EmberApp(defaults, {
    emberCliConcat: {
      js: {
        concat: true,
        useAsync: true
      },
      css: {
        concat: false
      }
    },
    fingerprint: {
      extensions: ['js', 'css', 'map']
    },
    inlineContent: {
      app: 'inline/styles/app.css',
      contact: 'inline/styles/contact.css',
      'ember-consulting': 'inline/styles/ember-consulting.css',
      fonts: 'inline/styles/fonts.css',
      'google-analytics': {
        file: 'inline/ga.js',
        enabled: process.env.EMBER_ENV === 'production'
      },
      home: 'inline/styles/home.css',
      'open-source': 'inline/styles/open-source.css'
    },
    prember: {
      urls: [
        '/',
        '/ember-consulting',
        '/open-source',
        '/contact'
      ]
    },
    SRI: {
      enabled: false
    },
    treeShaking: {
      enabled: true,
      include: [
        'ember-validators/format.js',
        'ember-validators/presence.js'
      ]
    },
    vendorFiles: { 'jquery.js': null }
  });

  return app.toTree();
};
