const {Contact} = require("../model");

const resolvers = {

    Query: {
        fetchContact: async () => {
            return await Contact.find();
        },
    },

    Mutation: {
        createContact: async (root, { contact }) => {
            return await Contact.create({ contact });
        }
    },
};

module.exports = resolvers;