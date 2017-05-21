/*
 *
 * SearchPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import AppWrapper from 'components/AppWrapper';
import makeSelectSearchPage from './selectors';
import messages from './messages';

export class SearchPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppWrapper>
        <div>
          <Helmet
            title="SearchPage"
            meta={[
              { name: 'description', content: 'Description of SearchPage' },
            ]}
          />
          <FormattedMessage {...messages.header} />
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
