import compose from 'koa-compose';
import RouterTest from './routerTest';

let routers = [
    RouterTest
];

let middleware = [];
routers.forEach((router) => {
  middleware.push(router.routes())
  middleware.push(router.allowedMethods())
});

export default compose(middleware);