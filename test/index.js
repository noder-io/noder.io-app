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

var noder = require('../index');
var test = require('unit.js');

describe('Application', function(){

  it('noder instance', function(){
    test
      .object(noder)

      .string(noder.conf.get('env'))
        .isNotEmpty()
    ;
  });

  it('isApp()', function(){
    
    test
      .bool(noder.isApp())
        .isFalse()

      .if(test.httpAgent(noder.app))
        .bool(noder.isApp())
          .isTrue()
    ;
  });

  it('noder.app request', function(){
  
    var agent;

    test
      .when(function(){

        noder.app.set('port', 0);

        noder.app.get('/', function(req, res){
          res.send('hello world');
        })
        .listen(0);
        
      })

      .then(function(){

        test.bool(noder.isApp()).isTrue();
        
        test.httpAgent(noder.app)
          .get('/')
          .expect(200)
          .expect('x-powered-by', /noder/i)

          .end(function(err, res) {
            test.string(res.text).isEqualTo('hello world');
          })
        ;
      })
    ;
  });
});
