export default {
  "component": [
    "@ioa/config",
    "@ioa/http"
  ],
  "import": {
    "test": {
      level: 30,
      action() {
        return 666;
      }
    },
    "router.js": {
      level: 80
    }
  }
}