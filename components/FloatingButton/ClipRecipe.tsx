import FloatingButton from './'
import { FiScissors } from 'react-icons/fi'

const clipRecipe = () => {

}

export default function ClipRecipe (props) {
  return (
    <FloatingButton action="clipRecipe" label="Clip Recipe" icon={<FiScissors/>} />
  )
}