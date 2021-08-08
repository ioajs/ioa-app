import ioa from 'ioa';

const { router, middleware } = ioa.app();

const { cors } = middleware;

router.before(cors);

router.get('/', 'home.index');

router.post('/login', 'home.login');

router.get('/news', 'news.index');

router.get('/news/:id/details/:kk', 'news.details');

router.get('/sms/:id/sd/:kk', 'home.sms');

router.post('/sms/:id/sd/:kk', 'home.sms');

router.get('/admin', 'admin.home.details');

router.get('/asyncFunction', 'asyncFunction');

router.get('/function', 'function');

router.get('/arrowFunction', 'arrowFunction');

////////// REST路由 ////////////

// 模糊匹配路由，泛解析，通用模型控制器
router.resources('/rest/:name', 'rest');

// router.get('/rest/123', 'rest.123');
