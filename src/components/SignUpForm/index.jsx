import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as userActionCreators from './../../actions/userActionCreators';

import styles from './SignUpForm.module.scss';

const initialValues = {
  nickName: '',
  firstName: '',
  lastName: '',
  password: '',
  email: '',
  userRole: 'creator',
};

const SignUpForm = ({createUserRequest}) => {
  const submitHandler = (values, utils) => {
    // alert(JSON.stringify(values, null , 2))
    createUserRequest(values);
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

const mapDispatchToProps = (dispatch) => ({
  createUserRequest: (values) => dispatch(userActionCreators.createUserRequest(values)),
});

export default connect(null, mapDispatchToProps)(SignUpForm);
