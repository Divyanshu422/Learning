import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import TextError from "./TextError";

// Initial form values
const initialValues = {
  name: "",
  email: "",
  channel: "",
  comment: "",
  address: "",
  social: {
    facebook: "",
    instagram: "",
  },
  phoneNumber: ["", ""],
};

// On submit function
const onSubmit = (values_Object) => {
  console.log(values_Object);
};

// Validation schema
const validationSchema = yup.object({
  name: yup.string().required("Name is required!"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  channel: yup.string().required("Channel name is required"),
  comment: yup.string().required("Enter comment please"),
  social: yup.object({
    facebook: yup.string().required("Facebook profile is required"),
    instagram: yup.string().required("Instagram profile is required"),
  }),
  phoneNumber: yup
    .array()
    .of(yup.string().required())
    .length(2, "Must have exactly 2 phone numbers"),
});

// Form component
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
          <ErrorMessage name="name" component="div" className="error" />
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
          <label htmlFor="comment">Comments</label>
          <Field
            as="textarea"
            id="comment"
            name="comment"
            placeholder="Any Comments"
          />
          <ErrorMessage name="comment">
            {(msg) => (
              <div>
                <p className="error">{msg}</p>
              </div>
            )}
          </ErrorMessage>
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address">
            {({ meta, field }) => (
              <div>
                <input type="text" id="address" {...field} />
                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
              </div>
            )}
          </Field>
        </div>

        <div className="form-control">
          <label htmlFor="facebook">Facebook Profile</label>
          <Field type="text" id="facebook" name="social.facebook" />
          <ErrorMessage
            name="social.facebook"
            component="div"
            className="error"
          />
        </div>

        <div className="form-control">
          <label htmlFor="instagram">Instagram Profile</label>
          <Field type="text" id="instagram" name="social.instagram" />
          <ErrorMessage
            name="social.instagram"
            component="div"
            className="error"
          />
        </div>

        <div className="form-control">
          <label htmlFor="primaryPh">Primary Phone Number</label>
          <Field type="text" id="primaryPh" name="phoneNumber[0]" />
          <ErrorMessage
            name="phoneNumber[0]"
            component="div"
            className="error"
          />
        </div>

        <div className="form-control">
          <label htmlFor="secondaryPh">Secondary Phone Number</label>
          <Field type="text" id="secondaryPh" name="phoneNumber[1]" />
          <ErrorMessage
            name="phoneNumber[1]"
            component="div"
            className="error"
          />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default NewYoutubeForm;
