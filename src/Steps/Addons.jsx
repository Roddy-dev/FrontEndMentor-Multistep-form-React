// Steps/About.js

import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../state";
import { Button, Field, Form, Input } from "../Forms";
import { RenderAddons } from "../Forms/RenderAddons";

export const Addons = () => {
  const [state, setState] = useAppState();
  const { handleSubmit, register, onChange } = useForm({
    defaultValues: {
      // state,
      //
    },
    values: {
      hasService: state.hasService,
      hasStorage: state.hasStorage,
      hasProfile: state.hasProfile,
    },
  });

  const navigate = useNavigate();
  console.log("state services", state.servicesAdded);
  console.log("hasService", state.hasService);
  console.log("hasStorage", state.hasStorage);
  console.log("hasProfile", state.hasProfile);

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
        {/* <Field label="Online Services">
          <Input
            type="checkbox"
            {...register("servicesAdded.0")}
            value="Online Services"
          />
        </Field>
        <Field label="Addional Storage">
          <Input
            type="checkbox"
            {...register("servicesAdded.1")}
            value="Addional Storage"
          />
        </Field>
        <Field label="Customizable Profile">
          <Input
            type="checkbox"
            {...register("servicesAdded.2")}
            value="Customizable Profile"
          />
        </Field> */}
        <hr />
        <Field label="Online Services">
          <Input
            type="checkbox"
            {...register("hasService")}
            value={true}
            onChange={onChange}
          />
        </Field>
        <RenderAddons
          servicesAdded="hasService"
          displayTagline={true}
          yearly={state.yearBillingCycle}
        />
        <Field label="Addional Storage">
          <Input type="checkbox" {...register("hasStorage")} value={true} />
        </Field>
        <RenderAddons
          servicesAdded="hasStorage"
          displayTagline={true}
          yearly={state.yearBillingCycle}
        />
        <Field label="Customizable Profile">
          <Input type="checkbox" {...register("hasProfile")} value={true} />
        </Field>
        <RenderAddons
          servicesAdded="hasProfile"
          // displayTagline={true}
          yearly={state.yearBillingCycle}
        />
        <div className="button-row">
          <Link className={`btn btn-secondary`} to="/plan">
            {"<"} Previous
          </Link>
          <Button>Next {">"}</Button>
        </div>
      </fieldset>
    </Form>
  );
};
