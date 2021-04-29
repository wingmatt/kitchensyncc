import { FiCircle, FiXCircle, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { Ingredient } from '../types'

const statusIcon = (status: Ingredient["status"]) => {
  switch(status) {
    case 'ok':
      return <FiCheckCircle />
    case 'warning':
      return <FiAlertCircle />
    case 'critical':
      return <FiXCircle />
    default:
      return <FiCircle />
  }
}

export default function IngredientStatus (props) {

return (
  <figure className={props.status} title={props.statusLabel} >
    {statusIcon(props.status)}
  </figure>
)
  
}