class News {
   home(ctx) {
      ctx.body = 'news home';
   }
   details(ctx) {
      ctx.body = {
         params: ctx.params,
         body: 'news details'
      };
   }
}

export default News;
