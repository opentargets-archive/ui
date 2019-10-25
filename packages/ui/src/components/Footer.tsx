import * as React from "react";

import FooterSectionContainer from "./FooterSectionContainer";
import FooterSection from "./FooterSection";
import FooterSectionLink, { FooterSectionLinkProps } from "./FooterSectionLink";

type Props = {
  sections: { title: string; items: (FooterSectionLinkProps)[] }[];
};

const Footer: React.FC<Props> = ({ sections }) => (
  <FooterSectionContainer>
    {sections.map((section, i) => (
      <FooterSection key={i} title={section.title}>
        {section.items.map((item, j) => (
          <FooterSectionLink key={j} url={item.url} label={item.label} />
        ))}
      </FooterSection>
    ))}
  </FooterSectionContainer>
);

export default Footer;
