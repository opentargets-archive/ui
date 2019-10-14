import React from "react";
import AssociatedStudiesSection from "./sections/associatedStudies/AssociatedStudiesSection";
import ColocalisingStudiesSection from "./sections/colocalisingStudies/ColocalisingStudiesSection";

const GenePage: React.FC = () => (
  <div>
    Gene!
    <AssociatedStudiesSection geneId="ENSG00000169174" />
    <ColocalisingStudiesSection geneId="ENSG00000169174" />
  </div>
);

export default GenePage;
