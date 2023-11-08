import payload from 'payload'
import { format } from 'date-fns'

interface ResolverArgs {}

export const Resolver = async (obj, args: ResolverArgs, { req }, info) => {
  try {
    const pagesWithLikes = await payload.find({
      collection: 'pages',
      where: {
        and: [
          {
            likes: {
              greater_than: 0,
            },
          },
        ],
      },
    })

    return pagesWithLikes
  } catch (error) {
    payload.logger.error(error)
  }
}
