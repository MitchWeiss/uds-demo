import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGlobeAsia,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import Avatar from "../avatar/avatar";

const Wrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid lightgrey;
  border-left: 5px solid ${props =>
    props.status === "posted" ? "green" : "grey"}
  width: 350px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const Title = styled.span`
  font-size: 17px;
  font-weight: 300;
  margin-bottom: 5px;
`;

const Price = styled.span`
  font-size: 24px;
  font-weight: 500;
`;

const Status = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: ${props => (props.status === "posted" ? "green" : "grey")};
  display: flex;
  margin-top: 0px;
  flex-basis: 100%;
  justify-content: center;
  flex-direction: column;
  text-transform: uppercase;
`;

const PropertyWrapper = styled.div`
  font-size: 12px;
  font-weight: 500;
`;

const Property = ({ icon, label }) => (
  <PropertyWrapper>
    <FontAwesomeIcon icon={icon} color="lightgrey" fixedWidth />
    <span>{label}</span>
  </PropertyWrapper>
);

const Left = styled.div`
  display: flex;
  flex-basis: 70%;
  flex-direction: column;
`;

const Right = styled.div`
  display: flex;
  flex-basis: 30%;
  flex-direction: column;
  align-items: flex-end;
`;

const TaskFeedItem = ({
  title,
  location,
  remote,
  price,
  avatarUrl,
  status,
  date
}) => (
  <Wrapper status={status}>
    <Left>
      <Title>{title}</Title>
      {remote ? (
        <Property icon={faGlobeAsia} label="Remote" />
      ) : (
        <Property icon={faMapMarkerAlt} label={location} />
      )}

      <Property icon={faUser} label={date} />
    </Left>
    <Right>
      <Price>${price}</Price>
      <Avatar size={2} imgSrc={avatarUrl} />
    </Right>
    <Status status={status}>{status}</Status>
  </Wrapper>
);

TaskFeedItem.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  remote: PropTypes.bool,
  price: PropTypes.string,
  avatarUrl: PropTypes.string,
  status: PropTypes.string,
  date: PropTypes.string
};

TaskFeedItem.defaultProps = {
  title: "",
  location: "",
  remote: false,
  price: "",
  avatarUrl: "",
  status: "",
  date: ""
};

export default TaskFeedItem;
