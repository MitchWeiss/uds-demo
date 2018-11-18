import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { fetchTasks, fetchTask } from "../actions";
import TaskFeedItem from "../design/task_feed_item/task_feed_item";

const TaskFeedItemWrapper = styled.div`
  cursor: pointer;
`;

class TaskList extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  handleTaskClick = task => {
    this.props.fetchTask(task);
  };

  render() {
    const { loading, tasks, locations, profiles } = this.props;
    if (loading) {
      return <FontAwesomeIcon size="2x" icon={faSpinner} color="lightgrey" fixedWidth spin />;
    }
    return tasks.map(task => (
      <TaskFeedItemWrapper
        key={task.id}
        onClick={() => this.handleTaskClick(task)}
      >
        <TaskFeedItem
          title={task.name}
          remote={task.online_or_phone}
          price={(task.amount / 100).toString()}
          status={task.state}
          location={
            task.location_ids &&
            locations.find(location => location.id === task.location_ids[0])
              .display_name
          }
          date={new Date(task.deadline).toLocaleDateString("en-AU")}
          avatarUrl={profiles.find(profile => profile.id === task.sender_id).avatar.medium.url}
        />
      </TaskFeedItemWrapper>
    ));
  }
}

const mapStateToProps = state => ({
  loading: state.tasks.loading,
  tasks: state.tasks.tasks,
  locations: state.locations.locations,
  profiles: state.profiles.profiles
});
const mapDispatchToProps = dispatch => ({
  fetchTasks: () => dispatch(fetchTasks()),
  fetchTask: task => dispatch(fetchTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);