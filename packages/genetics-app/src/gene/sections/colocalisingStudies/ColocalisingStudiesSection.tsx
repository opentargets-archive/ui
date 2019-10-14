import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";

import { TableClientSide } from "ui";

import {
  GenePageColocalisingStudiesQueryQuery,
  GenePageColocalisingStudiesQueryQueryVariables,
  GwasColocalisationForQtlWithGene,
} from "../../../generated/genetics-api-types";

const QUERY = loader("./query.gql");

type Props = {
  geneId: string;
};

const columns = [
  {
    id: "study",
    label: "Study",
    // comparator: (a, b) => d3.ascending(a.study.studyId, b.study.studyId),
    renderCell: (d: GwasColocalisationForQtlWithGene) =>
      // (
      d.study.studyId,
    //   <Link to={`/study/${d.study.studyId}`}>{d.study.studyId}</Link>
    // ),
  },
  {
    id: "traitReported",
    label: "Trait reported",
    // comparator: (a, b) =>
    //   d3.ascending(a.study.traitReported, b.study.traitReported),
    renderCell: (d: GwasColocalisationForQtlWithGene) => d.study.traitReported,
    // renderFilter: () => (
    //   <Autocomplete
    //     options={colocTraitFilterOptions}
    //     value={colocTraitFilterValue}
    //     handleSelectOption={colocTraitFilterHandler}
    //     placeholder="None"
    //     multiple
    //   />
    // ),
  },
  //   {
  //     id: 'pubAuthor',
  //     label: 'Author',
  //     comparator: (a, b) => d3.ascending(a.study.pubAuthor, b.study.pubAuthor),
  //     renderCell: d => d.study.pubAuthor,
  //   },
  //   {
  //     id: 'indexVariant',
  //     label: 'Lead variant',
  //     comparator: (a, b) => d3.ascending(a.leftVariant.id, b.leftVariant.id),
  //     renderCell: d => (
  //       <Link to={`/variant/${d.leftVariant.id}`}>{d.leftVariant.id}</Link>
  //     ),
  //   },
  //   {
  //     id: 'phenotypeId',
  //     label: 'Phenotype',
  //   },
  //   {
  //     id: 'tissue.name',
  //     label: 'Tissue',
  //     comparator: (a, b) => d3.ascending(a.tissue.name, b.tissue.name),
  //     renderCell: d => d.tissue.name,
  //   },
  //   {
  //     id: 'qtlStudyId',
  //     label: 'Source',
  //   },
  //   // {
  //   //   id: 'beta',
  //   //   label: 'QTL beta',
  //   //   renderCell: d => significantFigures(d.beta),
  //   // },
  //   {
  //     id: 'h3',
  //     label: 'H3',
  //     renderCell: d => significantFigures(d.h3),
  //   },
  //   {
  //     id: 'h4',
  //     label: 'H4',
  //     renderCell: d => significantFigures(d.h4),
  //   },
  //   {
  //     id: 'log2h4h3',
  //     label: 'log2(H4/H3)',
  //     renderCell: d => significantFigures(d.log2h4h3),
  //   },
  //   {
  //     id: 'studyLocus',
  //     label: 'View',
  //     renderCell: d => (
  //       <StudyLocusLink
  //         hasSumsStats={d.study.hasSumsStats}
  //         indexVariantId={d.leftVariant.id}
  //         studyId={d.study.studyId}
  //       />
  //     ),
  //   },
];

const ColocalisingStudiesSection: React.FC<Props> = ({ geneId }) => {
  const { loading, error, data } = useQuery<
    GenePageColocalisingStudiesQueryQuery,
    GenePageColocalisingStudiesQueryQueryVariables
  >(QUERY, { variables: { geneId } });

  const rows = error || loading || !data ? [] : data.colocalisationsForGene;

  return (
    <div>
      {geneId}

      <TableClientSide {...{ columns, rows }} />
    </div>
  );
};

export default ColocalisingStudiesSection;
