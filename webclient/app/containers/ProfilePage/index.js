/*
 *
 * ProfilePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from 'components/Header';
import Avatar from 'components/Avatar';
import ArticleList from 'components/ArticleList';
import makeSelectProfilePage from './selectors';

const ContentWrapper = styled.div`
  margin-top: -20px;
  background-color: #fff;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px 15px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid rgba(0,0,0,.09)
`;

const UserWrapper = styled.div`
`;

const UserInfo = styled.div`

`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArticleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 15px;
`;

const fakeArticle = [
  {},
  {},
];

export class ProfilePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="row">
        <Helmet
          title="Profile Page"
          meta={[]}
        />
        <Header
          style={{
            backgroundColor: '#fff',
            border: 'none',
          }}
        />
        <div className="row">
          <ContentWrapper>
            <UserWrapper className="col-xs-12 col-sm-6">
              <div className="visible-xs col-xs-12">
                <Center>
                  <Avatar size={80} />
                </Center>
              </div>
              <div className="col-xs-12 col-sm-6">
                <UserInfo>
                  <h2>Darkamenosa</h2>
                  <div>This is user description, this really really really really really Long</div>
                </UserInfo>
              </div>
              <div className="visible-sm visible-md visible-lg col-sm-6">
                <div className="pull-right">
                  <Avatar size={80} />
                </div>
              </div>
            </UserWrapper>
          </ContentWrapper>
        </div>
        <div className="row">
          <ArticleWrapper>
            <div className="col-xs-12 col-sm-6">
              <b>Lasted</b>
              <ArticleList articles={fakeArticle} />
            </div>
          </ArticleWrapper>
        </div>
      </div>
    );
  }
}

ProfilePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ProfilePage: makeSelectProfilePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
