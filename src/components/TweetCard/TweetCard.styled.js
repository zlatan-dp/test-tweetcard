import styled from 'styled-components';
import PropTypes from 'prop-types';

export const TweetCardWrap = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;

  width: 360px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  overflow: hidden;
`;

export const Logo = styled.img`
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 136px;
`;
export const Bg = styled.img`
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Text = styled.p`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: ${p => p.mb};
`;

export const Button = styled.button`
  display: block;
  width: 196px;
  padding-top: 14px;
  padding-bottom: 14px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.22;
  color: #373737;
  text-transform: uppercase;
  background-color: ${p => (p.bg ? '#5CD3A8' : '#ebd8ff')};
  border: none;
  border-radius: 10.3108px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    background-color: ${p => (p.bg ? '#62ffc6' : '#c296f0')};
  }
`;

Text.propTypes = {
  mb: PropTypes.string,
};

Button.propTypes = {
  bg: PropTypes.bool,
};
