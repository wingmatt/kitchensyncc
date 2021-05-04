import FloatingButton from './'
import { FiPlus } from 'react-icons/fi'

const addToPantry = () => {
  location.hash = "#add-to-pantry"
}

const PlusSvg = () => {
  return (
    <svg viewBox="0 0 10 10" focusable="false">
      <rect className="vert" height="8" width="1" y="1" x="4.5"/>
      <rect height="1" width="8" y="4.5" x="1" />
    </svg>
  )
}

export default function AddToPantry () {
  return (
    <FloatingButton action={addToPantry} label="Add to Pantry" icon={<FiPlus focusable="false" />} />
  )
}