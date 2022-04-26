import { main } from 'ioa';
const { router, middleware } = main;
const { cors } = middleware;
router.before(cors);
// router.get('/', 'home.index');
// router.get('/sms/:id/sd/:kk', 'home.sms');
// router.post('/login', 'home.login');
router.get('/news', 'news.index');
router.get('/news/:id/details/:kk', 'news.details');
router.post('/sms/:id/sd/:kk', 'home.sms');
router.get('/admin', 'admin.home.details');
router.get('/asyncFunction', 'asyncFunction');
router.get('/function', 'function');
router.get('/arrowFunction', 'arrowFunction');
////////// REST路由 ////////////
// 模糊匹配路由，泛解析，通用模型控制器
router.resources('/rest/:name', 'rest');
