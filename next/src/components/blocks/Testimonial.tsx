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
  return (
    <blockquote className="border-white border-solid border-l-[1px] pl-6 p-2 mx-auto max-w-[30rem]">
      <p className="text-4xl">{data.quote}</p>

      {data.author && <p className="mt-2">— {data.author}</p>}
    </blockquote>
  )
}

export default Testimonial
