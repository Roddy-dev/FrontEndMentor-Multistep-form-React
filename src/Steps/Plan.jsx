import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../state";
import { Button, Form, Input, RenderCost, Switch } from "../Forms";

export const Plan = () => {
  const [state, setState] = useAppState();
  if (state.yearBillingCycle == undefined) {
    state.yearBillingCycle = false;
  }
  // so it turns out, on 1st render plan and billing are not on state until savedata is
  // performed. You can set default values in hook form, but it doesn't help cost render function
  // This is where react hook form watch comes in watching for changes in field values.
  const { handleSubmit, register, watch } = useForm({
    defaultValues: {
      plan: "arcade",
      yearBillingCycle: false,
    },
    values: {
      plan: state.plan,
      yearBillingCycle: state.yearBillingCycle,
    },
  });
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    console.log("state", state);
    console.log("statedata", data);
    navigate("/addons");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)} className="">
      <div className="plan-form flow-content">
        <h2>Select Your plan</h2>
        <p>You have the option of monthly or yearly billing</p>
        <div className="plans">
          <div className="plan">
            <label htmlFor="arcade" className="plan-label">
              <img
                src="./assets/images/icon-arcade.svg"
                alt=""
                className="plan-label__image"
              />

              <div>
                <p className="plan-label__text">Arcade</p>
                <Input
                  {...register("plan", { required: true })}
                  type="radio"
                  value="arcade"
                  id="arcade"
                />
                <RenderCost
                  plan="arcade"
                  yearBillingCycle={watch("yearBillingCycle")}
                />
              </div>
              <div className="hide-on-mobile">
                {watch("yearBillingCycle") == true ? (
                  "2 Months free"
                ) : (
                  <>&nbsp;</>
                )}
              </div>
            </label>
          </div>
          <div className="plan">
            <label htmlFor="advanced" className="plan-label">
              <img
                src="./assets/images/icon-advanced.svg"
                alt=""
                className="plan-label__image"
              />
              <div>
                <p className="plan-label__text">Advanced</p>

                <Input
                  {...register("plan", { required: true })}
                  type="radio"
                  value="advanced"
                  id="advanced"
                />
                <RenderCost
                  plan="advanced"
                  yearBillingCycle={watch("yearBillingCycle")}
                />
              </div>
              <div className="hide-on-mobile">
                {watch("yearBillingCycle") == true ? (
                  "2 Months free"
                ) : (
                  <>&nbsp;</>
                )}
              </div>
            </label>
          </div>
          <div className="plan">
            <label htmlFor="pro" className="plan-label">
              <img
                src="./assets/images/icon-pro.svg"
                alt=""
                className="plan-label__image"
              />
              <div>
                <p className="plan-label__text">Pro</p>
                <Input
                  {...register("plan", { required: true })}
                  type="radio"
                  value="pro"
                  id="pro"
                />

                <RenderCost
                  plan="pro"
                  yearBillingCycle={watch("yearBillingCycle")}
                />
              </div>
              <div className="hide-on-mobile">
                {watch("yearBillingCycle") == true ? (
                  "2 Months free"
                ) : (
                  <>&nbsp;</>
                )}
              </div>
            </label>
          </div>
        </div>

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
      </div>
    </Form>
  );
};
