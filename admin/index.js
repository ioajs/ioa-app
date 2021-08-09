import ioa from 'ioa';
const app = ioa.app();
app.import({
    "node": {
        level: 50,
        action() {
            return 666;
        }
    }
});
