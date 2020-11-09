import { GraphQLSchema } from "graphql";
import { QueryType, MutationType } from "./graphql";

const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});

export default schema;
