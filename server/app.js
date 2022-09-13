import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { mongooseConnect } from './mongoose';
import graphQLSchema from './schema';

const app = express();

mongooseConnect();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphQLSchema,
    graphiql: true,
  })
);

app.listen(4001, () => {
  console.log('Listening on port 4001');
});
