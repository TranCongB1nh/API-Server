const router = require("./router/index");
const createServer = require("http").createServer;

const server = createServer((req, res) => {
  router.run(req, res);
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});
