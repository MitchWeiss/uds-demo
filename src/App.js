import React from "react";
import styled from "styled-components";
import TaskDetails from "./tasks/task_details"
import TaskList from './tasks/task_list';

const AppWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%
  padding: 50px;
  box-sizing: border-box;
`;

const Left = styled.div`
  order: 1;
  flex: 1;
  flex-basis: auto;
  padding: 0.5rem;
`;

const Right = styled.div`
  order: 1;
  flex: 5;
  padding: 0.5rem;
`;



const App = () => (
  <AppWrapper>
    <Left>
      <TaskList />
    </Left>
    <Right>
      <TaskDetails />
    </Right>
  </AppWrapper>
);

export default App;
