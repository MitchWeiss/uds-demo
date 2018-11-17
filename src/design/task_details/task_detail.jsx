import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TaskDetailWrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;  
  display: flex;
`;

const DetailTitle = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  color: grey;
`;

const DetailLabel = styled.span``;

const Left = styled.div`
  display: flex;
  flex-basis: 30%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  flex-basis: 700%;
  flex-direction: column;
`;

const TaskDetail = ({title, label, icon}) => (
  <TaskDetailWrapper>
    <Left>{icon}</Left>
    <Right>
      <DetailTitle>{title}</DetailTitle>
      <DetailLabel>{label}</DetailLabel>
    </Right>
  </TaskDetailWrapper>
);

TaskDetail.PropTypes = {
  icon: PropTypes.element,
  title: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
};

TaskDetail.defaultProps = {
  icon: null,
};

export default TaskDetail;
