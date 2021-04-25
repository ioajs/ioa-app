import test from 'jtm';
import ioa from 'ioa';
import axios from 'axios';

test.ioa = ioa;
axios.defaults.baseURL = 'http://localhost:5500';

await ioa.loadApp("./main");
