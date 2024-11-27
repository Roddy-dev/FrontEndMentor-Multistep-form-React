import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../state";
import { Button, Form, RenderCost, Section, SectionRow } from "../Forms";

export const Confirm = () => {
  const [state] = useAppState();
  const navigate = useNavigate();

  const { handleSubmit } = useForm({ defaultValues: state });

  const submitData = (data) => {
    console.info(data);
    navigate("/thanks");
    // this is where we could submit to the server
  };

  return (
    <Form onSubmit={handleSubmit(submitData)}>
      <h1 className="mb-4">Confirm</h1>
      <Section title="Personal info" url="/">
        <SectionRow>
          <div>Full name</div>
          <div>{state.name}</div>
        </SectionRow>
        <SectionRow>
          <div>Email</div>
          <div>{state.email}</div>
        </SectionRow>
        <SectionRow>
          <div>Last name</div>
          <div>{state.phoneno}</div>
        </SectionRow>
      </Section>
      <Section title="Plan" url="/plan">
        <SectionRow>
          <div>Plan</div>
          <div>{state.plan}</div>
          <RenderCost />
        </SectionRow>
        <SectionRow>
          <div>Monthly or Yearly payment</div>
          <div>{state.yearBillingCycle ? "yearly" : "monthly"}</div>
        </SectionRow>
      </Section>
      <Section title="Add-ons" url="/addons">
        <SectionRow>
          {/* <div>Add-ons</div> */}
          <div>{state.addons}</div>
        </SectionRow>
      </Section>
      <div className="d-flex justify-content-start">
        <Button>Submit</Button>
      </div>
    </Form>
  );
};
