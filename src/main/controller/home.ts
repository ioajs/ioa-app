import { Controller, get, post } from '../decorator.js';

@Controller
class Home {
   @get('/')
   index(ctx) {
      ctx.body = 'hello ioa';
   }
   @post('/sms')
   sms(ctx) {
      ctx.body = ctx.params;
   }
   @post('/login')
   login(ctx) {
      const body = ctx.request.body
      ctx.body = {
         type: 'login',
         body
      };
   }
};

export default Home;
