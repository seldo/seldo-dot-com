var fs = require('fs-extra')

module.exports = function(app) {
  // read all the routing files
  fs.readdirSync(__dirname + '/routes/').forEach(function(file,index) {
    require(__dirname + '/routes/'+file)(app)
  })
}
