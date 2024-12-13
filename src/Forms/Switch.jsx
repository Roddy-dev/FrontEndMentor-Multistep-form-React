import { useState } from "react";
import { Field, Input } from "./";
import "./switch.css";

export const Switch = (props) => {
  const { register, fieldName, defaultValues, handleChange, labelA, labelB } =
    props;
  const [isChecked, setIsChecked] = useState(false);
  console.log("default", defaultValues);
  // const [isChecked, setIsChecked] = useState(state.{fieldName});

  // if IsChecked true then labelB can be targetted in css

  return (
    <div className="section-row switch">
      <div className={!isChecked ? "labelA switchChecked" : "labelA"}>
        {labelA}
      </div>
      <Input
        type="checkbox"
        role="switch"
        {...register(fieldName, {
          // could be better
          onChange: () => setIsChecked(!isChecked),
        })}
      ></Input>
      <div className={isChecked ? "labelB switchChecked" : "labelB"}>
        {labelB}
      </div>
    </div>
  );
};
