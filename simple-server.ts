import {ApolloServer, gql} from 'apollo-server';
import {randomUUID} from 'node:crypto';

// type definitions and resolvers are required
const typeDefs = gql`
    type User{
        id: String!
        name: String!
    }

    type Query {
        getAllUsers: [User]!
    }
    
    type Mutation {
        createUser(name:String!): String!
    }
    ` 

    interface User{
        id: string;
        name: string
    }
    const users:User[] = []; 
    
    // resolvers são controllers e são responsáveis por resolver as queries
    const server = new ApolloServer({
    // typeDefs são as queries que podem ser feitas
    typeDefs,
    resolvers:{
        // querys são funções que retornam algo
        Query:{
            getAllUsers: () => users
        },
        // mutations são funções que alteram algo
        Mutation: {
            createUser: (parent, args, context) => {
                // parent: resultado da resolver do campo pai
                // args: argumentos passados para a mutation
                // context: objeto compartilhado entre todas as resolvers

                const user:User = {
                    id: String(randomUUID()),
                    name: args.name
                }
                users.push(user)
                return user.name;
            } 
        }
    }
});


// server preparing
server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`)
});