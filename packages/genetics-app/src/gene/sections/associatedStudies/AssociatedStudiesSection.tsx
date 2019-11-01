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
  GenePageAssociatedStudiesQueryQuery,
  GenePageAssociatedStudiesQueryQueryVariables,
} from "../../../generated/genetics-api-types";

const QUERY = loader("./query.gql");

type Props = {
  geneId: string;
};

type R = getArrayElementType<
  GenePageAssociatedStudiesQueryQuery["studiesAndLeadVariantsForGene"]
>;

const columns: TableClientSideColumn<R>[] = [
  {
    id: "study.studyId",
    label: "Study ID",
    comparator: getComparator(d => d.study.studyId),
    renderCell: d => (
      <Link to={`/study/${d.study.studyId}`}>{d.study.studyId}</Link>
    ),
  },
  {
    id: "study.traitReported",
    label: "Trait",
    comparator: getComparator(d => d.study.traitReported),
    renderCell: d => d.study.traitReported,
    filter: {
      valueAccessor: d => d.study.traitReported,
      labelAccessor: d => d.study.traitReported,
    },
    // renderFilter: () => (
    //   <Autocomplete
    //     options={traitFilterOptions}
    //     value={traitFilterValue}
    //     handleSelectOption={traitFilterHandler}
    //     placeholder="None"
    //     multiple
    //   />
    // ),
  },
  //   {
  //     id: 'study.pmid',
  //     label: 'PMID',
  //     comparator: generateComparator(d => d.study.pmid),
  //     renderCell: rowData => (
  //       <PmidOrBiobankLink
  //         studyId={rowData.study.studyId}
  //         pmid={rowData.study.pmid}
  //       />
  //     ),
  //   },
  //   {
  //     id: 'study.pubAuthor',
  //     label: 'Author (Year)',
  //     comparator: generateComparator(d => d.study.pubAuthor),
  //     renderFilter: () => (
  //       <Autocomplete
  //         options={authorFilterOptions}
  //         value={authorFilterValue}
  //         handleSelectOption={authorFilterHandler}
  //         placeholder="None"
  //         multiple
  //       />
  //     ),
  //     renderCell: rowData =>
  //       `${rowData.study.pubAuthor} (${new Date(
  //         rowData.study.pubDate
  //       ).getFullYear()})`,
  //   },
  //   {
  //     id: 'study.nInitial',
  //     label: 'N Initial',
  //     comparator: generateComparator(d => d.study.nInitial),
  //     renderCell: rowData =>
  //       rowData.study.nInitial ? commaSeparate(rowData.study.nInitial) : '',
  //   },
  //   {
  //     id: 'study.nCases',
  //     label: 'N Cases',
  //     comparator: generateComparator(d => d.study.nCases),
  //     renderCell: rowData =>
  //       rowData.study.nCases ? commaSeparate(rowData.study.nCases) : '',
  //   },
  {
    id: "indexVariant.id",
    label: "Lead Variant",
    comparator: getComparator(d => d.indexVariant.id),
    renderCell: d => (
      <Link to={`/variant/${d.indexVariant.id}`}>{d.indexVariant.id}</Link>
    ),
  },
  // {
  //   id: "indexVariant.rsId",
  //   label: "Lead Variant rsID",
  //   // comparator: generateComparator(d => d.indexVariant.rsId),
  //   renderCell: d => d.indexVariant.rsId,
  // },
  //   {
  //     id: 'pval',
  //     label: 'P-value',
  //     renderCell: rowData =>
  //       rowData.pval < pvalThreshold
  //         ? `<${pvalThreshold}`
  //         : significantFigures(rowData.pval),
  //   },
  //   {
  //     id: 'beta',
  //     label: 'Beta',
  //     tooltip: (
  //       <React.Fragment>
  //         Beta with respect to the ALT allele.
  //         <Link
  //           external
  //           tooltip
  //           to="https://genetics-docs.opentargets.org/faqs#why-are-betas-and-odds-ratios-displayed-inconsistently-in-the-portal"
  //         >
  //           See FAQ.
  //         </Link>
  //       </React.Fragment>
  //     ),
  //     renderCell: rowData =>
  //       rowData.beta ? significantFigures(rowData.beta) : null,
  //   },
  //   {
  //     id: 'oddsRatio',
  //     label: 'Odds Ratio',
  //     tooltip: 'Odds ratio with respect to the ALT allele',
  //     renderCell: rowData =>
  //       rowData.oddsRatio ? significantFigures(rowData.oddsRatio) : null,
  //   },
  //   {
  //     id: 'ci',
  //     label: '95% Confidence Interval',
  //     tooltip:
  //       '95% confidence interval for the effect estimate. CIs are calculated approximately using the reported p-value.',
  //     renderCell: rowData =>
  //       rowData.beta
  //         ? `(${significantFigures(rowData.betaCILower)}, ${significantFigures(
  //             rowData.betaCIUpper
  //           )})`
  //         : rowData.oddsRatio
  //           ? `(${significantFigures(
  //               rowData.oddsRatioCILower
  //             )}, ${significantFigures(rowData.oddsRatioCIUpper)})`
  //           : null,
  //   },
  //   {
  //     id: 'locusView',
  //     label: 'View',
  //     renderCell: rowData => (
  //       <LocusLink
  //         chromosome={chromosome}
  //         position={position}
  //         selectedGenes={[geneId]}
  //         selectedStudies={[rowData.study.studyId]}
  //       >
  //         Locus
  //       </LocusLink>
  //     ),
  //   },
];

const downloadColumns: TableDownloadColumn<R>[] = [
  { label: "Study ID", valueAccessor: d => d.study.studyId },
  { label: "Trait", valueAccessor: d => d.study.traitReported },
];

const AssociatedStudiesSection: React.FC<Props> = ({ geneId }) => {
  const { loading, error, data } = useQuery<
    GenePageAssociatedStudiesQueryQuery,
    GenePageAssociatedStudiesQueryQueryVariables
  >(QUERY, { variables: { geneId } });

  const rows =
    error || loading || !data ? [] : data.studiesAndLeadVariantsForGene;

  const downloadFilestem = `associated-studies-${geneId}`;

  return (
    <TableClientSide
      {...{ rows, columns, downloadColumns, downloadFilestem }}
    />
  );
};

export default AssociatedStudiesSection;
