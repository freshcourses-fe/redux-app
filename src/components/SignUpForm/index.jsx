import React from 'react';
import { Formik, Form, Field } from 'formik';

import styles from './SignUpForm.module.scss';

const initialValues = {
  nickName: '',
  firstName: '',
  lastName: '',
  password: '',
  email: '',
  userRole: 'creator',
};

const SignUpForm = (props) => {
  const submitHandler = (values, utils) => {
    // alert(JSON.stringify(values, null , 2))
  };

  return (
    <Formik initialValues={initialValues} onSubmit={submitHandler}>
      <Form className={styles.form}>
        <Field name="firstName" placeholder="firstName" />
        <Field name="lastName" placeholder="lastName" />
        <Field name="nickName" placeholder="nickName" />
        <Field name="email" placeholder="email" />
        <Field name="password" placeholder="password" />
        <label>
          Buyer
          <Field name="userRole" type="radio" value="buyer" />
        </label>
        <label>
          Creator
          <Field name="userRole" type="radio" value="creator" />
        </label>
        <button type="submit">Sign Up</button>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
