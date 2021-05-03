import FloatingButton from './'
import { FiScissors } from 'react-icons/fi'

const clipRecipe = () => {
  location.hash = "#recipe-search"
}

export default function ClipRecipe () {
  return (
    <FloatingButton action="clipRecipe" label="Clip Recipe" icon={<FiScissors focusable="false"/>} onClick={clipRecipe()}/>
  )
}