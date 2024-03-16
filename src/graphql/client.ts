import { GraphQLClient } from 'graphql-request'
import { GetExperiencesQuery } from './generated/graphql'
import { GET_EXPERIENCES } from './queries'

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_HOST || ''

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHQL_TOKEN}`,
    'gcms-locales': 'en-US',
  },
})

export const server = {
  getExperiences: async () => {
    const experiences =
      await client.request<GetExperiencesQuery>(GET_EXPERIENCES)

    return experiences
  },
}

export default client
