import React from 'react';
import { Field, Form, Formik } from 'formik';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = ({ isLoading, error, loginRequest }) => {
  const submitHandler = (values, utils) => {
    loginRequest(values);
  };

  return (
    <>
      {isLoading && <h2>LOGGING IN</h2>}
      {error && <h2>{error.message}</h2>}
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        <Form>
          <Field name="email" />
          <Field name="password" />
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </>
  );
};

const mStP = (state) => ({
  isLoading: state.user.isLoading,
  error: state.user.error,
});
const mDtP = (dispatch) => ({
  loginRequest: (values) => dispatch(actionCreators.loginRequest(values)),
});

export default connect(mStP, mDtP)(LoginForm);
