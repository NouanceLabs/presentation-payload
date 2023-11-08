import { default as ImportedGraphQL } from 'graphql'
import { Payload } from 'payload'

export type customGraphQLMutationType = (
  GraphQL: typeof ImportedGraphQL,
  payload: Payload,
) => Record<string, unknown>

export const customGraphQLMutations: customGraphQLMutationType = (GraphQL, payload) => {
  return {}
}
