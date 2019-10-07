import React from "react";
import "./App.css";

import { ExampleComponent, Page, Header } from "ui";

export type Props = { name: string };

const App: React.FC<Props> = ({ name }) => (
  <Page
    header={<Header platformName="Genetics" />}
    footer={<div>Footer content!</div>}
  >
    <ExampleComponent text={`It worked in ${name}!`} />
  </Page>
);

export default App;
