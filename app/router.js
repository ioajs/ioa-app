'use strict';

let { router, middleware } = require('ioa')

let { cors } = middleware

router.get('/', cors, 'index.home')

router.post('/login', cors, 'index.login')

router.get('/news', cors, 'news.home')

router.get('/news/:id/details/:kk', 'news.details')

router.get('/sms/:id/sd/:kk', 'index.sms')

router.post('/sms/:id/sd/:kk', 'index.sms')

router.get('/admin', 'admin.index.details')

////////// REST路由 ////////////

// 模糊匹配路由，泛解析，通用模型控制器
router.resources('/rest/:name', 'rest')

// router.get('/rest/123', 'rest.123')