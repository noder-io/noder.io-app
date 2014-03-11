/**
 * This file is part of Noder.io.
 *
 * (c) Nicolas Tallefourtane <dev@nicolab.net>
 * 
 * For the full copyright and license information, please view 
 * the LICENSE file that was distributed with this source code 
 * or visit {@link http://noder.io|Noder.io}.
 *
 * @author Nicolas Tallefourtane <dev@nicolab.net>
 */

'use strict';

var noder = require('noder.io');
var debug = noder.debug;

// express application
var app;

/**
 * noder.app
 * @augments noder
 * @return {object} Returns an express application (augmented)
 */
Object.defineProperty(noder, 'app', {
  get: function() {

    if (app) {
      return app;
    }

    app = require('./lib/application')(this);

    return app;
  }
});

/**
 * noder.isApp()
 * Cheks if the app is initialized
 * @augments noder
 * @return {function}
 */
noder.isApp = function() {
  return undefined !== app;
};

noder.lazyLoader.register('router', 'noder.io-app/lib/router');
noder.lazyLoader.register('express', 'express');
noder.lazyLoader.register('load', 'express-load');

debug('noder:app')('init');

module.exports = noder;