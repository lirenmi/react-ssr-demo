import Koa from 'koa';
import views from 'koa-views';
import nunjucks from 'nunjucks';
import serve from 'koa-static-server';
import path, {join} from 'path';

import pageRoutes from './pages';

const app = new Koa();
const port = 3000;

const appRoot = '/pce-content';
const staticDir = path.join(appRoot, 'static');

function main() {
  const templatesPath = join(__dirname, 'templates');

  app.use(
    views(templatesPath, {
      options: {
        nunjucksEnv: new nunjucks.Environment(
          new nunjucks.FileSystemLoader(templatesPath)
        ),
      },
      map: {njk: 'nunjucks'},
      extension: 'njk',
    })
  );

  app.use(
    serve({
      rootDir: path.resolve(process.env.PWD || '', 'static'),
      rootPath: staticDir,
    })
  );

  app.use((ctx, next) => {
    ctx.state.staticDir = staticDir;
    return next();
  });

  app.use(pageRoutes);

  app.listen(port);
  console.info(`App listening on port: ${port}`);
}

main();
