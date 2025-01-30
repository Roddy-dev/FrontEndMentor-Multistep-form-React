import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../state";
import { Button, Field, Form, Input } from "../Forms";

export const Contact = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  // console.log(useForm); //this will show available methods that we can destructure and use locally above
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/plan");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)} className="flow-content">
      <h2>Personal Info</h2>
      <p>Please provide your name, email address and phone number</p>
      {/* field component was with react hook form, great for error functionality although found ut less useful
       when rendering cost labels later */}
      <Field label="Name" error={errors?.name}>
        <Input
          {...register("name", { required: " name is required" })}
          id="name"
          style={errors?.name && { border: "2px solid red" }}
        />
      </Field>

      <Field label="Email" error={errors?.email}>
        <Input
          {...register("email", { required: "Email is required" })}
          type="email"
          id="email"
          style={errors?.email && { border: "2px solid red" }}
        />
      </Field>
      <Field label="Phone Number" error={errors?.phoneno}>
        <Input
          {...register("phoneno", { required: "phone number is required" })}
          id="phoneno"
          style={errors?.phoneno && { border: "2px solid red" }}
        />
      </Field>
      <div className="button-row">
        <Button>Next</Button>
      </div>
    </Form>
  );
};
