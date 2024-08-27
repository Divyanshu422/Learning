import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values_Object) => {};
// * Validation Schema for yup for all the fields:
const validationSchema = yup.object({
  name: yup.string().required("Name is required!"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  channel: yup.string().required("Channel name is required"),
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
          <input
            type="text"
            id="name"
            name="name"
            {...useFormikObject.getFieldProps("name")}
          />
          {useFormikObject.touched.name && useFormikObject.errors.name && (
            <p className="error">{useFormikObject.errors.name}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            {...useFormikObject.getFieldProps("email")}
          />
          {useFormikObject.touched.email && useFormikObject.errors.email ? (
            <p className="error">{useFormikObject.errors.email}</p>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            {...useFormikObject.getFieldProps("channel")}
          />
          {
            useFormikObject.touched.channel &&
              useFormikObject.errors.channel && (
                <p className="error">{useFormikObject.errors.channel}</p>
              ) // error message for channel field if it's not provided or empty.  else null  for no error message.
          }
        </div>

        <button type="submit"> Submit </button>
      </Form>
    </Formik>
  );
}

export default NewYoutubeForm;
