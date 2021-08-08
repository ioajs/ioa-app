import test from 'jtm'
import ioa from 'ioa';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5500';

await ioa.apps("./main");

test.ioa = ioa;
