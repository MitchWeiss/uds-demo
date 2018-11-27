import React from "react";
import styled from "styled-components";
import { observer, inject } from "mobx-react";

const AmountWrapper = styled.span`
  font-size: 20px;
  padding-right: 20px;
`;

// I'd just put a Task object as prop here for testability and readability.
// The beauty of mobx is that it will/can take care of the minimum renders for you
// base on what you need in render().
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
