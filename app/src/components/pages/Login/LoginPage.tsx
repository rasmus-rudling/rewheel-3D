import React from "react";
import { useFormik } from "formik";
import TextInput from "../../common/form/TextInput";
import auth from "../../../utility/auth";

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <ul className="nav navbar-nav navbar-right">
        <li>
          {auth.isAuthenticated() ? (
            <button
              className="btn btn-danger log"
              onClick={() => auth.logout()}
            >
              Log out{" "}
            </button>
          ) : (
            <button className="btn btn-info log" onClick={() => auth.login()}>
              Log In
            </button>
          )}
        </li>
      </ul>
    </div>
    // <div className="w-full">
    //   <form
    //     onSubmit={formik.handleSubmit}
    //     className="flex w-1/3 max-w-2xl mx-auto flex-col"
    //   >
    //     <TextInput
    //       currentTextValue={formik.values.firstName}
    //       onTextChange={(e) => formik.handleChange(e)}
    //       type="First Name"
    //     />

    //     <button type="submit">Submit</button>
    //   </form>
    // </div>
  );
};

export default LoginPage;
