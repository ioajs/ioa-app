import test from 'jtm';
import axios from 'axios';

test('get /', async t => {
   const { data } = await axios.get("/")
   t.ok(!data.error, data.error)
});

test('get /news', async t => {
   const { data } = await axios.get("/news")
   t.ok(!data.error, data.error)
});


