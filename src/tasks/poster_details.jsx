import React from "react";
import Avatar from "../design/avatar/avatar";
import TaskDetail from "../design/task_detail/task_detail";
import { observer, inject } from "mobx-react";

const PosterDetails = ({ poster }) => {
  if (poster) {
    return (
      <TaskDetail
        icon={<Avatar size={2} imgSrc={poster.avatar.medium.url} />}
        title="Poster"
      >
        {poster.abbreviated_name}
      </TaskDetail>
    );
  }
  return null;
};

// From https://github.com/mobxjs/mobx-react
// N.B. note that in this specific case neither NameDisplayer nor UserNameDisplayer
// needs to be decorated with observer,
// since the observable dereferencing is done in the mapper function
export default inject(stores => ({
  poster: stores.tasks.profiles.find(
    profile => profile.id === stores.task.task.sender_id
  )
}))(observer(PosterDetails));
