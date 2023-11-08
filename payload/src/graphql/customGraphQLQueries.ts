import { default as ImportedGraphQL } from 'graphql'
import { Payload } from 'payload'
import { GetPagesWithLikes } from './queries/GetPagesWithLikes'

export type customGraphQLQueryType = (
  GraphQL: typeof ImportedGraphQL,
  payload: Payload,
) => Record<string, unknown>

export const customGraphQLQueries: customGraphQLQueryType = (GraphQL, payload) => {
  return {
    GetPagesWithLikes: GetPagesWithLikes(GraphQL, payload),
  }
}
