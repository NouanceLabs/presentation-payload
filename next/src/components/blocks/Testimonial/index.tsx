import { Home } from '@/types/payload'

interface Props {
  data: {
    quote?: string | null
    author?: string | null
    id?: string | null
    blockName?: string | null
    blockType: 'testimonialBlock'
  }
}

function Testimonial({ data }: Props) {
  return <div>testimonial: {data.quote} </div>
}

export default Testimonial
