import api from '@ioa/api';

api.get('/news', ctx => {
   ctx.body = 'news home';
});

api.get('/news/:id', ctx => {
   ctx.body = {
      params: ctx.params,
      body: 'news details'
   };
});
