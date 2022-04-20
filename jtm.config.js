import { createApp } from 'ioa';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5500';

await createApp({
  main: "./main",
  admin: "./admin"
});
