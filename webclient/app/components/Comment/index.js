/**
*
* Comment
*
*/

import React from 'react';
import styled from 'styled-components';
import UserInfo from '../UserInfo';

const Wrapper = styled.div`
  background-color: #fff;
  border: 1px solid rgba(0,0,0,.09);
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

const Block = styled.div`
`;

function Comment() {
  return (
    <Wrapper className="col-xs-12 col-sm-6">
      <Block>
        <UserInfo />
      </Block>
      <Block>
        This is a comment
      </Block>
    </Wrapper>
  );
}

Comment.propTypes = {

};

export default Comment;
