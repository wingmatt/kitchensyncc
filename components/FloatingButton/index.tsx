import styles from '../../styles/components/FloatingButton.module.css'

export default function FloatingButton (props) {
   return (
    <button className={styles[props.action.name]} title={props.label} onClick={props.action}>
      {props.icon}{props.label}
    </button>
  )
}