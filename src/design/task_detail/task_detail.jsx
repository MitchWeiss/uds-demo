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

const TaskDetail = ({title, children, icon}) => (
  <TaskDetailWrapper>
    <Left>{icon}</Left>
    <Right>
      <DetailTitle>{title}</DetailTitle>
      <DetailLabel>{children}</DetailLabel>
    </Right>
  </TaskDetailWrapper>
);

TaskDetail.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

TaskDetail.defaultProps = {
  icon: null,
  children: null,
};

export default TaskDetail;
