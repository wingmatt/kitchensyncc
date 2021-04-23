import { FiCircle, FiXCircle, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { Ingredient } from '../types'

const statusIcon = (status: Ingredient["status"]) => {
  switch(status) {
    case 'ok':
      return <FiCheckCircle />
      break
    case 'warning':
      return <FiAlertCircle />
      break
    case 'critical':
      return <FiXCircle />
      break
    default:
      return <FiCircle />
  }
}

export default function IngredientStatus (props) {

return (
  <figure className={props.status}>
    {statusIcon(props.status)}
  </figure>
)
  
}