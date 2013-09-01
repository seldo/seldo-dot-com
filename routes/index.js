/**
 * TODO: sort out GET vs POST etc.
 */

var blog = require('../controllers/blog')

module.exports = function(app){
  app.get('/',blog.index)
  app.get('/blog/:yyyy/:mm/:dd/:title',blog.show)
};