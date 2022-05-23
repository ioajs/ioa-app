import api from '@ioa/api';
api.post('/sms/:uid', ctx => {
    ctx.body = ctx.params;
});
