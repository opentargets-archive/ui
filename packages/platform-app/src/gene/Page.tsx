import React from "react";
import { Avatar, Chip } from "@material-ui/core";
import { Section, SectionContainer, ChipContainer } from "ui";

const GenePage: React.FC = () => (
  <SectionContainer>
    <Section
      title="Section 1"
      subtitle="Some subtitle text"
      avatar={<Avatar>S1</Avatar>}
    >
      <ChipContainer>
        <Chip label="NR3A1" />
        <Chip label="Era" />
        <Chip label="ER-alpha" />
        <Chip label="estrogen receptor alpha" />
        <Chip label="oestrogen receptor alpha" />
        <Chip label="Estrogen receptor" />
        <Chip label="Estradiol receptor" />
      </ChipContainer>
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
