import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import { Box, Grid, Typography } from "@material-ui/core";

import { SectionContainer, getComparator } from "ui";

import Facets from "./Facets";
import Table from "./Table";

import {
  DiseaseAssociationsQuery,
  DiseaseAssociationsQueryVariables,
} from "../../generated/platform-api-types";

const QUERY = loader("./query.gql");
const dataTypesOrder = [
  "GENETIC_ASSOCIATION",
  "SOMATIC_MUTATION",
  "KNOWN_DRUGS",
  "PATHWAYS",
  "DIFFERENTIAL_EXPRESSION",
  "TEXT_MINING",
  "ANIMAL_MODELS",
];
const dataTypesPositions = dataTypesOrder.reduce(
  (acc: { [key: string]: number }, d, i) => {
    acc[d] = i;
    return acc;
  },
  {}
);
console.log(dataTypesPositions);

type Props = {
  efoId: string;
};

const ClassicAssociationsManager: React.FC<Props> = ({ efoId }) => {
  // TODO: split state into hooks and separate off facets+search
  const state = {
    first: 50,
    page: 0,
    pageCursors: {},
    facets: null, // facetsStateDefault,
    search: "",
    searchDebouced: "",
    sortBy: { field: "SCORE_OVERALL", ascending: false },
  };

  const { loading, error, data } = useQuery<
    DiseaseAssociationsQuery,
    DiseaseAssociationsQueryVariables
  >(QUERY, { variables: { efoId } });

  const name = "SOME DISEASE";
  console.log(loading, error, data);

  const totalCount = data ? data.disease.targetsConnection.totalCount : "???";
  const rows = data
    ? data.disease.targetsConnection.edges.map(e => ({
        ...e.node,
        score: e.score,
        scoresByDataType: e.scoresByDataType.sort(
          getComparator(d => dataTypesPositions[d.dataTypeId])
        ),
      }))
    : [];

  console.log(rows);

  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">
            <strong>{totalCount} targets</strong> associated with{" "}
            <strong>{name}</strong>
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Facets />
        </Grid>
        <Grid item xs={12} md={9}>
          <Table rows={rows} dataTypes={dataTypesOrder} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ClassicAssociationsManager;
