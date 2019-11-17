import React from 'react';

import Header from '../../components/header';
import Card from '../../elements/card';

import classes from './app.module.css';
import TaskPanel from '../../components/task-panel';

const App = () => (
  <div className={classes.appWrapper}>
    <Header />
    <main className={classes.appMain}>
      <Card>
        <TaskPanel />
      </Card>
    </main>
  </div>
);

export default App;
