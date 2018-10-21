'use strict';

let { Controller } = require('ioa')

class index extends Controller {
   home(ctx) {
      ctx.body = 'hello ioa';
   }
   sms(ctx) {
      ctx.body = ctx.parameter;
   }
   login(ctx) {
      let body = ctx.request.body
      ctx.body = {
         type: 'login',
         body
      };
   }
}

module.exports = index