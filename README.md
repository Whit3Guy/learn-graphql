# GraphQL API Documentation

## Overview

This API is built using Apollo Server and TypeGraphQL. It includes basic functionality for managing users and appointments. The API supports queries and mutations to interact with the data.

## Project Structure

- `src/server.ts`: Entry point for the GraphQL server.
- `src/resolvers/appointments.resolver.ts`: Resolver for appointment-related queries and mutations.
- `src/dtos/models/user-model.ts`: GraphQL object type for User.
- `src/dtos/models/appointment-model.ts`: GraphQL object type for Appointment.
- `src/dtos/inputs/create-appointment-input.ts`: GraphQL input type for creating an appointment.
- `simple-server.ts`: A simple example server with basic user management.

## Type Definitions

### User Type

```graphql
type User {
    id: String!
    name: String!
}
```

### Appointment Type

```graphql
type Appointment {
    createdAt: Date!
    updatedAt: Date!
}
```

### Query Type

```graphql
type Query {
    getAllUsers: [User]!
    getAppointments: [Appointment]!
    helloworld: String!
}
```

### Mutation Type

```graphql
type Mutation {
    createUser(name: String!): String!
    createAppointment(data: CreateAppointmentInput!): Appointment!
}
```

### Input Type

```graphql
input CreateAppointmentInput {
    clientId: String!
    startsAt: Date!
    endsAt: Date!
}
```

## Resolvers

### User Resolver

- **getAllUsers**: Returns a list of all users.
- **createUser**: Creates a new user with the provided name.

### Appointment Resolver

- **getAppointments**: Returns a list of all appointments.
- **helloworld**: Returns a simple "hello world" string.
- **createAppointment**: Creates a new appointment with the provided data.
- **user**: Field resolver for the `user` field in the `Appointment` type.

## Example Usage

### Query: Get All Users

```graphql
query {
    getAllUsers {
        id
        name
    }
}
```

### Mutation: Create User

```graphql
mutation {
    createUser(name: "John Doe") {
        id
        name
    }
}
```

### Query: Get Appointments

```graphql
query {
    getAppointments {
        createdAt
        updatedAt
    }
}
```

### Mutation: Create Appointment

```graphql
mutation {
    createAppointment(data: {
        clientId: "123",
        startsAt: "2023-10-01T10:00:00Z",
        endsAt: "2023-10-01T11:00:00Z"
    }) {
        createdAt
        updatedAt
    }
}
```

## Running the Server

To run the server, use the following command:

```bash
npm run dev
```

This will start the server and make the GraphQL API available at the specified URL.

## Conclusion

This documentation provides a basic overview of the GraphQL API. Use this as a template for creating and documenting similar APIs in the future.