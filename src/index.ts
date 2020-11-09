import Koa from "koa";
import cors from "@koa/cors";
import Router from "@koa/router";
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";
import helmet from "koa-helmet";
import graphqlHTTP from "koa-graphql";

import schema from "./schema";

const app = new Koa();
const router = new Router();

const graphqlServer = graphqlHTTP({ schema, graphiql: true });
router.all("/graphql", bodyParser(), graphqlServer);

app.listen(5000);
app.use(graphqlServer);
app.use(logger());
app.use(cors());
app.use(helmet());
app.use(router.routes()).use(router.allowedMethods());
