import test from 'jtm';
import axios from 'axios';

test('post /login', async t => {
   const body = { xx: 666 }
   const { data } = await axios.post("/login", body)
   t.deepEqual(data, { type: 'login', body })
});


test('post /sms/:uid', async t => {
   const { data } = await axios.post("/sms/123", {})
   t.deepEqual(data, { uid: '123' })
});