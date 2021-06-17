const Koa = require("koa");

const app = new Koa();
const port = 3000;

function main() {
  app.use((ctx) => {
    ctx.body = "hello world";
  });
  app.listen(port);
  console.info(`App listening on port: ${port}`);
}

main();
