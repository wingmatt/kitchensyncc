import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

export default function IngredientUnitInput(props) {
  return (
    <label>
      <span className="sr-only">{props.label}</span>
      <Combobox>
        <ComboboxInput />
        <ComboboxPopover>
          <ComboboxList>
            <ComboboxOption value="Cup" />
            <ComboboxOption value="Ounce" />
            <ComboboxOption value="Teaspoon" /> 
            <ComboboxOption value="Tablespoon" />
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </label>
  );
}
