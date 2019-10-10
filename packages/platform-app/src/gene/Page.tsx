import React from "react";
import { Avatar } from "@material-ui/core";
import { Section, SectionContainer } from "ui";

const GenePage: React.FC = () => (
  <SectionContainer>
    <Section
      title="Section 1"
      subtitle="Some subtitle text"
      avatar={<Avatar>S1</Avatar>}
    >
      Content
    </Section>
    <Section
      title="Section 2"
      subtitle="Some subtitle text"
      avatar={<Avatar>S2</Avatar>}
    >
      Content
    </Section>
    <Section
      title="Section 3"
      subtitle="Some subtitle text"
      avatar={<Avatar>S3</Avatar>}
    >
      Content
    </Section>
  </SectionContainer>
);

export default GenePage;
