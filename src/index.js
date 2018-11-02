import Koa from 'koa';
import bodyParser from "koa-bodyparser";
import router from './router';
import CONFIG from './config';
const app = new Koa();

app
.use(bodyParser({
    enableTypes: ['json'],
    extendTypes: ['application/json'],
    onerror: function (err, ctx) {
      ctx.throw('Body parse error', 422);
    }
  }))
.use(router)
app.listen(CONFIG.APP.port, CONFIG.APP.host);
console.log(`SERVER AT http://${CONFIG.APP.host}:${CONFIG.APP.port}`);
