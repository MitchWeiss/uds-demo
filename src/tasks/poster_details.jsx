import React from "react";
import { connect } from "react-redux";
import Avatar from "../design/avatar/avatar";
import TaskDetail from "../design/task_detail/task_detail";

const PosterDetails = ({ poster }) => {
  if (poster) {
    return (
      <TaskDetail
        icon={<Avatar size={2} imgSrc={poster.avatar.medium.url} />}
        title="Poster"
      >{poster.abbreviated_name}</TaskDetail>
    );
  }
  return null;
};

const mapStateToProps = state => ({
  poster: state.profiles.profiles.find(
    profile => profile.id === state.task.sender_id
  )
});

export default connect(mapStateToProps)(PosterDetails);
