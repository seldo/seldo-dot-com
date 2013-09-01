var fs = require('fs-extra')

module.exports = function(app) {
  // read all the routing files
  fs.readdirSync('./routes/').forEach(function(file,index) {
    require('./routes/'+file)(app)
  })
}
