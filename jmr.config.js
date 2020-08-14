'use strict';

const test = require('jmr')
const ioa = require('ioa');
const axios = require('axios');

axios.defaults.baseURL = 'http://localhost:5500';

ioa.app("./main");

test.ioa = ioa;