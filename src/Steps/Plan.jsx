// Steps/Education.js

import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../state";
import { Button, Field, Form, Input, RenderCost } from "../Forms";

export const Plan = () => {
  const [state, setState] = useAppState();
  const { handleSubmit, register } = useForm({ defaultValues: state });
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/addons");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend>
          <h2>Select Your plan</h2>
        </legend>
        <p>You have the option of monthly or yearly billing</p>
        <Field label="Arcade">
          {/* <Input
            type="radiobutton"
            value="arcade"
            {...register("plan")}
            id="plan-arcade"
            // {defaultValues: true}
          /> */}
          <Input
            {...register("plan", { required: true })}
            type="radio"
            value="arcade"
          />
        </Field>
        <RenderCost />

        <Field label="Advanced">
          {/* <Input
            type="checkbox"
            value="advanced"
            {...register("plan")}
            id="plan-advanced"
          /> */}
          <Input
            {...register("plan", { required: true })}
            type="radio"
            value="advanced"
          />
        </Field>
        <RenderCost />

        <Field label="Pro">
          {/* <Input
            type="checkbox"
            value="pro"
            {...register("plan")}
            id="plan-pro"
          /> */}
          <Input
            {...register("plan", { required: true })}
            type="radio"
            value="pro"
          />
        </Field>
        <RenderCost />

        <Field label="Monthly / Yearly">
          <input
            type="checkbox"
            value="yearly"
            // defaultValue={false}
            {...register("yearBillingCycle")}
          />
        </Field>

        <div className="button-row">
          <Link className={`btn btn-secondary`} to="/">
            {"<"} Previous
          </Link>
          <Button>Next {">"}</Button>
        </div>
      </fieldset>
    </Form>
  );
};
