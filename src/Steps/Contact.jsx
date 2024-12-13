import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../state";
import { Button, Field, Form, Input } from "../Forms";

export const Contact = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  // const watchPassword = watch("password");
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/plan");
  };

  return (
    <Form
      onSubmit={handleSubmit(saveData)}
      className="flow-content flow-content--large"
    >
      {/* <fieldset> */}
      {/* <legend> */}
      <h2>Personal Info</h2>
      {/* </legend> */}
      <p>Please provide your name, email address and phone number</p>
      <Field label="Name" error={errors?.name}>
        <Input
          {...register("name", { required: " name is required" })}
          id="name"
          // defaultValues={state.name}
          style={errors?.name && { border: "2px solid red" }}
          // className={errors?.myInput?.message ? styles["error"] : "no-error"}
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
      {/* </fieldset> */}
    </Form>
  );
};
