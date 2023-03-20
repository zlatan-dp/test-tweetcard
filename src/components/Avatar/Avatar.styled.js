import styled from 'styled-components';

export const AvatarWrap = styled.div`
  position: relative;

  width: 360px;
  height: 80px;

  margin-bottom: 26px;
`;

export const AvatarBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 50%;
  background-color: rgb(87, 54, 163);
`;

export const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06);
`;
