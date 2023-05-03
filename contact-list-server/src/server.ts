import Fastify from "fastify";
import cors from '@fastify/cors';
import { contactRoutes } from "./routes/contact";

const app = Fastify();

app.register(cors);
app.register(contactRoutes);

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server is running...')
});