'use strict';

const app = require('@app');

app.use('@ioa/config');
app.use('@ioa/koa');

app.loader({
  "test": {
     level: 30,
     action() {
        return 666;
     }
  },
});
