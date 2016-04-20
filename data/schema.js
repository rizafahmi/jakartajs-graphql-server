import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql'

let counter = 42

let Schema = (db) => {

  let linkType = new GraphQLObjectType({
    name: 'Link',
    fields: () => ({
      _id: { type: GraphQLString },
      title: { type: GraphQLString },
      url: { type: GraphQLString }
    })
  })


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
        },
        links: {
          type: new GraphQLList(linkType),
          resolve: () => db.collection('links').find({}).toArray()
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
  return schema
}


export default Schema
