import * as React from "react";

type Props = { text: string };

const ExampleComponent: React.FC<Props> = ({ text }) => (
  <div>Example Component: {text}</div>
);

export default ExampleComponent;
