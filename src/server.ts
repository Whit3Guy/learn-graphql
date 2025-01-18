import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { AppointmentResolver } from "./resolvers/appointments.resolver";
import path from 'node:path';

async function main(){
    const schema = await buildSchema({
        resolvers:[
            AppointmentResolver
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql')
    });

    const server = new ApolloServer({
        schema
    })
    
    const {url} = await server.listen()

    console.log(`🚀 server rodando.... ${url}`)
}

main();