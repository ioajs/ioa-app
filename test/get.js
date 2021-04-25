import test from 'jtm';
import axios from 'axios';

test('get /', async t => {
   const{ data } = await axios.get("/")
   t.ok(data)
});

test('get /news', async t => {
   const{ data } = await axios.get("/news")
   t.ok(data)
});

test('get /sms/:id/sd/:kk', async t => {
   const{ data } = await axios.get("/sms/666/sd/888")
   t.deepEqual(data, { id: '666', kk: '888' })
});

test('get /admin', async t => {
   const{ data } = await axios.get("/admin")
   t.deepEqual(data, 'details')
});

test('get /asyncFunction', async t => {
   const{ data } = await axios.get("/asyncFunction");
   t.deepEqual(data, {})
});

test('get /function', async t => {
   const{ data } = await axios.get("/function");
   t.deepEqual(data, {})
});

test('get /arrowFunction', async t => {
   const{ data } = await axios.get("/arrowFunction");
   t.deepEqual(data, 'arrowFunction')
});