'use strict';

let siteURL = 'https://shipshape.io';

module.exports = {
  feed: {
    title: 'Ship Shape Blog',

    description: 'Ramblings about Ember.js, JavaScript, life, liberty, and the pursuit of happiness.',

    site_url: siteURL,

    // Icon of your site
    image_url: `${siteURL}/img/logo.png`,

    managingEditor: 'ahoy@shipshape.io (Robert Wagner)',

    webMaster: 'ahoy@shipshape.io (Robert Wagner)',

    copyright: '2018 Ship Shape Consulting LLC'
  },

  //Glob style patterns (https://github.com/isaacs/node-glob#glob-primer)
  articles: './blog/posts/*.md',

  /** Actual URL of individual blog post */
  urlForPost(postMeta) {
    return `${siteURL}/blog/${postMeta.slug}/`;
  }
};
