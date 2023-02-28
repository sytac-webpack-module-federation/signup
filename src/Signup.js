import React from 'react';
import Button from 'uicomponents/Button';
import { Link } from 'react-router-dom';

const Signup = ({ children }) => {

  return (
    <>
      <h1>Sign up now</h1>
      <p>
        Here is a basic form you can use to sign up for our service. We will
        never sell your data or spam you.
      </p>
      <Button>Submit</Button>
      <Link to="/">Back to homepage</Link>
    </>
  );
};

export default Signup;