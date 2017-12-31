#!/usr/bin/env node
var spawn = require('child_process').spawn;
var input = process.argv.slice(2);
var bin = require('./');

bin.findExisting(function(err) {
  if (err) {
    console.error("Can't find Lein binary: ", err);
    return;
  }

  spawn(bin.path(), input, {stdio: 'inherit'})
    .on('exit', process.exit);
});
