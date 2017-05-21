/*
 *
 * RegisterPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import styled from 'styled-components';
import AppWrapper from 'components/AppWrapper';
import makeSelectRegisterPage from './selectors';
// import messages from './messages';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RegisterFormContainer = styled.div`
  margin-top: 20px;
`;


export class RegisterPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppWrapper
        title="Login"
        meta={[
          { name: 'description', content: 'Description of LoginPage' },
        ]}
      >
        <ContentWrapper>
          <h1>Sign Up</h1>
          <Link to="/login">Have an account?</Link>
          <RegisterFormContainer className="col-xs-12 col-sm-6">
            <form>
              <FormGroup bsSize="large">
                <FormControl type="text" placeholder="Username" />
              </FormGroup>

              <FormGroup bsSize="large">
                <FormControl type="text" placeholder="Email" />
              </FormGroup>

              <FormGroup bsSize="large">
                <FormControl type="password" placeholder="Password" />
              </FormGroup>

              <FormGroup bsSize="large">
                <FormControl type="password" placeholder="Repeat Password" />
              </FormGroup>

              <FormGroup bsSize="large">
                <Button className="pull-right" bsSize="large" bsStyle="success">Sign Up</Button>
              </FormGroup>
            </form>
          </RegisterFormContainer>
        </ContentWrapper>
      </AppWrapper>
    );
  }
}

RegisterPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  RegisterPage: makeSelectRegisterPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
