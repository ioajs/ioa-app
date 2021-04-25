import ioa from 'ioa';

const { app } = ioa;

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
