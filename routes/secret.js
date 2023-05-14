var crypto = require('crypto');

module.exports = function(name){
  var hash = crypto.createHash('sha1').update(name).digest('hex');
  return (hash);
}
