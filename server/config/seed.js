/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Snippet = require('../api/snippet/snippet.model');
var User = require('../api/user/user.model');

// Snippet.find({}).remove(function() {
//   Snippet.create({
//     title : 'How to animate a DOM element',
//     description : 'This is just some basic CSS3 animation that will enable you to add high performance animation to your web projects',
//     topicTags : ["responsive", "layout"],
//     languageTags : ["javascript"];
//     projectTags : [],
//     snippet: "lorem dslfuhsdlfuksdg f,isuoufh dfs df usdf sdhf sudohfs dh.fo sdhf gs,fiu dhs.f b,fj dhls ds.fis "
//   }, {
//     name : 'Server and Client integration',
//     info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
//   }, {
//     name : 'Smart Build System',
//     info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
//   },  {
//     name : 'Modular Structure',
//     info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
//   },  {
//     name : 'Optimized Build',
//     info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
//   },{
//     name : 'Deployment Ready',
//     info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
//   });
// });

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});