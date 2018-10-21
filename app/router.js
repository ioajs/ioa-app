'use strict';

let app = require('ioa')

let { token } = app.middleware

app.get('/', 'index.home')

app.post('/login', 'index.login')

app.get('/news', 'news.home')

app.get('/news/:id/details/:kk', 'news.details')

app.get('/sms/:id/sd/:kk', 'index.sms')

app.post('/sms/:id/sd/:kk', 'index.sms')

app.get('/admin', 'admin.index.details')

////////// REST路由 ////////////

// 模糊匹配路由，泛解析，通用模型控制器
app.resources('/rest/:name', 'rest')

// app.get('/rest/123', 'rest.123')