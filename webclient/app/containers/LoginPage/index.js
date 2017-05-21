/*
 *
 * LoginPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import AppWrapper from 'components/AppWrapper';
import makeSelectLoginPage from './selectors';
// import messages from './messages';


const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginFormContainer = styled.div`
  margin-top: 20px;
`;

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppWrapper
        title="Login"
        meta={[
          { name: 'description', content: 'Description of LoginPage' },
        ]}
      >
        <ContentWrapper>
          <h1>Sign In</h1>
          <Link to="/register">Need an account?</Link>
          <LoginFormContainer className="col-xs-12 col-sm-6">
            <form>
              <FormGroup bsSize="large">
                <FormControl type="text" placeholder="Username" />
              </FormGroup>

              <FormGroup bsSize="large">
                <FormControl type="password" placeholder="Password" />
              </FormGroup>

              <FormGroup bsSize="large">
                <Button className="pull-right" bsSize="large" bsStyle="success">Sign In</Button>
              </FormGroup>
            </form>
          </LoginFormContainer>
        </ContentWrapper>
      </AppWrapper>
    );
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  LoginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
