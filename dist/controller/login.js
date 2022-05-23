import api from '@ioa/api';
api.post('/login', ctx => {
    const body = ctx.request.body;
    ctx.body = {
        type: 'login',
        body
    };
});
