import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";

import {
  TableClientSide,
  TableClientSideColumn,
  TableDownloadColumn,
  Link,
  getComparator,
  getArrayElementType,
} from "ui";

import {
  GenePageColocalisingStudiesQueryQuery,
  GenePageColocalisingStudiesQueryQueryVariables,
} from "../../../generated/genetics-api-types";

const QUERY = loader("./query.gql");

type Props = {
  geneId: string;
};

type R = getArrayElementType<
  GenePageColocalisingStudiesQueryQuery["colocalisationsForGene"]
>;

const columns: TableClientSideColumn<R>[] = [
  {
    id: "study",
    label: "Study",
    comparator: getComparator(d => d.study.studyId),
    renderCell: d => (
      <Link to={`/study/${d.study.studyId}`}>{d.study.studyId}</Link>
    ),
  },
  {
    id: "traitReported",
    label: "Trait reported",
    comparator: getComparator(d => d.study.traitReported),
    renderCell: d => d.study.traitReported,
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
  // {
  //   id: 'pubAuthor',
  //   label: 'Author',
  //   comparator: getComparator(d => d.study.pubAuthor), //(a, b) => d3.ascending(a.study.pubAuthor, b.study.pubAuthor),
  //   renderCell: d => d.study.pubAuthor,
  // },
  {
    id: "indexVariant",
    label: "Lead variant",
    comparator: getComparator(d => d.leftVariant.id),
    renderCell: d => (
      <Link to={`/variant/${d.leftVariant.id}`}>{d.leftVariant.id}</Link>
    ),
  },
  {
    id: "phenotypeId",
    label: "Phenotype",
  },
  {
    id: "tissue.name",
    label: "Tissue",
    comparator: getComparator(d => d.tissue.name),
    renderCell: d => d.tissue.name,
  },
  {
    id: "qtlStudyId",
    label: "Source",
  },
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

const downloadColumns: TableDownloadColumn<R>[] = [
  { label: "Study ID", valueAccessor: d => d.study.studyId },
  { label: "Trait", valueAccessor: d => d.study.traitReported },
];

const ColocalisingStudiesSection: React.FC<Props> = ({ geneId }) => {
  const { loading, error, data } = useQuery<
    GenePageColocalisingStudiesQueryQuery,
    GenePageColocalisingStudiesQueryQueryVariables
  >(QUERY, { variables: { geneId } });

  const rows = error || loading || !data ? [] : data.colocalisationsForGene;

  const downloadFilestem = `colocalising-studies-${geneId}`;

  return (
    <TableClientSide
      {...{ rows, columns, downloadColumns, downloadFilestem }}
    />
  );
};

export default ColocalisingStudiesSection;
