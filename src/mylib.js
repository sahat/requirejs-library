define([
  './skeleton/core',
  './skeleton/feature',
  './skeleton/module'
], function(skeleton) {
    console.log('boom')
// Expose skeleton and $ identifiers globally
return (window.skeleton = window.$ = skeleton);

});