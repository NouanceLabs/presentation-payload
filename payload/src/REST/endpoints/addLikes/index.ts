import { Endpoint } from 'payload/config'
import handler from './handler'

const addLikes: Endpoint = {
  path: '/interactions/addLikes',
  method: 'post',
  handler: handler,
}

export default addLikes
