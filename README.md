# Noder.io-app


## DEPRECATED !

This package is deprecated.

Works only with [noder.io@v0](https://github.com/noder-io/noder.io/releases/tag/v0) and [Express 3](https://github.com/strongloop/express/tree/3.x).

---


[![Actual version published on NPM](https://badge.fury.io/js/noder.io-app.png)](https://www.npmjs.org/package/noder.io-app)
[![Dependencies](https://david-dm.org/noder-io/noder.io-app.png)](https://david-dm.org/noder-io/noder.io-app)

_noder.io-app_ is a light starter toolkit to start and organize quickly an application with Node.js. Noder.io-app provides _express_ and other features (router that support the named routes, _express-load_, ...).

_noder.io-app_ is an extension of [Noder.io](https://github.com/noder-io/noder.io).

If _noder.io_ is not installed, it will be installed during the installation of _noder.io-app_.

  * In progress:
    * online documentation, API doc and tutorials (multilingual, french and english from the start)
    * starter kit for start quickly a project Node.js (without unnecessary overhead, nor imposed modules)
    * standalone and portable noder package


## Getting Started

_noder.io-app_ require node.js 0.10 or higher.

### Install noder

Via NPM :

```sh
npm install noder.io-app
```

### Usage

```js
// load the modules noder.io + noder.io-app into the noder variable
var noder = require('noder.io-app');

// shortcut, noder application (it uses express)
var app = noder.app;

// display the environment of execution
console.log(noder.conf.get('env'));

// named route
app.post({path: '/hello/:name', as:'hello'}, function(req, res){
  res.end('Hello ' + req.name);
});

// script loader
noder.load('config')
  .then('routes')
  .into(app);

// ...
```

If you already use [noder.io](https://github.com/noder-io/noder.io), this also works :

```js
// load noder.io into the noder variable
var noder = require('noder.io');

// Add noder.io-app into the noder variable
require('noder.io-app');

// shortcut, noder application (it uses express)
var app = noder.app;

// display the environment of execution
console.log(noder.conf.get('env'));

// named route
app.post({path: '/hello/:name', as:'hello'}, function(req, res){
  res.end('Hello ' + req.name);
});

// script loader
noder.load('config')
  .then('routes')
  .into(app);

// ...
```

#### Static server

Very useful for quickly run a HTTP server.

```shell
node node_modules/.bin/noder-server --help
```

 Usage: noder-server [options]

  Options:

    -h, --help         output usage information
    -s, --static       Run a static server
    -r, --root <path>  The root path (default: public)
    -p, --port <port>  The port (default: 3000)
    --debug            Debug mode

```shell
node node_modules/.bin/noder-server --static --debug --port 8080
```

Open your browser on http://localhost:8080 it works :)

## Testing

Noder.io-app is tested with [Unit.js](http://unitjs.com) and Mocha. 
Unit.js is a powerful and intuitive unit testing framework for javascript.

## Contributing

Contributions are welcome, you are welcome :)

## License

Copyright (c) 2014, Nicolas Tallefourtane.


BSD 2, see LICENSE file for more info.

## Author

| [![Nicolas Tallefourtane - Nicolab.net](http://www.gravatar.com/avatar/d7dd0f4769f3aa48a3ecb308f0b457fc?s=64)](http://nicolab.net) |
|---|
| [Nicolas Talle](http://nicolab.net) |
| [![Make a donation via Paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PGRH4ZXP36GUC) |
