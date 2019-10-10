import * as React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";

export type SectionProps = {
  avatar?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  menu?: React.ReactNode;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({
  avatar,
  title,
  subtitle,
  menu,
  children,
}) => (
  <Card>
    <CardHeader
      avatar={avatar}
      title={title}
      subheader={subtitle}
      action={menu}
    />
    <CardContent>{children}</CardContent>
  </Card>
);

export default Section;
