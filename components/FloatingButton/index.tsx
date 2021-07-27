import styles from '../../styles/components/FloatingButton.module.css'

export default function FloatingButton (props) {
   return (
    <button  title={props.label} onClick={props.action}>
      {props.icon}{props.label}
    </button>
  )
}