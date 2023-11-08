import { Endpoint } from 'payload/config'

const handler: Endpoint['handler'] = async ({ user, ...req }, res, next) => {
  const payload = req.payload

  const { pageId } = req.body

  /* If you want to access control this function you have access to the user from the request */
  /* if (!user) {
    return res.status(401).end()
  } */

  try {
    const page = await payload.findByID({
      id: pageId,
      collection: 'pages',
    })

    const updatedLikes = await payload.update({
      id: pageId,
      collection: 'pages',
      data: {
        likes: page.likes + 1,
      },
    })

    res.status(200).json({
      likes: updatedLikes.likes,
    })
  } catch (error) {
    payload.logger.error(error)
    res.status(500).end()
  }
}

export default handler
