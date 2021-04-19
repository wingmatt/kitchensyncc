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
      <InputActions />
    </form>
  );
};

const Text = function (props) {
  return <span>{props.content}</span>;
};

const InputActions = function () {
  // Save button should update the input's saved value on the backend.
  // Cancel button should revert the input to the saved value.
  // Both buttons should revert the input back to static text mode.
  return (
    <>
      <button onClick={updateInput} title="Save Edit">
        ✔
      </button>
    </>
  );
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
