import { get, post } from '../../decorator.js';

class News {
   @get('/news')
   index(ctx) {
      ctx.body = 'news home';
   }
   @get('/news/:id')
   details(ctx) {
      ctx.body = {
         params: ctx.params,
         body: 'news details'
      };
   }
}

export default News;
