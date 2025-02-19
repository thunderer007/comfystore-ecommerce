import { FormInput, SubmitBtn } from "../components";
import { Link, Form } from "react-router-dom";

const Register = () => {
  return (
    <section className="h-screen grid place-content-center">
      <Form
        method="POST"
        className="card bg-base-100 w-96 shadow-xl p-8 flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type="text" label="username" name="username" />
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>
        <p className="text-center">
          Already a member?
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
