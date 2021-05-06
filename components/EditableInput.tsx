import { useState } from "react";
import styles from "../styles/components/EditableInput.module.css"

const Input = function (props) {
  const [input, setInput] = useState({ value: props.content });
  return (
    <label className={styles.inputContainer}>
    <span className="sr-only">{props.label}</span>
    <input 
      type={props.type}
      value={input.value}
      onChange={(event) => setInput({ value: event.target.value })}
    />
  </label>
  );
};

const Text = function (props) {
  return <>
    <span className="sr-only">{props.label}</span> <span>{props.content}</span>
  </>;
};

const updateInput = (event) => {
  event.preventDefault();
};

export default function EditableInput(props) {
  return (
    <li>
      {props.editing ? (
        <Input content={props.children} type={props.type} label={props.label}/>
      ) : (
        <Text content={props.children} label={props.label}/>
      )}
    </li>
  );
}
