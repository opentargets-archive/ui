import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import { Grid, Typography } from "@material-ui/core";

import Facets from "./Facets";
import Table from "./Table";

import {
  DiseaseAssociationsQuery,
  DiseaseAssociationsQueryVariables,
} from "../../generated/platform-api-types";

const QUERY = loader("./query.gql");

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

  const totalCount = 42;
  const name = "SOME DISEASE";
  console.log(loading, error, data);
  return (
    <Grid container>
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
        <Table />
      </Grid>
    </Grid>
  );
};

export default ClassicAssociationsManager;
