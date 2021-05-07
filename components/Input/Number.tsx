import { useState } from "react";

export default function Number(props) {
  const [input, setInput] = useState({ value: props.content });
  return (
    <input
      type="number"
      value={input.value}
      onChange={(event) => setInput({ value: event.target.value })}
    />
  );
}
