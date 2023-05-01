import Fastify from "fastify";
import { registerContactRoutes } from "./routes/registerContact";

const app = Fastify();

app.register(registerContactRoutes);

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server is running...')
});