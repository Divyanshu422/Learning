import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import TextError from "./TextError";
const initialValues = {
  name: "",
  email: "",
  channel: "",
  comment: "",
  address: "",
};
const onSubmit = (values_Object) => {
  console.log(values_Object);
};
const validationSchema = yup.object({
  name: yup.string().required("Name is required!"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  channel: yup.string().required("Channel name is required"),
  comment: yup.string().required("Enter comment please"),
});
function NewYoutubeForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your name"
          />
          <ErrorMessage name="name" component="div" />
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" className="error" />
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" component={TextError} />
        </div>

        <div className="form-control">
          <label html="comment">Comments</label>
          <Field
            as="textarea"
            id="comment"
            name="comment"
            placeholder="Any Comments"
          />
          <ErrorMessage name="comment">
            {
              /*
               * Implementing the render props pattern:
               * we need to define the arrow function which consume the props where error is defined in children key
               */
              (props) => {
                return (
                  <div>
                    <p className="error">{props}</p>
                  </div>
                );
              }
            }
          </ErrorMessage>
        </div>

        <div className="form-control">
          <label html="address">Address</label>
          <Field name="address">
            {(props) => {
              // Destructuring the props
              const { meta, field, form } = props;
              // To hook the input tag with Formik we need to spread Field prop
              return (
                <div>
                  <input type="text" id="address" {...Field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </Field>
        </div>

        <button type="submit"> Submit </button>
      </Form>
    </Formik>
  );
}
export default NewYoutubeForm;
