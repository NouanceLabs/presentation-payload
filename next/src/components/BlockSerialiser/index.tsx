import type { Home } from '@/types/payload'
import RichText from '@/components/RichText'
import Testimonial from '@/components/blocks/Testimonial'

interface Props {
  blocks: Home['sections']
}

function Serialise({ blocks }: Props) {
  return
}

function BlockSerialiser({ blocks }: Props) {
  if (!blocks) return null
  const className = 'container max-w-[64rem]'
  return (
    <div>
      {blocks?.map((block, index) => {
        switch (block.blockType) {
          case 'textBlock':
            return (
              <div key={block.id} data-blockType={block.blockType} className={`${className}`}>
                <RichText content={block.content} />
              </div>
            )
          case 'testimonialBlock':
            return (
              <div key={block.id} data-blockType={block.blockType} className={`${className}`}>
                <Testimonial data={block} />
              </div>
            )
          default:
            return <></>
        }
      })}
    </div>
  )
}

export default BlockSerialiser
