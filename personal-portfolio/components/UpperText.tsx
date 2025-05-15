import React from 'react'

interface MarqueeProps {
  items: string[]   
  speed?: number   
}

const Marquee: React.FC<MarqueeProps> = ({
  items,
  speed = 10,
}) => {
  const animStyle = { animationDuration: `${speed}s` }

  const content = items.map((txt, i) => (
    <span key={i} className="mx-8 inline-block">
      {txt}
    </span>
  ))

  return (
    <div className="marquee h-[20cm] bg-gray-900">
      <div className="marquee__group" style={animStyle}>
        {content}
      </div>
      <div className="marquee__group" style={animStyle} aria-hidden={true}>
        {content}
      </div>
    </div>
  )
}

export default Marquee
