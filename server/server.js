const express = require("express");
const {ApolloServer} = require("apollo-server-express");

const { typeDefs, resolvers } = require("./schemas/index");

const db = require("./config/connection");

const server = new ApolloServer ({
    typeDefs,
    resolvers,
});

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const startServer = async () => {
    await server.start();
    server.applyMiddleware({ app });
    db.once('open', () => {
        app.listen(PORT, () => {
          console.log(`🌍 Now listening on localhost:${PORT}`);
          console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        });
    });
};

startServer();