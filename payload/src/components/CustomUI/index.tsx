import React from 'react'

const CustomUI: React.FC = () => {
  const [count, setCount] = React.useState(1)

  return (
    <div>
      <p>Here's a custom component.</p>

      <div>A boring counter example: {count}</div>

      <button
        className="btn btn--style-primary"
        onClick={e => {
          e.preventDefault()
          setCount(count + 1)
        }}
      >
        Increment
      </button>
    </div>
  )
}

export default CustomUI
