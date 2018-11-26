import React from "react";
import styled from "styled-components";
import { observer, inject } from "mobx-react";

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

export default inject(stores => ({
  taskId: stores.task.task.id,
  amount: stores.task.formattedPrice,
  claimable: stores.task.claimable,
  onClick: stores.task.claimTask,
  attemptingClaim: stores.task.attemptingClaim
}))(observer(ClaimPanel));
