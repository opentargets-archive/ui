import React from "react";
import { Avatar } from "@material-ui/core";
import { Section, SectionContainer, PageTitle, GeneIcon } from "ui";

import AssociatedStudiesSection from "./sections/associatedStudies/AssociatedStudiesSection";
import ColocalisingStudiesSection from "./sections/colocalisingStudies/ColocalisingStudiesSection";

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
    <SectionContainer>
      <Section
        title="Associated studies"
        subtitle={`Which studies are associated with ${symbol}?`}
        avatar={<Avatar>S1</Avatar>}
      >
        <AssociatedStudiesSection geneId="ENSG00000169174" />
      </Section>
      <Section
        title="Colocalising studies"
        subtitle={`Which studies have evidence of colocalisation with molecular QTLs for ${symbol}?`}
        avatar={<Avatar>S1</Avatar>}
      >
        <ColocalisingStudiesSection geneId="ENSG00000169174" />
      </Section>
    </SectionContainer>
  </React.Fragment>
);

export default GenePage;
