import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} from 'graphql'

let counter = 42

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      counter: {
        type: GraphQLInt,
        description: "An integer counter",
        resolve: () => counter
      },
      message: {
        type: GraphQLString,
        description: "Say hello to GraphQL server",
        resolve: () => "Hello, GraphQL!"
      }
    })
  }),

  mutation: new GraphQLObjectType({
    name: 'Mutasi',
    fields: () => ({
      incrementCounter: {
        type: GraphQLInt,
        resolve: () => ++counter

      }
    })
  })
})


export default schema
