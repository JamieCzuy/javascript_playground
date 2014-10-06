#!/bin/jsc
debug('Setting Timeout');
setTimeout(function() {       //<--- DOESN'T WORK - setTimeut is undefined
  debug('Done Waiting');
}, 2000);
debug('Waiting for 2 seconds.');
