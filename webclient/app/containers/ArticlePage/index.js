/*
 *
 * ArticlePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
// import { Button } from 'react-bootstrap';
import Header from 'components/Header';
import Avatar from 'components/Avatar';
import Img from 'components/Img';
import CommentList from 'components/CommentList';

import makeSelectArticlePage from './selectors';

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

const ArticleWrapper = styled.div`
  padding-left: 30px;
  padding-right: 30px;
`;

const ArticleBlock = styled.div`
  padding-bottom: 10px;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 20px;
`;

const ArticleImg = styled(Img)`
  width: 100%;
  max-height: 269px;
  object-fit: cover;
`;

const CommentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 50px 15px;
  justify-content: center;
  align-items: center;
`;

const fakeComments = [
  {},
  {},
];

export class ArticlePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="row">
        <Helmet
          title="Article page"
          meta={[]}
        />
        <Header />
        <div className="row">
          <ContentWrapper>
            <ArticleWrapper className="col-xs-12 col-sm-8">
              <ArticleBlock>
                <UserWrapper>
                  <Avatar size={60}></Avatar>
                  <UserInfo>
                    <Link>darkamenosa</Link>
                    <div>This is a short description</div>
                  </UserInfo>
                </UserWrapper>
              </ArticleBlock>
              <ArticleBlock>
                <h1>This is article title</h1>
              </ArticleBlock>
              <ArticleBlock>
                <ArticleImg src="https://cdn-images-1.medium.com/max/2000/1*FWoW8RBtFHJxbhF6Hr9xNA.jpeg"></ArticleImg>
              </ArticleBlock>
              <ArticleBlock>
                Further are the principles upon which we are building What’s It Like. There’s nothing to sell and nothing to buy here, when launch the platform will be free for everyone to use.
              </ArticleBlock>
            </ArticleWrapper>
          </ContentWrapper>
        </div>
        <div>
          <CommentWrapper className="col-xs-12 col-sm-6">
            <CommentList comments={fakeComments}>

            </CommentList>
          </CommentWrapper>
        </div>
      </div>
    );
  }
}

ArticlePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ArticlePage: makeSelectArticlePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
