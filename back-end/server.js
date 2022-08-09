const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const typeDefs = require('./src/graphql/typedefs');
const resolvers = require('./src/graphql/resolvers');

require('./db/config').connect();

const app = express();

const corsOptions = {
  origin: process.env.REACT_APP_API_URL,
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.use(bodyParser.json({ limit: '4mb' })); // ability to upload data less than 4mb
app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.REACT_APP_API_URL);
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();

  return '';
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {
    return { res, req };
  },
  introspection: true,
  playground: {
    settings: {
      'request.credentials': 'same-origin',
    },
  },
});

app.listen(process.env.PORT);

server.applyMiddleware({ app, cors: corsOptions });

const httpServer = http.createServer(app);

server.installSubscriptionHandlers(httpServer);
