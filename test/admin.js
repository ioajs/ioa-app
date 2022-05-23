import test from 'jtm';
import axios from 'axios';

test('get /admin', async t => {
   const { data } = await axios.get("/admin")
   t.deepEqual(data, 'index')
});

test('get /admin/:id', async t => {
   const { data } = await axios.get("/admin/1")
   t.deepEqual(data, 'details')
});

test('post /admin', async t => {
  const { data } = await axios.post("/admin")
  t.deepEqual(data, 'post')
});

test('delete /admin/:id', async t => {
  const { data } = await axios.delete("/admin/1")
  t.deepEqual(data, 'delete')
});