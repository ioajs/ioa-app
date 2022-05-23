import { Controller, Get } from '@ioa/api';

@Controller()
class Home {
   @Get('/')
   index(ctx) {
      ctx.body = 'hello ioa';
   }
};
