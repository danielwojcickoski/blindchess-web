import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* Pages */
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import ImagesPage from './pages/ImagesPage'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/project" exact component={ProjectPage} />
        <Route path="/images" exact component={ImagesPage} />
        <Route path="/contact" exact component={ContactPage} />

        <Route path="/*" exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}