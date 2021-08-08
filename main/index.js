export default {
    "components": [
        "@ioa/config",
        "@ioa/koa"
    ],
    "import": {
        "test": {
            level: 30,
            action() {
                return 666;
            }
        },
    }
};
