import React from 'react';
import Router from 'next/router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { registrationUser } from '../actions/userActions';

import Layout from '../components/Layout';
import Registration from '../components/RegistrationPage';

const RegistrationPage = ({ registrationUser, form }) => {
  const submit = e => {
    e.preventDefault();
    registrationUser(form.RegistrationForm.values);
    Router.replace('/');
  };

  return (
    <Layout>
      <Registration handleSubmit={submit} />
    </Layout>
  );
};

const mapStateToProps = store => ({
  form: store.form
});

const mapDispatchToProps = dispatch => ({
  registrationUser: bindActionCreators(registrationUser, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationPage);
