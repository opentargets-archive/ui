import React from "react";
import "./App.css";

import { ExampleComponent, Page } from "ui";

export type Props = { name: string };

const App: React.FC<Props> = ({ name }) => (
  <Page header={<div>Header content!</div>} footer={<div>Footer content!</div>}>
    <ExampleComponent text={`It worked in ${name}!`} />
  </Page>
);

export default App;
