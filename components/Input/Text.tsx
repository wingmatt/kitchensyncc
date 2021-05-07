import { useState } from "react";

export default function Text(props) {
  const [input, setInput] = useState({ value: props.content });
  return (
    <input
      type="text"
      value={input.value}
      onChange={(event) => setInput({ value: event.target.value })}
    />
  );
}
