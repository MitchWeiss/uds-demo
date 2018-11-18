import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { claimTask } from "../actions";

const AmountWrapper = styled.span`
  font-size: 20px;
  padding-right: 20px;
`;

const ClaimPanel = ({
  amount,
  claimable,
  onClick,
  taskId,
  attemptingClaim
}) => {
  const label = attemptingClaim
    ? "Claiming..."
    : claimable
    ? "Claim now!"
    : "It's been claimed!";
    
  if (amount) {
    return (
      <div>
        <AmountWrapper>${amount}</AmountWrapper>
        <button disabled={!claimable} onClick={() => onClick(taskId)}>
          {label}
        </button>
      </div>
    );
  }

  return null;
};

const mapStateToProps = state => ({
  taskId: state.task.id,
  amount: state.task.amount / 100,
  claimable: state.task.state === "posted",
  attemptingClaim: !!state.task.attemptingClaim
});

const mapDispatchToProps = dispatch => ({
  onClick: taskId => dispatch(claimTask(taskId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClaimPanel);
