import {DefaultState, Context} from 'koa';
import Router from 'koa-router';
import compose from 'koa-compose';

const router = new Router<DefaultState, Context>({
  prefix: '/pce-content/education',
});

router.get('/branding', async (ctx, next) => {
  await ctx.render('branding', {content: '<h2>server content</h2>'});
  await next();
});

router.get('/connections', async (ctx, next) => {
  await ctx.render('connections');
  await next();
});

export default compose([router.routes(), router.allowedMethods()]);
