import React from 'react';
import { useFormik } from 'formik';

export default function RequestForm({ formRef }) {

  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Oops! Please check your email';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form ref={formRef} className="request-form" onSubmit={formik.handleSubmit}>
       <label className="sr-only" htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         className="request-form__email"
         onChange={formik.handleChange}
         value={formik.values.email}
         placeholder="Email address"
       />
       {formik.errors.email ? <p className="t-error error-msg">{formik.errors.email}</p> : null}
       <button className="btn btn--request" type="submit">Request Access</button>
     </form>
  )
}
