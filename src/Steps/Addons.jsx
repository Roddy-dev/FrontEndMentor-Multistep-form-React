import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../state";
import { Button, Form, Input } from "../Forms";
import { RenderAddons } from "../Forms/RenderAddons";

export const Addons = () => {
  const [state, setState] = useAppState();
  const { handleSubmit, register, onChange } = useForm({
    defaultValues: {
      // state,
      // not this way on this occation
    },
    // if state has been updated and we go back to edit form,
    // populate form with relevant checked checkboxes using useForm hook and values prop
    values: {
      hasService: state.hasService,
      hasStorage: state.hasStorage,
      hasProfile: state.hasProfile,
    },
  });

  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/confirm");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)} className="flow-content">
      <h2>Pick Add-ons</h2>
      <p>Add-ons help enhance your gaming experience</p>
      <div className="add-ons">
        <label htmlFor="service" className="add-on-label">
          <div className="add-on-card">
            <Input
              type="checkbox"
              {...register("hasService")}
              value={true}
              id="service"
            />
            <RenderAddons
              servicesAdded="hasService"
              displayTagline={true}
              yearly={state.yearBillingCycle}
            />
          </div>
        </label>
        <label htmlFor="storage" className="add-on-label">
          <div className="add-on-card">
            <Input
              type="checkbox"
              {...register("hasStorage")}
              value={true}
              id="storage"
            />
            <RenderAddons
              servicesAdded="hasStorage"
              displayTagline={true}
              yearly={state.yearBillingCycle}
            />
          </div>
        </label>
        <label htmlFor="profile" className="add-on-label">
          <div className="add-on-card">
            <Input
              type="checkbox"
              {...register("hasProfile")}
              value={true}
              id="profile"
            />
            <RenderAddons
              servicesAdded="hasProfile"
              displayTagline={true}
              yearly={state.yearBillingCycle}
            />
          </div>
        </label>
        <div className="button-row">
          <Link className={`btn btn-prev`} to="/plan">
            Go Back
          </Link>
          <Button>Next</Button>
        </div>
      </div>
    </Form>
  );
};
