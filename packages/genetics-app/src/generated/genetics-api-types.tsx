import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * The `Long` scalar type represents non-fractional signed whole numeric values.
   * Long can represent values between -(2^63) and 2^63 - 1.
 **/
  Long: any,
};

/** Thsi element represents the tag variant with its associated statistics */
export type CredSetTagElement = {
   __typename?: 'CredSetTagElement',
  /** Tag Variant in the credibleset table */
  tagVariant: Variant,
  /** p-val */
  pval: Scalars['Float'],
  /** SE */
  se: Scalars['Float'],
  /** beta */
  beta: Scalars['Float'],
  /** Posterior Probability */
  postProb: Scalars['Float'],
  /** Multisignal Method */
  MultisignalMethod: Scalars['String'],
  /** Log ABF */
  logABF: Scalars['Float'],
  /** Is over 95 percentile */
  is95: Scalars['Boolean'],
  /** Is over 99 percentile */
  is99: Scalars['Boolean'],
};

/** A list of rows with each link */
export type DistanceElement = {
   __typename?: 'DistanceElement',
  typeId: Scalars['String'],
  sourceId: Scalars['String'],
  aggregatedScore: Scalars['Float'],
  tissues: Array<DistanceTissue>,
};

export type DistanceTissue = {
   __typename?: 'DistanceTissue',
  tissue: Tissue,
  /** Distance to the canonical TSS */
  distance?: Maybe<Scalars['Long']>,
  /** Score 1 / Distance */
  score?: Maybe<Scalars['Float']>,
  /** Quantile of the score */
  quantile?: Maybe<Scalars['Float']>,
};

export type FPredTissue = {
   __typename?: 'FPredTissue',
  tissue: Tissue,
  maxEffectLabel?: Maybe<Scalars['String']>,
  maxEffectScore?: Maybe<Scalars['Float']>,
};

/** A list of rows with each link */
export type FunctionalPredictionElement = {
   __typename?: 'FunctionalPredictionElement',
  typeId: Scalars['String'],
  sourceId: Scalars['String'],
  aggregatedScore: Scalars['Float'],
  tissues: Array<FPredTissue>,
};

/** A list of rows with each link */
export type G2VSchema = {
   __typename?: 'G2VSchema',
  /** qtl structure definition */
  qtls: Array<G2VSchemaElement>,
  /** qtl structure definition */
  intervals: Array<G2VSchemaElement>,
  /** qtl structure definition */
  functionalPredictions: Array<G2VSchemaElement>,
  /** Distance structure definition */
  distances: Array<G2VSchemaElement>,
};

/** A list of rows with each link */
export type G2VSchemaElement = {
   __typename?: 'G2VSchemaElement',
  id: Scalars['String'],
  sourceId: Scalars['String'],
  sourceLabel?: Maybe<Scalars['String']>,
  sourceDescriptionOverview?: Maybe<Scalars['String']>,
  sourceDescriptionBreakdown?: Maybe<Scalars['String']>,
  /** PubmedID */
  pmid?: Maybe<Scalars['String']>,
  tissues: Array<Tissue>,
};

export type Gecko = {
   __typename?: 'Gecko',
  genes: Array<Gene>,
  tagVariants: Array<Variant>,
  indexVariants: Array<Variant>,
  studies: Array<Study>,
  geneTagVariants: Array<GeneTagVariant>,
  tagVariantIndexVariantStudies: Array<TagVariantIndexVariantStudy>,
};

/** This element represents a simple gene object which contains id and name */
export type Gene = {
   __typename?: 'Gene',
  /** Ensembl Gene ID of a gene */
  id: Scalars['String'],
  /** Approved symbol name of a gene */
  symbol?: Maybe<Scalars['String']>,
  /** Description of a gene */
  description?: Maybe<Scalars['String']>,
  /** Chromosome */
  chromosome?: Maybe<Scalars['String']>,
  /** Start position for the gene */
  start?: Maybe<Scalars['Long']>,
  /** End position for the gene */
  end?: Maybe<Scalars['Long']>,
  /** Transcription start site */
  tss?: Maybe<Scalars['Long']>,
  /** Bio-type of the gene */
  bioType?: Maybe<Scalars['String']>,
  /** Forward strand true or false */
  fwdStrand?: Maybe<Scalars['Boolean']>,
  /** Approved symbol name of a gene */
  exons: Array<Scalars['Long']>,
};

/** A list of rows with each link */
export type GeneForVariant = {
   __typename?: 'GeneForVariant',
  /** Associated scored gene */
  gene: Gene,
  /** Associated scored variant */
  variant: Scalars['String'],
  overallScore: Scalars['Float'],
  qtls: Array<QtlElement>,
  intervals: Array<IntervalElement>,
  functionalPredictions: Array<FunctionalPredictionElement>,
  distances: Array<DistanceElement>,
};

export type GeneTagVariant = {
   __typename?: 'GeneTagVariant',
  geneId: Scalars['String'],
  tagVariantId: Scalars['String'],
  overallScore?: Maybe<Scalars['Float']>,
};

export type GwasColocalisation = {
   __typename?: 'GWASColocalisation',
  /** Tag variant ID as ex. 1_12345_A_T */
  indexVariant: Variant,
  /** study ID */
  study: Study,
  /** Beta */
  beta?: Maybe<Scalars['Float']>,
  /** H3 */
  h3: Scalars['Float'],
  /** H4 */
  h4: Scalars['Float'],
  /** Log2 H4/H3 */
  log2h4h3: Scalars['Float'],
};

export type GwasColocalisationForQtlWithGene = {
   __typename?: 'GWASColocalisationForQTLWithGene',
  /** Tag variant ID as ex. 1_12345_A_T */
  leftVariant: Variant,
  /** GWAS Study */
  study: Study,
  /** QTL study ID */
  qtlStudyId: Scalars['String'],
  /** Phenotype ID */
  phenotypeId: Scalars['String'],
  /** QTL bio-feature */
  tissue: Tissue,
  /** H3 */
  h3: Scalars['Float'],
  /** H4 */
  h4: Scalars['Float'],
  /** Log2 H4/H3 */
  log2h4h3: Scalars['Float'],
};

export type GwaslrColocalisation = {
   __typename?: 'GWASLRColocalisation',
  /** Tag variant ID as ex. 1_12345_A_T */
  leftVariant: Variant,
  /** study ID */
  leftStudy: Study,
  /** Tag variant ID as ex. 1_12345_A_T */
  rightVariant: Variant,
  /** study ID */
  rightStudy: Study,
  /** H3 */
  h3: Scalars['Float'],
  /** H4 */
  h4: Scalars['Float'],
  /** Log2 H4/H3 */
  log2h4h3: Scalars['Float'],
};

/** 
 * This object represent a link between a triple (study, trait, index_variant) and
 * a tag variant via an expansion method (either ldExpansion or FineMapping)
 **/
export type IndexVariantAssociation = {
   __typename?: 'IndexVariantAssociation',
  /** Tag variant ID as ex. 1_12345_A_T */
  tagVariant: Variant,
  /** study ID */
  study: Study,
  /** p-val between a study and an the provided index variant */
  pval: Scalars['Float'],
  /** p-val between a study and an the provided index variant */
  pvalMantissa: Scalars['Float'],
  /** p-val between a study and an the provided index variant */
  pvalExponent: Scalars['Long'],
  /** n total cases (n initial + n replication) */
  nTotal: Scalars['Long'],
  /** n cases */
  nCases: Scalars['Long'],
  /** study ID */
  overallR2?: Maybe<Scalars['Float']>,
  afr1000GProp?: Maybe<Scalars['Float']>,
  amr1000GProp?: Maybe<Scalars['Float']>,
  eas1000GProp?: Maybe<Scalars['Float']>,
  eur1000GProp?: Maybe<Scalars['Float']>,
  sas1000GProp?: Maybe<Scalars['Float']>,
  log10Abf?: Maybe<Scalars['Float']>,
  posteriorProbability?: Maybe<Scalars['Float']>,
  oddsRatio?: Maybe<Scalars['Float']>,
  oddsRatioCILower?: Maybe<Scalars['Float']>,
  oddsRatioCIUpper?: Maybe<Scalars['Float']>,
  beta?: Maybe<Scalars['Float']>,
  betaCILower?: Maybe<Scalars['Float']>,
  betaCIUpper?: Maybe<Scalars['Float']>,
  direction?: Maybe<Scalars['String']>,
};

/** A list of rows with each link */
export type IndexVariantsAndStudiesForTagVariant = {
   __typename?: 'IndexVariantsAndStudiesForTagVariant',
  /** A list of associations connected to a Index variant and a Study through some expansion methods */
  associations: Array<TagVariantAssociation>,
};

/** A list of rows with each link */
export type IntervalElement = {
   __typename?: 'IntervalElement',
  typeId: Scalars['String'],
  sourceId: Scalars['String'],
  aggregatedScore: Scalars['Float'],
  tissues: Array<IntervalTissue>,
};

export type IntervalTissue = {
   __typename?: 'IntervalTissue',
  tissue: Tissue,
  quantile: Scalars['Float'],
  score?: Maybe<Scalars['Float']>,
};


/** This element represents a Manhattan like plot */
export type Manhattan = {
   __typename?: 'Manhattan',
  /** A list of associations */
  associations: Array<ManhattanAssociation>,
  /** A list of overlapped studies */
  topOverlappedStudies?: Maybe<TopOverlappedStudies>,
};


/** This element represents a Manhattan like plot */
export type ManhattanTopOverlappedStudiesArgs = {
  pageIndex?: Maybe<Scalars['Int']>,
  pageSize?: Maybe<Scalars['Int']>
};

/** This element represents an association between a trait and a variant through a study */
export type ManhattanAssociation = {
   __typename?: 'ManhattanAssociation',
  /** Index variant */
  variant: Variant,
  /** Computed p-Value */
  pval: Scalars['Float'],
  /** p-val between a study and an the provided index variant */
  pvalMantissa: Scalars['Float'],
  /** p-val between a study and an the provided index variant */
  pvalExponent: Scalars['Long'],
  oddsRatio?: Maybe<Scalars['Float']>,
  oddsRatioCILower?: Maybe<Scalars['Float']>,
  oddsRatioCIUpper?: Maybe<Scalars['Float']>,
  beta?: Maybe<Scalars['Float']>,
  betaCILower?: Maybe<Scalars['Float']>,
  betaCIUpper?: Maybe<Scalars['Float']>,
  direction?: Maybe<Scalars['String']>,
  /** A list of best genes associated */
  bestGenes: Array<ScoredGene>,
  /** A list of best genes associated */
  bestColocGenes: Array<ScoredGene>,
  /** The cardinal of the set defined as tag variants for an index variant coming from crediblesets */
  credibleSetSize?: Maybe<Scalars['Long']>,
  /** The cardinal of the set defined as tag variants for an index variant coming from ld expansion */
  ldSetSize?: Maybe<Scalars['Long']>,
  /** The cardinal of the set defined as tag variants for an index variant coming from any expansion */
  totalSetSize: Scalars['Long'],
};

/** This element represent an overlap between two variants for two studies */
export type Overlap = {
   __typename?: 'Overlap',
  variantIdA: Scalars['String'],
  variantIdB: Scalars['String'],
  overlapAB: Scalars['Long'],
  distinctA: Scalars['Long'],
  distinctB: Scalars['Long'],
};

export type OverlappedInfoForStudy = {
   __typename?: 'OverlappedInfoForStudy',
  /** A study object */
  study?: Maybe<Study>,
  overlappedVariantsForStudies: Array<OverlappedVariantsStudies>,
  variantIntersectionSet: Array<Scalars['String']>,
};

/** This element represent a overlap between two stduies */
export type OverlappedStudy = {
   __typename?: 'OverlappedStudy',
  /** A study object */
  study: Study,
  /** Orig variant id which is been used for computing the overlap with the referenced study */
  numOverlapLoci: Scalars['Int'],
};

/** This element represent a overlap between two stduies */
export type OverlappedVariantsStudies = {
   __typename?: 'OverlappedVariantsStudies',
  /** A study object */
  study?: Maybe<Study>,
  /** Orig variant id which is been used for computing the overlap with the referenced study */
  overlaps: Array<Overlap>,
};

/** This element represents a PheWAS like plot */
export type PheWas = {
   __typename?: 'PheWAS',
  /** A total number of unique GWAS studies in the summary stats table */
  totalGWASStudies: Scalars['Long'],
  /** A list of associations */
  associations: Array<PheWasAssociation>,
};

/** This element represents an association between a variant and a reported trait through a study */
export type PheWasAssociation = {
   __typename?: 'PheWASAssociation',
  /** Study Object */
  study?: Maybe<Study>,
  /** Computed p-Value */
  pval: Scalars['Float'],
  /** beta */
  beta?: Maybe<Scalars['Float']>,
  /** total sample size (variant level) */
  nTotal?: Maybe<Scalars['Long']>,
  /** number of cases */
  nCases?: Maybe<Scalars['Long']>,
  /** Odds ratio (if case control) */
  oddsRatio?: Maybe<Scalars['Float']>,
  /** Effect Allele Frequency */
  eaf?: Maybe<Scalars['Float']>,
  /** Standard Error */
  se?: Maybe<Scalars['Float']>,
};

export type QtlColocalisation = {
   __typename?: 'QTLColocalisation',
  /** Tag variant ID as ex. 1_12345_A_T */
  indexVariant: Variant,
  /** Gene */
  gene: Gene,
  /** QTL Phenotype ID */
  phenotypeId: Scalars['String'],
  /** QTL bio-feature */
  tissue: Tissue,
  /** QTL study ID */
  qtlStudyName: Scalars['String'],
  /** Beta */
  beta?: Maybe<Scalars['Float']>,
  /** H3 */
  h3: Scalars['Float'],
  /** H4 */
  h4: Scalars['Float'],
  /** Log2 H4/H3 */
  log2h4h3: Scalars['Float'],
};

/** A list of rows with each link */
export type QtlElement = {
   __typename?: 'QTLElement',
  typeId: Scalars['String'],
  sourceId: Scalars['String'],
  aggregatedScore: Scalars['Float'],
  tissues: Array<QtlTissue>,
};

export type QtlTissue = {
   __typename?: 'QTLTissue',
  tissue: Tissue,
  quantile: Scalars['Float'],
  beta?: Maybe<Scalars['Float']>,
  pval?: Maybe<Scalars['Float']>,
};

export type Query = {
   __typename?: 'Query',
  search: SearchResult,
  genes: Array<Gene>,
  geneInfo?: Maybe<Gene>,
  studyInfo?: Maybe<Study>,
  variantInfo?: Maybe<Variant>,
  studiesForGene: Array<StudyForGene>,
  manhattan: Manhattan,
  topOverlappedStudies: TopOverlappedStudies,
  overlapInfoForStudy: OverlappedInfoForStudy,
  tagVariantsAndStudiesForIndexVariant: TagVariantsAndStudiesForIndexVariant,
  indexVariantsAndStudiesForTagVariant: IndexVariantsAndStudiesForTagVariant,
  pheWAS: PheWas,
  gecko?: Maybe<Gecko>,
  genesForVariantSchema: G2VSchema,
  genesForVariant: Array<GeneForVariant>,
  gwasRegional: Array<RegionalAssociation>,
  qtlRegional: Array<RegionalAssociation>,
  gwasCredibleSet: Array<CredSetTagElement>,
  qtlCredibleSet: Array<CredSetTagElement>,
  colocalisationsForGene: Array<GwasColocalisationForQtlWithGene>,
  gwasColocalisationForRegion: Array<GwaslrColocalisation>,
  gwasColocalisation: Array<GwasColocalisation>,
  qtlColocalisation: Array<QtlColocalisation>,
  studiesAndLeadVariantsForGene: Array<StudiesAndLeadVariantsForGene>,
};


export type QuerySearchArgs = {
  queryString: Scalars['String'],
  pageIndex?: Maybe<Scalars['Int']>,
  pageSize?: Maybe<Scalars['Int']>
};


export type QueryGenesArgs = {
  chromosome: Scalars['String'],
  start: Scalars['Long'],
  end: Scalars['Long']
};


export type QueryGeneInfoArgs = {
  geneId: Scalars['String']
};


export type QueryStudyInfoArgs = {
  studyId: Scalars['String']
};


export type QueryVariantInfoArgs = {
  variantId: Scalars['String']
};


export type QueryStudiesForGeneArgs = {
  geneId: Scalars['String']
};


export type QueryManhattanArgs = {
  studyId: Scalars['String'],
  pageIndex?: Maybe<Scalars['Int']>,
  pageSize?: Maybe<Scalars['Int']>
};


export type QueryTopOverlappedStudiesArgs = {
  studyId: Scalars['String'],
  pageIndex?: Maybe<Scalars['Int']>,
  pageSize?: Maybe<Scalars['Int']>
};


export type QueryOverlapInfoForStudyArgs = {
  studyId: Scalars['String'],
  studyIds: Array<Scalars['String']>
};


export type QueryTagVariantsAndStudiesForIndexVariantArgs = {
  variantId: Scalars['String'],
  pageIndex?: Maybe<Scalars['Int']>,
  pageSize?: Maybe<Scalars['Int']>
};


export type QueryIndexVariantsAndStudiesForTagVariantArgs = {
  variantId: Scalars['String'],
  pageIndex?: Maybe<Scalars['Int']>,
  pageSize?: Maybe<Scalars['Int']>
};


export type QueryPheWasArgs = {
  variantId: Scalars['String'],
  pageIndex?: Maybe<Scalars['Int']>,
  pageSize?: Maybe<Scalars['Int']>
};


export type QueryGeckoArgs = {
  chromosome: Scalars['String'],
  start: Scalars['Long'],
  end: Scalars['Long']
};


export type QueryGenesForVariantArgs = {
  variantId: Scalars['String']
};


export type QueryGwasRegionalArgs = {
  studyId: Scalars['String'],
  chromosome: Scalars['String'],
  start: Scalars['Long'],
  end: Scalars['Long']
};


export type QueryQtlRegionalArgs = {
  studyId: Scalars['String'],
  bioFeature: Scalars['String'],
  phenotypeId: Scalars['String'],
  chromosome: Scalars['String'],
  start: Scalars['Long'],
  end: Scalars['Long']
};


export type QueryGwasCredibleSetArgs = {
  studyId: Scalars['String'],
  variantId: Scalars['String']
};


export type QueryQtlCredibleSetArgs = {
  studyId: Scalars['String'],
  variantId: Scalars['String'],
  phenotypeId: Scalars['String'],
  bioFeature: Scalars['String']
};


export type QueryColocalisationsForGeneArgs = {
  geneId: Scalars['String']
};


export type QueryGwasColocalisationForRegionArgs = {
  chromosome: Scalars['String'],
  start: Scalars['Long'],
  end: Scalars['Long']
};


export type QueryGwasColocalisationArgs = {
  studyId: Scalars['String'],
  variantId: Scalars['String']
};


export type QueryQtlColocalisationArgs = {
  studyId: Scalars['String'],
  variantId: Scalars['String']
};


export type QueryStudiesAndLeadVariantsForGeneArgs = {
  geneId: Scalars['String']
};

/** Variant with a p-val */
export type RegionalAssociation = {
   __typename?: 'RegionalAssociation',
  /** Summary Stats simple variant information */
  variant: Variant,
  /** p-val */
  pval: Scalars['Float'],
};

/** This object link a Gene with a score */
export type ScoredGene = {
   __typename?: 'ScoredGene',
  /** Gene Info */
  gene: Gene,
  /** Score a Float number between [0. .. 1.] */
  score: Scalars['Float'],
};

/** Search data by a query string */
export type SearchResult = {
   __typename?: 'SearchResult',
  /** Total number of genes found */
  totalGenes: Scalars['Long'],
  /** Total number of variants found */
  totalVariants: Scalars['Long'],
  /** Total number of studies found */
  totalStudies: Scalars['Long'],
  /** Gene search result list */
  genes: Array<Gene>,
  /** Variant search result list */
  variants: Array<Variant>,
  /** Study search result list */
  studies: Array<Study>,
};

/** A list of Studies and Lead Variants for a Gene */
export type StudiesAndLeadVariantsForGene = {
   __typename?: 'StudiesAndLeadVariantsForGene',
  /** Tag variant ID as ex. 1_12345_A_T */
  indexVariant: Variant,
  /** study ID */
  study: Study,
  /** p-val between a study and an the provided index variant */
  pval: Scalars['Float'],
  /** p-val between a study and an the provided index variant */
  pvalMantissa: Scalars['Float'],
  /** p-val between a study and an the provided index variant */
  pvalExponent: Scalars['Long'],
  oddsRatio?: Maybe<Scalars['Float']>,
  oddsRatioCILower?: Maybe<Scalars['Float']>,
  oddsRatioCIUpper?: Maybe<Scalars['Float']>,
  beta?: Maybe<Scalars['Float']>,
  betaCILower?: Maybe<Scalars['Float']>,
  betaCIUpper?: Maybe<Scalars['Float']>,
  direction?: Maybe<Scalars['String']>,
};

/** This element contains all study fields */
export type Study = {
   __typename?: 'Study',
  /** Study Identifier */
  studyId: Scalars['String'],
  /** Trait Label as reported on the publication */
  traitReported: Scalars['String'],
  /** A list of curated efo codes */
  traitEfos: Array<Scalars['String']>,
  /** PubMed ID for the corresponding publication */
  pmid?: Maybe<Scalars['String']>,
  /** Publication Date as YYYY-MM-DD */
  pubDate?: Maybe<Scalars['String']>,
  /** Publication Journal name */
  pubJournal?: Maybe<Scalars['String']>,
  /** Publication Title */
  pubTitle?: Maybe<Scalars['String']>,
  /** Publication author */
  pubAuthor?: Maybe<Scalars['String']>,
  /** Contains summary stats info */
  hasSumsStats?: Maybe<Scalars['Boolean']>,
  /** Ancestry initial */
  ancestryInitial: Array<Scalars['String']>,
  /** Ancestry replication */
  ancestryReplication: Array<Scalars['String']>,
  /** N initial */
  nInitial?: Maybe<Scalars['Long']>,
  /** N replication */
  nReplication?: Maybe<Scalars['Long']>,
  /** N cases */
  nCases?: Maybe<Scalars['Long']>,
  /** n total cases (n initial + n replication) */
  nTotal: Scalars['Long'],
  /** Trait category */
  traitCategory?: Maybe<Scalars['String']>,
  /** Number of associated loci */
  numAssocLoci?: Maybe<Scalars['Long']>,
};

export type StudyForGene = {
   __typename?: 'StudyForGene',
  /** A study object */
  study: Study,
};

/** 
 * This object represent a link between a triple (study, trait, index_variant) and
 * a tag variant via an expansion method (either ldExpansion or FineMapping)
 **/
export type TagVariantAssociation = {
   __typename?: 'TagVariantAssociation',
  /** Tag variant ID as ex. 1_12345_A_T */
  indexVariant: Variant,
  /** study ID */
  study: Study,
  /** p-val between a study and an the provided index variant */
  pval: Scalars['Float'],
  /** p-val between a study and an the provided index variant */
  pvalMantissa: Scalars['Float'],
  /** p-val between a study and an the provided index variant */
  pvalExponent: Scalars['Long'],
  /** n total cases (n initial + n replication) */
  nTotal: Scalars['Long'],
  /** n cases */
  nCases: Scalars['Long'],
  /** study ID */
  overallR2?: Maybe<Scalars['Float']>,
  afr1000GProp?: Maybe<Scalars['Float']>,
  amr1000GProp?: Maybe<Scalars['Float']>,
  eas1000GProp?: Maybe<Scalars['Float']>,
  eur1000GProp?: Maybe<Scalars['Float']>,
  sas1000GProp?: Maybe<Scalars['Float']>,
  log10Abf?: Maybe<Scalars['Float']>,
  posteriorProbability?: Maybe<Scalars['Float']>,
  oddsRatio?: Maybe<Scalars['Float']>,
  oddsRatioCILower?: Maybe<Scalars['Float']>,
  oddsRatioCIUpper?: Maybe<Scalars['Float']>,
  beta?: Maybe<Scalars['Float']>,
  betaCILower?: Maybe<Scalars['Float']>,
  betaCIUpper?: Maybe<Scalars['Float']>,
  direction?: Maybe<Scalars['String']>,
};

export type TagVariantIndexVariantStudy = {
   __typename?: 'TagVariantIndexVariantStudy',
  tagVariantId: Scalars['String'],
  indexVariantId: Scalars['String'],
  studyId: Scalars['String'],
  r2?: Maybe<Scalars['Float']>,
  posteriorProbability?: Maybe<Scalars['Float']>,
  pval: Scalars['Float'],
  /** p-val between a study and an the provided index variant */
  pvalMantissa: Scalars['Float'],
  /** p-val between a study and an the provided index variant */
  pvalExponent: Scalars['Long'],
  oddsRatio?: Maybe<Scalars['Float']>,
  oddsRatioCILower?: Maybe<Scalars['Float']>,
  oddsRatioCIUpper?: Maybe<Scalars['Float']>,
  beta?: Maybe<Scalars['Float']>,
  betaCILower?: Maybe<Scalars['Float']>,
  betaCIUpper?: Maybe<Scalars['Float']>,
  direction?: Maybe<Scalars['String']>,
};

/** A list of rows with each link */
export type TagVariantsAndStudiesForIndexVariant = {
   __typename?: 'TagVariantsAndStudiesForIndexVariant',
  /** A list of associations connected to a Index variant and a Study through some expansion methods */
  associations: Array<IndexVariantAssociation>,
};

export type Tissue = {
   __typename?: 'Tissue',
  id: Scalars['String'],
  name: Scalars['String'],
};

/** This element represent a overlap between two stduies */
export type TopOverlappedStudies = {
   __typename?: 'TopOverlappedStudies',
  /** A study object */
  study?: Maybe<Study>,
  /** Top N studies ordered by loci overlap */
  topStudiesByLociOverlap: Array<OverlappedStudy>,
};

/** This element represents a variant object */
export type Variant = {
   __typename?: 'Variant',
  /** Variant ID */
  id: Scalars['String'],
  /** Variant ID GRCH37 */
  idB37?: Maybe<Scalars['String']>,
  /** Approved symbol name of a gene */
  rsId?: Maybe<Scalars['String']>,
  /** Ensembl Gene ID of a gene */
  chromosome: Scalars['String'],
  /** Approved symbol name of a gene */
  position: Scalars['Long'],
  /** chrom id GRCH37 */
  chromosomeB37?: Maybe<Scalars['String']>,
  /** Approved symbol name of a gene */
  positionB37?: Maybe<Scalars['Long']>,
  /** Ref allele */
  refAllele: Scalars['String'],
  /** Alt allele */
  altAllele: Scalars['String'],
  /** Nearest gene */
  nearestGene?: Maybe<Gene>,
  /** Distance to the nearest gene (any biotype) */
  nearestGeneDistance?: Maybe<Scalars['Long']>,
  /** Nearest protein-coding gene */
  nearestCodingGene?: Maybe<Gene>,
  /** Distance to the nearest gene (protein-coding biotype) */
  nearestCodingGeneDistance?: Maybe<Scalars['Long']>,
  /** Most severe consequence */
  mostSevereConsequence?: Maybe<Scalars['String']>,
  /** Combined Annotation Dependent Depletion - Raw score */
  caddRaw?: Maybe<Scalars['Float']>,
  /** Combined Annotation Dependent Depletion - Scaled score */
  caddPhred?: Maybe<Scalars['Float']>,
  /** gnomAD Allele frequency (African/African-American population) */
  gnomadAFR?: Maybe<Scalars['Float']>,
  /** gnomAD Allele frequency (Latino/Admixed American population) */
  gnomadAMR?: Maybe<Scalars['Float']>,
  /** gnomAD Allele frequency (Ashkenazi Jewish population) */
  gnomadASJ?: Maybe<Scalars['Float']>,
  /** gnomAD Allele frequency (East Asian population) */
  gnomadEAS?: Maybe<Scalars['Float']>,
  /** gnomAD Allele frequency (Finnish population) */
  gnomadFIN?: Maybe<Scalars['Float']>,
  /** gnomAD Allele frequency (Non-Finnish European population) */
  gnomadNFE?: Maybe<Scalars['Float']>,
  /** gnomAD Allele frequency (Non-Finnish Eurpoean Estonian sub-population) */
  gnomadNFEEST?: Maybe<Scalars['Float']>,
  /** gnomAD Allele frequency (Non-Finnish Eurpoean North-Western European sub-population) */
  gnomadNFENWE?: Maybe<Scalars['Float']>,
  /** gnomAD Allele frequency (Non-Finnish Eurpoean Southern European sub-population) */
  gnomadNFESEU?: Maybe<Scalars['Float']>,
  /** gnomAD Allele frequency (Non-Finnish Eurpoean Other non-Finnish European sub-population) */
  gnomadNFEONF?: Maybe<Scalars['Float']>,
  /** gnomAD Allele frequency (Other (population not assigned) population) */
  gnomadOTH?: Maybe<Scalars['Float']>,
};

export type GenePageAssociatedStudiesQueryQueryVariables = {
  geneId: Scalars['String']
};


export type GenePageAssociatedStudiesQueryQuery = (
  { __typename?: 'Query' }
  & { studiesAndLeadVariantsForGene: Array<(
    { __typename?: 'StudiesAndLeadVariantsForGene' }
    & Pick<StudiesAndLeadVariantsForGene, 'pval' | 'oddsRatio' | 'oddsRatioCILower' | 'oddsRatioCIUpper' | 'beta' | 'betaCILower' | 'betaCIUpper' | 'direction'>
    & { indexVariant: (
      { __typename?: 'Variant' }
      & Pick<Variant, 'rsId' | 'id'>
    ), study: (
      { __typename?: 'Study' }
      & Pick<Study, 'studyId' | 'traitReported' | 'pubAuthor' | 'pubDate' | 'pmid' | 'nInitial' | 'nReplication' | 'nCases'>
    ) }
  )> }
);

export type GenePageColocalisingStudiesQueryQueryVariables = {
  geneId: Scalars['String']
};


export type GenePageColocalisingStudiesQueryQuery = (
  { __typename?: 'Query' }
  & { colocalisationsForGene: Array<(
    { __typename?: 'GWASColocalisationForQTLWithGene' }
    & Pick<GwasColocalisationForQtlWithGene, 'qtlStudyId' | 'phenotypeId' | 'h3' | 'h4' | 'log2h4h3'>
    & { leftVariant: (
      { __typename?: 'Variant' }
      & Pick<Variant, 'id' | 'rsId'>
    ), study: (
      { __typename?: 'Study' }
      & Pick<Study, 'studyId' | 'traitReported' | 'pubAuthor' | 'pubDate' | 'pmid' | 'hasSumsStats'>
    ), tissue: (
      { __typename?: 'Tissue' }
      & Pick<Tissue, 'id' | 'name'>
    ) }
  )> }
);


export const GenePageAssociatedStudiesQueryDocument = gql`
    query GenePageAssociatedStudiesQuery($geneId: String!) {
  studiesAndLeadVariantsForGene(geneId: $geneId) {
    indexVariant {
      rsId
      id
    }
    study {
      studyId
      traitReported
      pubAuthor
      pubDate
      pmid
      nInitial
      nReplication
      nCases
    }
    pval
    oddsRatio
    oddsRatioCILower
    oddsRatioCIUpper
    beta
    betaCILower
    betaCIUpper
    direction
  }
}
    `;
export type GenePageAssociatedStudiesQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GenePageAssociatedStudiesQueryQuery, GenePageAssociatedStudiesQueryQueryVariables>, 'query'> & ({ variables: GenePageAssociatedStudiesQueryQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GenePageAssociatedStudiesQueryComponent = (props: GenePageAssociatedStudiesQueryComponentProps) => (
      <ApolloReactComponents.Query<GenePageAssociatedStudiesQueryQuery, GenePageAssociatedStudiesQueryQueryVariables> query={GenePageAssociatedStudiesQueryDocument} {...props} />
    );
    
export type GenePageAssociatedStudiesQueryProps<TChildProps = {}> = ApolloReactHoc.DataProps<GenePageAssociatedStudiesQueryQuery, GenePageAssociatedStudiesQueryQueryVariables> & TChildProps;
export function withGenePageAssociatedStudiesQuery<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GenePageAssociatedStudiesQueryQuery,
  GenePageAssociatedStudiesQueryQueryVariables,
  GenePageAssociatedStudiesQueryProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GenePageAssociatedStudiesQueryQuery, GenePageAssociatedStudiesQueryQueryVariables, GenePageAssociatedStudiesQueryProps<TChildProps>>(GenePageAssociatedStudiesQueryDocument, {
      alias: 'genePageAssociatedStudiesQuery',
      ...operationOptions
    });
};
export type GenePageAssociatedStudiesQueryQueryResult = ApolloReactCommon.QueryResult<GenePageAssociatedStudiesQueryQuery, GenePageAssociatedStudiesQueryQueryVariables>;
export const GenePageColocalisingStudiesQueryDocument = gql`
    query GenePageColocalisingStudiesQuery($geneId: String!) {
  colocalisationsForGene(geneId: $geneId) {
    leftVariant {
      id
      rsId
    }
    study {
      studyId
      traitReported
      pubAuthor
      pubDate
      pmid
      hasSumsStats
    }
    qtlStudyId
    phenotypeId
    tissue {
      id
      name
    }
    h3
    h4
    log2h4h3
  }
}
    `;
export type GenePageColocalisingStudiesQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GenePageColocalisingStudiesQueryQuery, GenePageColocalisingStudiesQueryQueryVariables>, 'query'> & ({ variables: GenePageColocalisingStudiesQueryQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GenePageColocalisingStudiesQueryComponent = (props: GenePageColocalisingStudiesQueryComponentProps) => (
      <ApolloReactComponents.Query<GenePageColocalisingStudiesQueryQuery, GenePageColocalisingStudiesQueryQueryVariables> query={GenePageColocalisingStudiesQueryDocument} {...props} />
    );
    
export type GenePageColocalisingStudiesQueryProps<TChildProps = {}> = ApolloReactHoc.DataProps<GenePageColocalisingStudiesQueryQuery, GenePageColocalisingStudiesQueryQueryVariables> & TChildProps;
export function withGenePageColocalisingStudiesQuery<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GenePageColocalisingStudiesQueryQuery,
  GenePageColocalisingStudiesQueryQueryVariables,
  GenePageColocalisingStudiesQueryProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GenePageColocalisingStudiesQueryQuery, GenePageColocalisingStudiesQueryQueryVariables, GenePageColocalisingStudiesQueryProps<TChildProps>>(GenePageColocalisingStudiesQueryDocument, {
      alias: 'genePageColocalisingStudiesQuery',
      ...operationOptions
    });
};
export type GenePageColocalisingStudiesQueryQueryResult = ApolloReactCommon.QueryResult<GenePageColocalisingStudiesQueryQuery, GenePageColocalisingStudiesQueryQueryVariables>;