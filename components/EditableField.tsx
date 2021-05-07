import { useState } from "react";
import styles from "../styles/components/EditableField.module.css";
import InputContainer from "./Input/InputContainer";


const Input = function (props) {
  const [input, setInput] = useState({ value: props.content });
  return (
    <input 
      type={props.type}
      value={input.value}
      onChange={(event) => setInput({ value: event.target.value })}
    />
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
    <>
      {props.editing ? (
        <InputContainer label={props.label} className={styles.inputContainer}>
          <Input content={props.children} type={props.type} />
        </InputContainer>
      ) : (
        <Text content={props.children} label={props.label}/>
      )}
    </>
  );
}
