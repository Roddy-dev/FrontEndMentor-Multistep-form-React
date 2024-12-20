// Steps/Education.js

import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../state";
import { Button, Field, Form, Input, RenderCost, Switch } from "../Forms";

export const Plan = () => {
  const [state, setState] = useAppState();
  if (state.yearBillingCycle == undefined) {
    state.yearBillingCycle = false;
  }
  // so it turns out, on 1st render plan and billing are not on state until savedata is
  // performed. You can set default values in hook form, but it doesn't help cost render
  // Think this is where react hook form watch comes in.
  const { handleSubmit, register, watch } = useForm({
    //   defaultValues: state,
    // });

    defaultValues: {
      plan: "arcade",
      yearBillingCycle: false,
      // ...state,
    },
    values: {
      plan: state.plan,
      yearBillingCycle: state.yearBillingCycle,
    },
  });
  // console.log("state", state);
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    console.log("state", state);
    navigate("/addons");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)} className="">
      <div className="plan-form flow-content">
        {/* <fieldset> */}
        {/* <legend> */}
        <h2>Select Your plan</h2>
        {/* </legend> */}
        <p>You have the option of monthly or yearly billing</p>
        <div className="plans">
          <div className="plan-card">
            <Field label="Arcade" className="plan">
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
            <RenderCost
              plan="arcade"
              yearBillingCycle={watch("yearBillingCycle")}
            />
          </div>
          <div className="plan-card">
            <Field label="Advanced" className="plan">
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
            <RenderCost
              plan="advanced"
              yearBillingCycle={watch("yearBillingCycle")}
            />
          </div>
          {/* <div className="plan"> */}
          <label id="pro" className="plan">
            Pro
            <img src="/assets/images/icon-pro.svg" alt="" />
            {/* <Field label="Pro" className="plan"> */}
            <Input
              {...register("plan", { required: true })}
              type="radio"
              value="pro"
            />
            {/* </Field> */}
            <RenderCost
              plan="pro"
              yearBillingCycle={watch("yearBillingCycle")}
            />
          </label>
          {/* </div> */}
        </div>

        {/* <Field label="Monthly/Yearly"> */}
        {/* <label htmlFor="yearBillingCycle">Monthly</label>
      <Input
      type="checkbox"
      // value={state.yearBillingCycle}
      // defaultValue={false}
      // onChange=
      // value={state.yearBillingCycle}
      {...register("yearBillingCycle")}
      // defaultChecked
      // {...setValue("yearBillingCycle", true)}
      // {...setValue("yearBillingCycle")}
      />
      <span>Yearly</span> */}
        {/* </Field> */}

        <Switch
          register={register}
          // watch={watch}
          fieldName="yearBillingCycle"
          defaultValues={state.yearBillingCycle}
          labelA="Monthly"
          labelB="Yearly"
        />

        <div className="button-row">
          <Link className={`btn btn-prev`} to="/">
            Go Back
          </Link>
          <Button>Next</Button>
        </div>
        {/* </fieldset> */}
      </div>
    </Form>
  );
};
