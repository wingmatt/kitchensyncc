import { useState } from 'react'
import IngredientStatus from './IngredientStatus'

export default function CollapsiblePanel (props) {
  const [expanded, setExpanded] = useState(false)
  
  return (
    <div className="collapsible-panel">
      <h2 onClick={() => setExpanded(!expanded)}>
        <button aria-expanded={expanded}><IngredientStatus status={props.status}/><span>{props.title}</span><svg viewBox="0 0 10 10" focusable="false">
          <rect className="vert" height="8" width="1" y="1" x="4.5"/>
          <rect height="1" width="8" y="4.5" x="1" />
        </svg></button>
        
      </h2>
      <div hidden={expanded ? false : true}>
        {props.children}
      </div>
    </div>
  )
}