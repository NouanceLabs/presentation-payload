import { Resolver } from './resolver'
import { default as ImportedGraphQL } from 'graphql'
import { Payload } from 'payload'
import buildPaginatedListType from '../../utilities/buildPaginatedListType'

export const GetPagesWithLikes = (GraphQL: typeof ImportedGraphQL, payload: Payload) => {
  /* const returnType = new GraphQL.GraphQLObjectType({
    name: 'PagesWithLikes',
    fields: payload.collections['pages'].graphQL.paginatedType.getFields(),
  }) */

  return {
    args: {},
    resolve: Resolver,
    type: buildPaginatedListType('PagesWithLikes', payload.collections['pages'].graphQL?.type),
  }
}
