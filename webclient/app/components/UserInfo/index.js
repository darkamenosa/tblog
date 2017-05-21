/**
*
* UserInfo
*
*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import Avatar from '../Avatar';


const Wrapper = styled.div`
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
`;

const Info = styled.div`
  padding-left: 10px;
`;

const Username = styled(Link)`
`;

function UserInfo() {
  return (
    <Wrapper>
      <Avatar />
      <Info>
        <Username to="/profiles/@darkamenosa">
          Darkamenosa
        </Username>
        <div>
          30 mins ago
        </div>
      </Info>
    </Wrapper>
  );
}

UserInfo.propTypes = {

};

export default UserInfo;
