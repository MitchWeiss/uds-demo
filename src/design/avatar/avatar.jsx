import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const AvatarWrapper = styled.div`
  border-radius: 50%;
  border: 1px solid lightgrey;
  overflow: hidden;
  text-align: center;
  height: ${props => props.size}em;
  width: ${props => props.size}em;

  && > * {
    width: 100%;
    height: 100%;
  }
`;

const Avatar = ({ size, imgSrc }) => (
  <AvatarWrapper size={size}>
    {imgSrc ? (
      <img src={imgSrc} alt="avatar" />
    ) : (
      <FontAwesomeIcon icon={faUser} color="lightgrey" />
    )}
  </AvatarWrapper>
);

Avatar.PropTypes = {
  size: PropTypes.number,
  imgSrc: PropTypes.string
};

Avatar.defaultProps = {
  size: 5,
  imgSrc: ""
};

export default Avatar;
