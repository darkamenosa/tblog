/**
*
* Card
*
*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import Img from '../Img';
import Avatar from '../Avatar';

const Wrapper = styled.div`
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 15px;
`;

const CardBlock = styled.div`
  padding: 2px 16px;
`;

const CardImg = styled(Img)`
  width: 100%;
  max-height: 169px;
  object-fit: cover;
`;

const Title = styled.h1`
`;

const Description = styled.div`
`;


const UserWrapper = styled.div`
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
`;

const UserInfo = styled.div`
  padding-left: 10px;
`;

const Username = styled(Link)`
`;

const EnagementWrapper = styled.div`
  display: flex;
  padding-top: 10px;
  justify-content: space-between;
`;

const NoColorLink = styled(Link)`
  color: #333;
`;

const Blue = styled.span`
  color: #337ab7;
`;

function Card() {
  return (
    <Wrapper>
      <CardBlock>
        <UserWrapper>
          <Avatar />
          <UserInfo>
            <Username to="/profiles/@darkamenosa">
              Darkamenosa
            </Username>
            <div>
              30 mins ago
            </div>
          </UserInfo>
        </UserWrapper>
      </CardBlock>
      <CardBlock>
        <CardImg src="https://www.w3schools.com/howto/img_avatar.png"></CardImg>
      </CardBlock>
      <CardBlock>
        <NoColorLink to="/articles/slug-1">
          <Title>
            This is title
          </Title>
          <Description>
            This is a short description
          </Description>
        </NoColorLink>
      </CardBlock>
      <CardBlock>
        <EnagementWrapper>
          <Blue><i className="fa fa-heart-o fa-lg" /></Blue>
          <Blue><i className="fa fa-bookmark-o fa-lg"></i></Blue>
        </EnagementWrapper>
      </CardBlock>
    </Wrapper>
  );
}

Card.propTypes = {

};

export default Card;
