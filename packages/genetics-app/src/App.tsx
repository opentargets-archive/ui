import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import {
  Page,
  Header,
  Footer,
  SearchInput,
  FontAwesomeLoader,
  theme,
  HeaderMenu,
} from "ui";

import HomePage from "./home/Page";
import GenePage from "./gene/Page";
import DiseasePage from "./disease/Page";

import { headerMenuItems, footerSections } from "./configuration";

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.REACT_APP_GENETICS_API_URL,
  }),
  cache: new InMemoryCache(),
});

const App: React.FC = () => (
  <ApolloProvider client={client}>
    {/* theme can be overridden; see material-ui docs for detail */}
    <ThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline />
      <FontAwesomeLoader>
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
              header={
                <Header
                  platformName="Genetics"
                  search={<SearchInput />}
                  menu={<HeaderMenu items={headerMenuItems} />}
                />
              }
              footer={<Footer sections={footerSections} />}
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
      </FontAwesomeLoader>
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
