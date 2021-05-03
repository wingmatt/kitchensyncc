import styles from '../../styles/components/FloatingButton.module.css'

export default function FloatingButton (props) {
   return (
    <button className={styles[props.action]} title={props.label} >
      {props.icon}{props.label}
    </button>
  )
}