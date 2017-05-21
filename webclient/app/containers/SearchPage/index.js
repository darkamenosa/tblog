/*
 *
 * SearchPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { FormControl, FormGroup } from 'react-bootstrap';
import AppWrapper from 'components/AppWrapper';
import ArticleList from 'components/ArticleList';
import makeSelectSearchPage from './selectors';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const SearchInput = styled(FormControl)`
  border: 0;
  background-color: rgb(250, 250, 250);
  border-radius: 0;
  box-shadow: none;

  border-bottom: 1px solid rgba(0,0,0,.15);
`;

const fakeArticles = [
  {},
  {},
];

export class SearchPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppWrapper
        title="SearchPage"
        meta={[
          { name: 'description', content: 'Description of SearchPage' },
        ]}
      >
        <div className="row">
          <ContentWrapper>
            <div className="col-xs-12 col-sm-6">
              <form>
                <FormGroup>
                  <SearchInput
                    bsSize="large"
                    type="text"
                    placeholder="Input text to search"
                  />
                </FormGroup>
              </form>
            </div>
          </ContentWrapper>
        </div>
        <div className="row">
          <ContentWrapper>
            <div className="col-xs-12 col-sm-6">
              <b>Search results</b>
              <ArticleList articles={fakeArticles} />
            </div>
          </ContentWrapper>
        </div>
      </AppWrapper>
    );
  }
}

SearchPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  SearchPage: makeSelectSearchPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
