/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import AppWrapper from 'components/AppWrapper';
import styled from 'styled-components';
import messages from './messages';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppWrapper>
        <ContentWrapper>
          <h1>
            <FormattedMessage {...messages.header} />
          </h1>
        </ContentWrapper>
      </AppWrapper>
    );
  }
}
