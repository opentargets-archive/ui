import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { Page, Header, Footer } from "ui";

import HomePage from "./home/Page";
import GenePage from "./gene/Page";
import DiseasePage from "./disease/Page";

const App: React.FC = () => (
  <Router>
    <Switch>
      {/* home is special, as no header/footer is shown */}
      <Route exact path="/">
        <Page>
          <HomePage />
        </Page>
      </Route>

      {/* all other pages show header/footer */}
      <Page
        header={<Header platformName="Genetics" />}
        footer={<Footer version="0.0.0" />}
      >
        <Route path="/gene/:ensgId">
          <GenePage />
        </Route>
        <Route path="/disease/:efoId">
          <DiseasePage />
        </Route>
      </Page>
    </Switch>
  </Router>
);

export default App;
