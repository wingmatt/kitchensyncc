import {useState} from 'react'
const Input = function (props) {
  const [input, setInput] = useState({value: props.content})
 return (
  <input type="text" value={input.value} onChange={(event) =>
    setInput({value: event.target.value })
  }></input>
 )
}

const Text = function (props) {
 return (
   <span>{props.content}</span>
 )
}

export default function EditableInput (props) {
  return (
    <li>
      {props.editing ? <Input content={props.children} /> : <Text content={props.children}/> }
    </li>
  )
}