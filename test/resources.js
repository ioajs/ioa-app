import test from 'jtm';
import axios from 'axios';

test('resources get /rest/:name', async t => {
   const{ data } = await axios.get("/rest/sss")
   t.deepEqual(data, { name: 'sss' })
});

test('resources get /rest/:name/:id', async t => {
   const{ data } = await axios.get("/rest/xx/888")
   t.deepEqual(data, { id: '888', name: 'xx' })
});

test('resources post /rest/:name', async t => {
   const body = { xx: 666 }
   const{ data } = await axios.post("/rest/xx", body)
   t.deepEqual(data, body)
});

test('resources put /rest/:name/:id', async t => {
   const body = { sss: 888 }
   const{ data } = await axios.put("/rest/xx/999", body)
   t.deepEqual(data, { body, params: { name: 'xx', id: '999' } })
});

test('resources delete /rest/:name/:id', async t => {
   const{ data } = await axios.delete("/rest/kk/999")
   t.deepEqual(data, { name: 'kk', id: '999' })
})