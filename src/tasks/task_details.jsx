import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Location from "./location";
import DueDate from "./due_date";
import PosterDetails from "./poster_details";
import Details from "./details";
import ClaimPanel from "./claim_panel";
import { observer, inject } from "mobx-react";

const TaskTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const DetailWrapper = styled.div`
  padding: 20px 0;
`;

const Instructions = ({ taskId, loading }) => {
  if (!taskId && !loading) {
    return <div>Please select a task from the left</div>;
  }
  return null;
};

const Loading = ({ loading }) => {
  if (loading) {
    return (
      <FontAwesomeIcon
        size="2x"
        icon={faSpinner}
        color="lightgrey"
        fixedWidth
        spin
      />
    );
  }
  return null;
};
const TaskDetails = ({ taskName, taskId, loading }) => (
  <div>
    <Instructions taskId={taskId} loading={loading} />
    {taskName && <TaskTitle>{taskName}</TaskTitle>}
    <Loading loading={loading} />
    <DetailWrapper>
      {/*
        Connecting `PosterDetails` (to stores) makes `TaskDetails`, much harder to test
        in isolation as there are more things to mock/fake.
        How about `<PosterDetails poster={...}`?
      */}
      <PosterDetails />
    </DetailWrapper>
    <DetailWrapper>
      <Location />
    </DetailWrapper>
    <DetailWrapper>
      <DueDate />
    </DetailWrapper>
    <DetailWrapper>
      <Details />
    </DetailWrapper>
    <ClaimPanel />
  </div>
);

export default inject(stores => ({
  taskId: stores.task.task.id,
  taskName: stores.task.task.name,
  loading: stores.task.loading
}))(observer(TaskDetails));
