// Steps/About.js

import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../state";
import { Button, Field, Form } from "../Forms";

export const Addons = () => {
  const [state, setState] = useAppState();
  const { handleSubmit, register } = useForm({ defaultValues: state });
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/confirm");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend>
          <h2>Pick Add-ons</h2>
        </legend>
        <p>Add-ons help enhance your gaming experience</p>
        <Field label="Online Services">
          <input
            type="checkbox"
            {...register("addonService")}
            id="addService"
            className="form-control"
          />
        </Field>
        <Field label="Larger Storage">
          <input
            type="checkbox"
            {...register("addonStorage")}
            id="addStorage"
            className="form-control"
          />
        </Field>
        <Field label="CustomizableProfile">
          <input
            type="checkbox"
            {...register("addonService")}
            id="addCustomProfile"
            className="form-control"
          />
        </Field>
        <div className="button-row">
          <Link className={`btn btn-secondary`} to="/education">
            {"<"} Previous
          </Link>
          <Button>Next {">"}</Button>
        </div>
      </fieldset>
    </Form>
  );
};
