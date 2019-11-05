import React from "react";
import { Avatar, Chip } from "@material-ui/core";
import {
  Tabs,
  Section,
  SectionContainer,
  ChipContainer,
  PageTitle,
  GeneIcon,
} from "ui";

const tabs = [
  {
    id: "classic-associations",
    label: "Associations (classic)",
    node: <div>Tab 1 Content</div>,
  },
  {
    id: "dynamic-associations",
    label: "Associations (dynamic)",
    node: <div>Tab 2 Content</div>,
  },
  {
    id: "profile",
    label: "Profile",
    node: (
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
    ),
  },
];

const symbol = "PCSK9";
const name = "proprotein convertase subtilisin/kexin type 9";
const GenePage: React.FC = () => (
  <React.Fragment>
    <PageTitle
      title={symbol}
      subtitle={name}
      avatar={
        <Avatar>
          <GeneIcon />
        </Avatar>
      }
    />
    <Tabs defaultTabId="classic-associations" tabs={tabs} />
  </React.Fragment>
);

export default GenePage;
