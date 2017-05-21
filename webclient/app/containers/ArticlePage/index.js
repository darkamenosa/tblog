/*
 *
 * ArticlePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectArticlePage from './selectors';
import messages from './messages';

export class ArticlePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="ArticlePage"
          meta={[
            { name: 'description', content: 'Description of ArticlePage' },
          ]}
        />
        <FormattedMessage {...messages.header} />
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
