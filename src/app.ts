import express from 'express';
const app = express();

import { makeExecutableSchema } from 'graphql-tools';
import { graphqlHTTP } from 'express-graphql';
import { readFileSync } from 'fs';
import { join } from 'path';
import resolvers from './gql/resolvers';
const cors = require('cors');

// Define graphql
const typeDefs = readFileSync(
    join(__dirname, 'gql', 'schema.graphql'),
    'utf8'
);

const schema = makeExecutableSchema({ typeDefs, resolvers });

// Settings
app.set('port', 3001);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
//app.use('/api/employees', employeesRouters);

app.use('/api', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}));

// Starting server
app.listen(app.get('port'), () => {
    console.log(`Server running... url ==> http://localhost:${app.get('port')}`);
});