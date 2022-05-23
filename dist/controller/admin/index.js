import api from '@ioa/api';
api.get('/admin', ctx => {
    ctx.body = 'index';
});
api.get('/admin/:id', ctx => {
    ctx.body = 'details';
});
api.post('/admin', ctx => {
    ctx.body = 'post';
});
api.del('/admin/:id', ctx => {
    ctx.body = 'delete';
});
