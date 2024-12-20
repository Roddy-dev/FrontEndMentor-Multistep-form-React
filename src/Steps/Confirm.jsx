import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../state";
import {
  Button,
  Form,
  RenderCost,
  RenderAddons,
  // Section,
  // SectionRow,
} from "../Forms";

export const Confirm = () => {
  const [state] = useAppState();
  const navigate = useNavigate();

  const { handleSubmit } = useForm({ defaultValues: state });

  const submitData = (data) => {
    // console.info(data);
    navigate("/thanks");
    // this is where we could submit to the server
  };

  // console.log(state);

  console.log("state confirm", state);

  return (
    <Form onSubmit={handleSubmit(submitData)} className="flow-content">
      <h2 className="mb-4">Finishing up</h2>
      <p>Double-check everything looks OK before confirming</p>
      {/* <Section title="Personal info" url="/">
        <SectionRow> */}
      <div>Full name</div>
      <div>{state.name}</div>
      {/* </SectionRow>
        <SectionRow> */}
      <div>Email</div>
      <div>{state.email}</div>
      {/* </SectionRow>
        <SectionRow> */}
      <div>Last name</div>
      <div>{state.phoneno}</div>
      {/* </SectionRow>
      </Section> */}
      {/* <Section title="Plan" url="/plan">
        <SectionRow> */}
      <div>Plan</div>
      <div>
        {state.plan?.charAt(0).toUpperCase() + state.plan?.slice(1)}
        <>&nbsp;</>

        <RenderCost
          plan={state.plan}
          yearBillingCycle={state.yearBillingCycle}
        />
      </div>
      {/* </SectionRow>
        <SectionRow> */}
      <div>Monthly or Yearly payment</div>
      <div>{state.yearBillingCycle ? "yearly" : "monthly"}</div>
      {/* </SectionRow>
      </Section> */}
      {/* <Section title="Add-ons" url="/addons">
        <SectionRow> */}
      {/* <ul>
            {state.servicesAdded.map(
              (item, index) => item && <li key={index}>{item}</li>
            )}
          </ul> */}
      <div>
        {state.hasService ? (
          <RenderAddons
            servicesAdded="hasService"
            yearly={state.yearBillingCycle}
          />
        ) : null}
      </div>
      <div>
        {state.hasStorage ? (
          <RenderAddons
            servicesAdded="hasStorage"
            yearly={state.yearBillingCycle}
          />
        ) : null}
      </div>
      <div>
        {state.hasProfile ? (
          <RenderAddons
            servicesAdded="hasProfile"
            yearly={state.yearBillingCycle}
          />
        ) : null}
      </div>
      {/* </SectionRow>
      </Section> */}

      <div className="button-row">
        <Link className={`btn btn-prev`} to="/addons">
          Go Back
        </Link>
        <Button className={`btn btn-secondary`}>Confirm</Button>
      </div>
    </Form>
  );
};
