/**
*
* ArticleList
*
*/

import React from 'react';
import styled from 'styled-components';
import Card from '../Card';

const CardWrapper = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
`;
const renderArticle = () => (
  <CardWrapper>
    <Card></Card>
  </CardWrapper>
);

function ArticleList(props) {
  const { articles = [] } = props;
  return (
    <div>
      { articles.map(renderArticle) }
    </div>
  );
}

ArticleList.defaultProps = {
  articles: [],
};

ArticleList.propTypes = {
  articles: React.PropTypes.array,
};

export default ArticleList;
