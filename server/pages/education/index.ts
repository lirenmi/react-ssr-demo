import {DefaultState, Context} from 'koa';
import Router from 'koa-router';
import compose from 'koa-compose';
import {branding, connections} from '../../client';

const router = new Router<DefaultState, Context>({
  prefix: '/pce-content/education',
});

router.get('/branding', async (ctx, next) => {
  await ctx.render('branding', {content: branding()});
  await next();
});

router.get('/connections', async (ctx, next) => {
  await ctx.render('connections', {content: connections()});
  await next();
});

export default compose([router.routes(), router.allowedMethods()]);
