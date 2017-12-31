var path = require('path');
var BinWrapper = require('bin-wrapper');

var version = process.env.LEIN_VERSION || 'stable';
var base = 'https://raw.githubusercontent.com/technomancy/leiningen/' + version + '/bin';

var bin = new BinWrapper({skipCheck: true})
  .src(base + '/lein')
  .src(base + '/lein.bat', 'win32')
  .dest(path.join(__dirname, 'vendor', version))
  .use(process.platform === 'win32' ? 'lein.bat' : 'lein');

module.exports = bin;
