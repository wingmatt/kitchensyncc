import { useState } from "react";
import styles from "../styles/components/EditableInput.module.css"

const Input = function (props) {
  const [input, setInput] = useState({ value: props.content });
  return (
    <form className={styles.inputContainer}>
      <input
        type="text"
        value={input.value}
        onChange={(event) => setInput({ value: event.target.value })}
      ></input>{" "}
    </form>
  );
};

const Text = function (props) {
  return <span>{props.content}</span>;
};

const updateInput = (event) => {
  event.preventDefault();
};

export default function EditableInput(props) {
  return (
    <li>
      {props.editing ? (
        <Input content={props.children} />
      ) : (
        <Text content={props.children} />
      )}
    </li>
  );
}
