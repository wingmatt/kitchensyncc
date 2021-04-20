import { FiXCircle, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const statusIcon = (status: 'ok' | 'warning' | 'critical') => {
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
      return ''
  }
}

export default function IngredientStatus (props) {

return (
  <figure className={props.status}>
    {statusIcon(props.status)}
  </figure>
)
  
}