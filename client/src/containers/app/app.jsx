import React from "react";

import Rocket from "../../assets/images/rocket.svg";

import Header from "../../components/header";
import Card from "../../elements/card";

import classes from "./app.module.css";
import TaskList from "../../components/tasklist/tasklist";

const App = () => (
  <div className={classes.appWrapper}>
    <Header />
    <main className={classes.appMain}>
      <Card>
        <TaskList />
      </Card>
    </main>
  </div>
);

export default App;
