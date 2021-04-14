import { useState } from 'react'

export default function CollapsiblePanel (props) {
  const [expanded, setExpanded] = useState(false)
  
  return (
    <>
      <h2 onClick={() => setExpanded(!expanded)}>
        <button aria-expanded={expanded}>{props.title}</button>
        <svg viewBox="0 0 10 10" focusable="false">
          <rect className="vert" height="8" width="2" y="1" x="4"/>
          <rect height="2" width="8" y="4" x="1" />
        </svg>
      </h2>
      <div hidden={expanded ? false : true}>
        {props.children}
      </div>
    </>
  )
}