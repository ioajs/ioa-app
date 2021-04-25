import test from 'jtm';
import axios from 'axios';

test('post /login', async t => {
   const body = { xx: 666 }
   const{ data } = await axios.post("/login", body)
   t.deepEqual(data, { type: 'login', body })
});


test('post /sms/:id/sd/:kk', async t => {
   const{ data } = await axios.post("/sms/55/sd/66", {})
   t.deepEqual(data, { id: "55", kk: "66" })
});
