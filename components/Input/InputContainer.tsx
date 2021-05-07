export default function InputContainer (props) {
  return (
    <label>
      <span className="sr-only">{props.label}</span>
      {props.children}
    </label>
  )
}