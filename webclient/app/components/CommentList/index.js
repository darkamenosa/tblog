/**
*
* CommentList
*
*/

import React from 'react';
import styled from 'styled-components';
import Comment from '../Comment';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentWrapper = styled.div`
  padding-bottom: 10px;
`;

const CommentTitle = styled.b`
  padding-bottom: 10px;
`;

const renderComment = () => (
  <CommentWrapper>
    <Comment />
  </CommentWrapper>
);

function CommentList(props) {
  return (
    <Wrapper className="col-xs-12 col-sm-6" {...props}>
      <CommentTitle>Comments</CommentTitle>
      { props.comments.map(renderComment)}
    </Wrapper>
  );
}

CommentList.defaultProps = {
  comments: [],
};

CommentList.propTypes = {
  comments: React.PropTypes.array,
};

export default CommentList;
