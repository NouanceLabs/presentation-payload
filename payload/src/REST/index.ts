// ./rest/index.ts

import { Endpoint } from 'payload/config'
import addLikes from './endpoints/addLikes'

const rest: Endpoint[] = [addLikes]

export default rest
