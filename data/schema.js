import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt
} from 'graphql'

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      counter: {
        type: GraphQLInt,
        resolve: () => 42
      }
    })
  })

  // mutation: ...
})


export default schema
