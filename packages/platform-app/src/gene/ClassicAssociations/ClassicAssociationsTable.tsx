import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";

import {
  DiseaseAssociationsQuery,
  DiseaseAssociationsQueryVariables,
} from "../../generated/platform-api-types";

const QUERY = loader("./query.gql");

type Props = {
  efoId: string;
};

const ClassicAssociationsTable: React.FC<Props> = ({ efoId }) => {
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

  console.log(loading, error, data);
  return null;
};

export default ClassicAssociationsTable;
