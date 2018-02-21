/**
 * Created by Rama Krishna on 7/17/2017.
 */
// Get the locale id somehownode
document.locale = 'hi';

// Map to the text plugin
System.config({
  map: {
    text: 'systemjs-text-plugin.js'
  }
});

// Launch the app
System.import('app/main').catch(function(err){ console.error(err); });
