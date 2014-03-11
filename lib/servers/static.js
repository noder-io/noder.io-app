var noder   = require('noder.io-app');
var path    = require('path');
var fs      = require('fs');
var app     = noder.app;
var express = noder.express;

module.exports = function(options) {

  // development only
  if ('development' == app.get('env')) {
    app.use(express.errorHandler());
  }

  if(options.port){
    app.set('port', options.port);
  }

  if(!options.root){

    // path by default
    options.root = path.resolve('public');
  }else{

    // resolve relative path
    options.root = path.resolve(options.root);
  }

  if(!fs.existsSync(options.root)){
    throw new Error('Root path is not found ' + options.root);
  }

  if(options.debug){
    app.use(express.logger('dev'));
  }

  app.use(express.static(options.root));

  app.listen(app.get('port'), function(){
    console.log('Noder.io: server "static"' + (options.debug ? ' with debug actived' : ''));
    console.log('Listening on port: ' + app.get('port'));
    console.log('Static path: ' + options.root);
  });
};