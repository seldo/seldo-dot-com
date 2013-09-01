exports.index = function(req,res) {
  res.render('index', { title: 'Express' });
}

exports.show = function(req,res) {
  res.send("respond with a resource");
}