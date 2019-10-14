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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};


export type Abstract = {
   __typename?: 'Abstract',
  title: Scalars['String'],
};

export enum AssociationType {
  Resistant = 'RESISTANT',
  Responsive = 'RESPONSIVE',
  NotResponsive = 'NOT_RESPONSIVE',
  IncreasedToxicity = 'INCREASED_TOXICITY'
}

export type Author = {
   __typename?: 'Author',
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  initials?: Maybe<Scalars['String']>,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type CancerHallmarkPromotionAndSuppression = {
   __typename?: 'CancerHallmarkPromotionAndSuppression',
  name: Scalars['String'],
  promotes: Scalars['Boolean'],
  suppresses: Scalars['Boolean'],
};

export type CancerHallmarkPublication = {
   __typename?: 'CancerHallmarkPublication',
  pmId: Scalars['String'],
  description: Scalars['String'],
};

export type CancerHallmarkPublicationFullDetails = {
   __typename?: 'CancerHallmarkPublicationFullDetails',
  name: Scalars['String'],
  promotes: Scalars['Boolean'],
  suppresses: Scalars['Boolean'],
  description: Scalars['String'],
  pmId: Scalars['String'],
};

export type CancerHallmarkPublicationsByHallmark = {
   __typename?: 'CancerHallmarkPublicationsByHallmark',
  name: Scalars['String'],
  promotes: Scalars['Boolean'],
  suppresses: Scalars['Boolean'],
  publications: Array<CancerHallmarkPublication>,
};

export type CancerHallmarkRoleInCancer = {
   __typename?: 'CancerHallmarkRoleInCancer',
  name: Scalars['String'],
  pmId: Scalars['String'],
};

export type CategoryFacetItem = {
   __typename?: 'CategoryFacetItem',
  itemId: Scalars['String'],
  name: Scalars['String'],
  count: Scalars['Int'],
};

export type ClinicalTrial = {
   __typename?: 'ClinicalTrial',
  phase: Scalars['Int'],
  status?: Maybe<ClinicalTrialStatus>,
  sourceUrl: Scalars['String'],
  sourceName: Scalars['String'],
};

export enum ClinicalTrialStatus {
  ActiveNotRecruiting = 'ACTIVE_NOT_RECRUITING',
  Completed = 'COMPLETED',
  NotApplicable = 'NOT_APPLICABLE',
  NotYetRecruiting = 'NOT_YET_RECRUITING',
  Recruiting = 'RECRUITING',
  Suspended = 'SUSPENDED',
  Terminated = 'TERMINATED',
  UnknownStatus = 'UNKNOWN_STATUS',
  Withdrawn = 'WITHDRAWN',
  EnrollingByInvitation = 'ENROLLING_BY_INVITATION'
}

export enum DataSource {
  GwasCatalog = 'GWAS_CATALOG',
  PhewasCatalog = 'PHEWAS_CATALOG',
  Eva = 'EVA',
  EvaSomatic = 'EVA_SOMATIC',
  Gene2Phenotype = 'GENE2PHENOTYPE',
  GenomicsEngland = 'GENOMICS_ENGLAND',
  Intogen = 'INTOGEN',
  CancerGeneCensus = 'CANCER_GENE_CENSUS',
  Reactome = 'REACTOME',
  Progeny = 'PROGENY',
  Slapenrich = 'SLAPENRICH',
  Crispr = 'CRISPR',
  Sysbio = 'SYSBIO',
  Chembl = 'CHEMBL',
  ExpressionAtlas = 'EXPRESSION_ATLAS',
  Europepmc = 'EUROPEPMC',
  Phenodigm = 'PHENODIGM',
  Uniprot = 'UNIPROT',
  UniprotSomatic = 'UNIPROT_SOMATIC',
  UniprotLiterature = 'UNIPROT_LITERATURE'
}

export type DataSourceFacetItem = {
   __typename?: 'DataSourceFacetItem',
  itemId: DataSource,
  name: Scalars['String'],
  count: Scalars['Int'],
};

export enum DataType {
  GeneticAssociation = 'GENETIC_ASSOCIATION',
  SomaticMutation = 'SOMATIC_MUTATION',
  KnownDrugs = 'KNOWN_DRUGS',
  Pathways = 'PATHWAYS',
  DifferentialExpression = 'DIFFERENTIAL_EXPRESSION',
  AnimalModels = 'ANIMAL_MODELS',
  TextMining = 'TEXT_MINING'
}

export type DataTypeFacetItem = {
   __typename?: 'DataTypeFacetItem',
  itemId: DataType,
  name: Scalars['String'],
  count: Scalars['Int'],
  children?: Maybe<Array<DataSourceFacetItem>>,
};

export type DifferentialExpressionActivity = {
   __typename?: 'DifferentialExpressionActivity',
  url: Scalars['String'],
  name: Scalars['String'],
};

export type DifferentialExpressionExperiment = {
   __typename?: 'DifferentialExpressionExperiment',
  url: Scalars['String'],
  name: Scalars['String'],
};

export type Disease = {
   __typename?: 'Disease',
  id: Scalars['String'],
  name: Scalars['String'],
  description: Scalars['String'],
  synonyms: Array<Scalars['String']>,
  therapeuticAreas: Array<Disease>,
  summaries: DiseaseSummaries,
  details: DiseaseDetails,
  targetsConnection: DiseaseTargetsConnection,
};


export type DiseaseTargetsConnectionArgs = {
  facets?: Maybe<DiseaseTargetsConnectionFacetsInput>,
  sortBy?: Maybe<DiseaseTargetsConnectionSortByInput>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  search?: Maybe<Scalars['String']>
};

export type DiseaseDetailDrugs = {
   __typename?: 'DiseaseDetailDrugs',
  rows: Array<EvidenceRowDrugs>,
};

export type DiseaseDetailOntology = {
   __typename?: 'DiseaseDetailOntology',
  nodes: Array<DiseaseOntologyNode>,
  therapeuticAreas: Array<Scalars['String']>,
};

export type DiseaseDetailPhenotypes = {
   __typename?: 'DiseaseDetailPhenotypes',
  rows: Array<DiseasePhenotype>,
};

export type DiseaseDetailRelatedDiseases = {
   __typename?: 'DiseaseDetailRelatedDiseases',
  rows: Array<RowRelatedDisease>,
  expanded: Array<ExpandedRowRelatedDisease>,
};


export type DiseaseDetailRelatedDiseasesExpandedArgs = {
  otherEfoId: Scalars['String']
};

export type DiseaseDetails = {
   __typename?: 'DiseaseDetails',
  drugs?: Maybe<DiseaseDetailDrugs>,
  ontology?: Maybe<DiseaseDetailOntology>,
  phenotypes?: Maybe<DiseaseDetailPhenotypes>,
  relatedDiseases?: Maybe<DiseaseDetailRelatedDiseases>,
};

export type DiseaseOntology = {
   __typename?: 'DiseaseOntology',
  nodes: Array<DiseaseOntologyNode>,
  therapeuticAreas: Array<Scalars['String']>,
};

export type DiseaseOntologyNode = {
   __typename?: 'DiseaseOntologyNode',
  id: Scalars['String'],
  name: Scalars['String'],
  parentIds: Array<Scalars['String']>,
};

export type DiseasePhenotype = {
   __typename?: 'DiseasePhenotype',
  id: Scalars['String'],
  name: Scalars['String'],
  url: Scalars['String'],
};

export type DiseaseSummaries = {
   __typename?: 'DiseaseSummaries',
  drugs?: Maybe<DiseaseSummaryDrugs>,
  ontology?: Maybe<DiseaseSummaryOntology>,
  phenotypes?: Maybe<DiseaseSummaryPhenotypes>,
  relatedDiseases?: Maybe<DiseaseSummaryRelatedDiseases>,
};

export type DiseaseSummaryDrugs = {
   __typename?: 'DiseaseSummaryDrugs',
  drugCount: Scalars['Int'],
  sources: Array<Source>,
};

export type DiseaseSummaryOntology = {
   __typename?: 'DiseaseSummaryOntology',
  isTherapeuticArea: Scalars['Boolean'],
  isLeaf: Scalars['Boolean'],
  sources: Array<Source>,
};

export type DiseaseSummaryPhenotypes = {
   __typename?: 'DiseaseSummaryPhenotypes',
  phenotypesCount: Scalars['Int'],
  sources: Array<Source>,
};

export type DiseaseSummaryRelatedDiseases = {
   __typename?: 'DiseaseSummaryRelatedDiseases',
  relatedDiseasesCount: Scalars['Int'],
  sources: Array<Source>,
};

export type DiseaseTargetsConnection = {
   __typename?: 'DiseaseTargetsConnection',
  totalCount: Scalars['Int'],
  facets: DiseaseTargetsConnectionFacets,
  edges: Array<DiseaseTargetsConnectionEdge>,
  pageInfo: PageInfo,
};

export type DiseaseTargetsConnectionEdge = {
   __typename?: 'DiseaseTargetsConnectionEdge',
  id: Scalars['String'],
  node: Target,
  score: Scalars['Float'],
  scoresByDataType: Array<ScoreForDataType>,
  scoresByDataSource: Array<ScoreForDataSource>,
};

export type DiseaseTargetsConnectionFacetDataTypeAndSource = {
   __typename?: 'DiseaseTargetsConnectionFacetDataTypeAndSource',
  items: Array<DataTypeFacetItem>,
};

export type DiseaseTargetsConnectionFacetInputDataTypeAndSource = {
  dataTypeIds?: Maybe<Array<DataType>>,
  dataSourceIds?: Maybe<Array<DataSource>>,
};

export type DiseaseTargetsConnectionFacetInputPathways = {
  pathwayIds?: Maybe<Array<Scalars['String']>>,
};

export type DiseaseTargetsConnectionFacetInputTargetClass = {
  targetClassIds?: Maybe<Array<Scalars['String']>>,
};

export type DiseaseTargetsConnectionFacetInputTissueSpecificity = {
  tissueIds?: Maybe<Array<Scalars['String']>>,
};

export type DiseaseTargetsConnectionFacetInputTractability = {
  tractabilityIds?: Maybe<Array<Scalars['String']>>,
};

export type DiseaseTargetsConnectionFacetPathways = {
   __typename?: 'DiseaseTargetsConnectionFacetPathways',
  items: Array<SinglyNestedCategoryFacetItem>,
};

export type DiseaseTargetsConnectionFacets = {
   __typename?: 'DiseaseTargetsConnectionFacets',
  dataTypeAndSource?: Maybe<DiseaseTargetsConnectionFacetDataTypeAndSource>,
  pathways?: Maybe<DiseaseTargetsConnectionFacetPathways>,
  targetClass?: Maybe<DiseaseTargetsConnectionFacetTargetClass>,
  tractability?: Maybe<DiseaseTargetsConnectionFacetTractability>,
  tissueSpecificity?: Maybe<DiseaseTargetsConnectionFacetTissueSpecificity>,
};

export type DiseaseTargetsConnectionFacetsInput = {
  dataTypeAndSource?: Maybe<DiseaseTargetsConnectionFacetInputDataTypeAndSource>,
  pathways?: Maybe<DiseaseTargetsConnectionFacetInputPathways>,
  targetClass?: Maybe<DiseaseTargetsConnectionFacetInputTargetClass>,
  tractability?: Maybe<DiseaseTargetsConnectionFacetInputTractability>,
  tissueSpecificity?: Maybe<DiseaseTargetsConnectionFacetInputTissueSpecificity>,
};

export type DiseaseTargetsConnectionFacetTargetClass = {
   __typename?: 'DiseaseTargetsConnectionFacetTargetClass',
  items: Array<SinglyNestedCategoryFacetItem>,
};

export type DiseaseTargetsConnectionFacetTissueSpecificity = {
   __typename?: 'DiseaseTargetsConnectionFacetTissueSpecificity',
  items: Array<TissueSpecificityFacetItem>,
};

export type DiseaseTargetsConnectionFacetTractability = {
   __typename?: 'DiseaseTargetsConnectionFacetTractability',
  items: Array<CategoryFacetItem>,
};

export enum DiseaseTargetsConnectionSortByField {
  GeneticAssociation = 'GENETIC_ASSOCIATION',
  SomaticMutation = 'SOMATIC_MUTATION',
  KnownDrugs = 'KNOWN_DRUGS',
  Pathways = 'PATHWAYS',
  DifferentialExpression = 'DIFFERENTIAL_EXPRESSION',
  AnimalModels = 'ANIMAL_MODELS',
  TextMining = 'TEXT_MINING',
  ScoreOverall = 'SCORE_OVERALL',
  TargetSymbol = 'TARGET_SYMBOL'
}

export type DiseaseTargetsConnectionSortByInput = {
  field: DiseaseTargetsConnectionSortByField,
  ascending: Scalars['Boolean'],
};

export type Drug = {
   __typename?: 'Drug',
  id: Scalars['String'],
  name: Scalars['String'],
  synonyms: Array<Scalars['String']>,
  tradeNames: Array<Scalars['String']>,
  yearOfFirstApproval?: Maybe<Scalars['String']>,
  type: Scalars['String'],
  maximumClinicalTrialPhase?: Maybe<Scalars['Int']>,
  hasBeenWithdrawn: Scalars['Boolean'],
  withdrawnNotice?: Maybe<WithdrawnNotice>,
  summaries: DrugSummaries,
  details: DrugDetails,
  internalCompound: Scalars['Boolean'],
};

export enum DrugActivity {
  PositiveModulator = 'POSITIVE_MODULATOR',
  NegativeModulator = 'NEGATIVE_MODULATOR',
  Other = 'OTHER'
}

export type DrugDetailLinkedDiseases = {
   __typename?: 'DrugDetailLinkedDiseases',
  rows: Array<Disease>,
};

export type DrugDetailLinkedTargets = {
   __typename?: 'DrugDetailLinkedTargets',
  rows: Array<Target>,
};

export type DrugDetailMechanismsOfAction = {
   __typename?: 'DrugDetailMechanismsOfAction',
  rows: Array<MechanismOfActionRow>,
};

export type DrugDetails = {
   __typename?: 'DrugDetails',
  mechanismsOfAction?: Maybe<DrugDetailMechanismsOfAction>,
  linkedTargets?: Maybe<DrugDetailLinkedTargets>,
  linkedDiseases?: Maybe<DrugDetailLinkedDiseases>,
};

export type DrugSummaries = {
   __typename?: 'DrugSummaries',
  mechanismsOfAction?: Maybe<DrugSummaryMechanismsOfAction>,
  linkedTargets?: Maybe<DrugSummaryLinkedTargets>,
  linkedDiseases?: Maybe<DrugSummaryLinkedDiseases>,
};

export type DrugSummaryLinkedDiseases = {
   __typename?: 'DrugSummaryLinkedDiseases',
  linkedDiseaseCount: Scalars['Int'],
  sources: Array<Source>,
};

export type DrugSummaryLinkedTargets = {
   __typename?: 'DrugSummaryLinkedTargets',
  linkedTargetCount: Scalars['Int'],
  sources: Array<Source>,
};

export type DrugSummaryMechanismsOfAction = {
   __typename?: 'DrugSummaryMechanismsOfAction',
  uniqueActionTypes: Array<Scalars['String']>,
  uniqueTargetTypes: Array<Scalars['String']>,
  sources: Array<Source>,
};

export enum DrugType {
  SmallMolecule = 'SMALL_MOLECULE',
  Protein = 'PROTEIN',
  Enzyme = 'ENZYME',
  Antibody = 'ANTIBODY',
  Oligosaccharide = 'OLIGOSACCHARIDE',
  Oligonucleotide = 'OLIGONUCLEOTIDE',
  Unknown = 'UNKNOWN'
}

export type EvDrug = {
   __typename?: 'EvDrug',
  id: Scalars['String'],
  name: Scalars['String'],
  type: DrugType,
  activity: DrugActivity,
};

export type Evidence = {
   __typename?: 'Evidence',
  summaries: EvidenceSummaries,
  details: EvidenceDetails,
};

export type EvidenceDetailAnimalModels = {
   __typename?: 'EvidenceDetailAnimalModels',
  rows: Array<EvidenceRowAnimalModels>,
};

export type EvidenceDetailCancerGeneCensus = {
   __typename?: 'EvidenceDetailCancerGeneCensus',
  rows: Array<EvidenceRowCancerGeneCensus>,
};

export type EvidenceDetailCrispr = {
   __typename?: 'EvidenceDetailCrispr',
  rows: Array<EvidenceRowCrispr>,
};

export type EvidenceDetailDifferentialExpression = {
   __typename?: 'EvidenceDetailDifferentialExpression',
  rows: Array<EvidenceRowDifferentialExpression>,
};

export type EvidenceDetailDrugs = {
   __typename?: 'EvidenceDetailDrugs',
  rows: Array<EvidenceRowDrugs>,
};

export type EvidenceDetailEva = {
   __typename?: 'EvidenceDetailEva',
  rows: Array<EvidenceRowEva>,
};

export type EvidenceDetailEvaSomatic = {
   __typename?: 'EvidenceDetailEvaSomatic',
  rows: Array<EvidenceRowEvaSomatic>,
};

export type EvidenceDetailGene2Phenotype = {
   __typename?: 'EvidenceDetailGene2Phenotype',
  rows: Array<EvidenceRowGene2Phenotype>,
};

export type EvidenceDetailGenomicsEngland = {
   __typename?: 'EvidenceDetailGenomicsEngland',
  rows: Array<EvidenceRowGenomicsEngland>,
};

export type EvidenceDetailGwasCatalog = {
   __typename?: 'EvidenceDetailGwasCatalog',
  rows: Array<EvidenceRowGwasCatalog>,
};

export type EvidenceDetailIntogen = {
   __typename?: 'EvidenceDetailIntogen',
  rows: Array<EvidenceRowIntogen>,
};

export type EvidenceDetailPhewasCatalog = {
   __typename?: 'EvidenceDetailPhewasCatalog',
  rows: Array<EvidenceRowPhewasCatalog>,
};

export type EvidenceDetailProgeny = {
   __typename?: 'EvidenceDetailProgeny',
  rows: Array<EvidenceRowProgeny>,
};

export type EvidenceDetailReactome = {
   __typename?: 'EvidenceDetailReactome',
  rows: Array<EvidenceRowReactome>,
};

export type EvidenceDetails = {
   __typename?: 'EvidenceDetails',
  animalModels?: Maybe<EvidenceDetailAnimalModels>,
  differentialExpression?: Maybe<EvidenceDetailDifferentialExpression>,
  drugs?: Maybe<EvidenceDetailDrugs>,
  gwasCatalog?: Maybe<EvidenceDetailGwasCatalog>,
  intogen?: Maybe<EvidenceDetailIntogen>,
  cancerGeneCensus?: Maybe<EvidenceDetailCancerGeneCensus>,
  phewasCatalog?: Maybe<EvidenceDetailPhewasCatalog>,
  reactome?: Maybe<EvidenceDetailReactome>,
  slapenrich?: Maybe<EvidenceDetailSlapenrich>,
  progeny?: Maybe<EvidenceDetailProgeny>,
  crispr?: Maybe<EvidenceDetailCrispr>,
  sysBio?: Maybe<EvidenceDetailSysBio>,
  eva?: Maybe<EvidenceDetailEva>,
  evaSomatic?: Maybe<EvidenceDetailEvaSomatic>,
  gene2Phenotype?: Maybe<EvidenceDetailGene2Phenotype>,
  genomicsEngland?: Maybe<EvidenceDetailGenomicsEngland>,
  uniProt?: Maybe<EvidenceDetailUniProt>,
  uniProtLiterature?: Maybe<EvidenceDetailUniProtLiterature>,
  uniProtSomatic?: Maybe<EvidenceDetailUniProtSomatic>,
  textMining?: Maybe<EvidenceDetailTextMining>,
};

export type EvidenceDetailSlapenrich = {
   __typename?: 'EvidenceDetailSlapenrich',
  rows: Array<EvidenceRowSlapenrich>,
};

export type EvidenceDetailSysBio = {
   __typename?: 'EvidenceDetailSysBio',
  rows: Array<EvidenceRowSysBio>,
};

export type EvidenceDetailTextMining = {
   __typename?: 'EvidenceDetailTextMining',
  rows: Array<EvidenceRowTextMining>,
  textMiningCount: Scalars['Int'],
};

export type EvidenceDetailUniProt = {
   __typename?: 'EvidenceDetailUniProt',
  rows: Array<EvidenceRowUniProt>,
};

export type EvidenceDetailUniProtLiterature = {
   __typename?: 'EvidenceDetailUniProtLiterature',
  rows: Array<EvidenceRowUniProtLiterature>,
};

export type EvidenceDetailUniProtSomatic = {
   __typename?: 'EvidenceDetailUniProtSomatic',
  rows: Array<EvidenceRowUniProtSomatic>,
};

export type EvidenceMechanismOfAction = {
   __typename?: 'EvidenceMechanismOfAction',
  name: Scalars['String'],
  sourceUrl?: Maybe<Scalars['String']>,
  sourceName?: Maybe<Scalars['String']>,
};

export type EvidenceRowAnimalModels = {
   __typename?: 'EvidenceRowAnimalModels',
  disease: Disease,
  humanPhenotypes: Array<Phenotype>,
  modelPhenotypes: Array<Phenotype>,
  modelId: Scalars['String'],
  allelicComposition: Scalars['String'],
  geneticBackground: Scalars['String'],
  source: Source,
};

export type EvidenceRowCancerGeneCensus = {
   __typename?: 'EvidenceRowCancerGeneCensus',
  disease: Disease,
  mutationType: Scalars['String'],
  inheritancePattern: InheritancePattern,
  samplesWithMutationTypeCount: Scalars['Int'],
  mutatedSamplesCount: Scalars['Int'],
  source: Source,
  pmIds: Array<Scalars['String']>,
};

export type EvidenceRowCrispr = {
   __typename?: 'EvidenceRowCrispr',
  disease: Disease,
  score: Scalars['Float'],
  method: Scalars['String'],
  pmId: Scalars['String'],
};

export type EvidenceRowDifferentialExpression = {
   __typename?: 'EvidenceRowDifferentialExpression',
  disease: Disease,
  tissue: Tissue,
  activity: DifferentialExpressionActivity,
  comparison: Scalars['String'],
  evidenceSource: Scalars['String'],
  log2FoldChange: Scalars['Float'],
  percentileRank: Scalars['Int'],
  pval: Scalars['Float'],
  experiment: DifferentialExpressionExperiment,
  pmIds: Array<Scalars['String']>,
};

export type EvidenceRowDrugs = {
   __typename?: 'EvidenceRowDrugs',
  target: Target,
  disease: Disease,
  drug: EvDrug,
  clinicalTrial: ClinicalTrial,
  mechanismOfAction: EvidenceMechanismOfAction,
};

export type EvidenceRowEva = {
   __typename?: 'EvidenceRowEva',
  disease: Disease,
  rsId: Scalars['String'],
  clinVarId: Scalars['String'],
  vepConsequence: VepConsequence,
  clinicalSignificance: Scalars['String'],
  pmId?: Maybe<Scalars['String']>,
};

export type EvidenceRowEvaSomatic = {
   __typename?: 'EvidenceRowEvaSomatic',
  disease: Disease,
  rsId: Scalars['String'],
  clinVarId: Scalars['String'],
  vepConsequence: VepConsequence,
  clinicalSignificance: Scalars['String'],
  pmId?: Maybe<Scalars['String']>,
};

export type EvidenceRowGene2Phenotype = {
   __typename?: 'EvidenceRowGene2Phenotype',
  disease: Disease,
  panelsUrl: Scalars['String'],
  pmId: Scalars['String'],
};

export type EvidenceRowGenomicsEngland = {
   __typename?: 'EvidenceRowGenomicsEngland',
  disease: Disease,
  panel: GenomicsEnglandPanel,
  source?: Maybe<Source>,
};

export type EvidenceRowGwasCatalog = {
   __typename?: 'EvidenceRowGwasCatalog',
  disease: Disease,
  rsId: Scalars['String'],
  pval: Scalars['Float'],
  oddsRatio?: Maybe<Scalars['Float']>,
  confidenceInterval?: Maybe<Scalars['String']>,
  vepConsequence?: Maybe<VepConsequence>,
  source: Source,
};

export type EvidenceRowIntogen = {
   __typename?: 'EvidenceRowIntogen',
  disease: Disease,
  activity: IntogenActivity,
  inheritancePattern: InheritancePattern,
  source: Source,
  pmId: Scalars['String'],
};

export type EvidenceRowPhewasCatalog = {
   __typename?: 'EvidenceRowPhewasCatalog',
  disease: Disease,
  rsId: Scalars['String'],
  pval: Scalars['Float'],
  oddsRatio?: Maybe<Scalars['Float']>,
  confidenceInterval?: Maybe<Scalars['String']>,
  vepConsequence?: Maybe<VepConsequence>,
  source: Source,
};

export type EvidenceRowProgeny = {
   __typename?: 'EvidenceRowProgeny',
  disease: Disease,
  pathway: ReactomePathway,
  source: Source,
};

export type EvidenceRowReactome = {
   __typename?: 'EvidenceRowReactome',
  activity?: Maybe<ReactomeActivity>,
  disease: Disease,
  pathway: ReactomePathway,
  mutations: Array<Scalars['String']>,
  source: Source,
};

export type EvidenceRowSlapenrich = {
   __typename?: 'EvidenceRowSlapenrich',
  disease: Disease,
  pathway: ReactomePathway,
  source: Source,
};

export type EvidenceRowSysBio = {
   __typename?: 'EvidenceRowSysBio',
  disease: Disease,
  geneSet: Scalars['String'],
  method: Scalars['String'],
  pmId: Scalars['String'],
};

export type EvidenceRowTextMining = {
   __typename?: 'EvidenceRowTextMining',
  access: Scalars['String'],
  disease: Disease,
  journal: Journal,
  publication: Publication,
  relevance: Scalars['Float'],
};

export type EvidenceRowUniProt = {
   __typename?: 'EvidenceRowUniProt',
  disease: Disease,
  rsId: Scalars['String'],
  vepConsequence: VepConsequence,
  source: Source,
  pmIds: Array<Scalars['String']>,
};

export type EvidenceRowUniProtLiterature = {
   __typename?: 'EvidenceRowUniProtLiterature',
  disease: Disease,
  source: Source,
  pmIds: Array<Scalars['String']>,
};

export type EvidenceRowUniProtSomatic = {
   __typename?: 'EvidenceRowUniProtSomatic',
  disease: Disease,
  vepConsequence: VepConsequence,
  source: Source,
  pmIds: Array<Scalars['String']>,
};

export type EvidenceSummaries = {
   __typename?: 'EvidenceSummaries',
  animalModels?: Maybe<EvidenceSummaryAnimalModels>,
  differentialExpression?: Maybe<EvidenceSummaryDifferentialExpression>,
  drugs?: Maybe<EvidenceSummaryDrugs>,
  gwasCatalog?: Maybe<EvidenceSummaryGwasCatalog>,
  intogen?: Maybe<EvidenceSummaryIntogen>,
  cancerGeneCensus?: Maybe<EvidenceSummaryCancerGeneCensus>,
  phewasCatalog?: Maybe<EvidenceSummaryPhewasCatalog>,
  reactome?: Maybe<EvidenceSummaryReactome>,
  slapenrich?: Maybe<EvidenceSummarySlapenrich>,
  progeny?: Maybe<EvidenceSummaryProgeny>,
  crispr?: Maybe<EvidenceSummaryCrispr>,
  sysBio?: Maybe<EvidenceSummarySysBio>,
  eva?: Maybe<EvidenceSummaryEva>,
  evaSomatic?: Maybe<EvidenceSummaryEvaSomatic>,
  gene2Phenotype?: Maybe<EvidenceSummaryGene2Phenotype>,
  genomicsEngland?: Maybe<EvidenceSummaryGenomicsEngland>,
  uniProt?: Maybe<EvidenceSummaryUniProt>,
  uniProtLiterature?: Maybe<EvidenceSummaryUniProtLiterature>,
  uniProtSomatic?: Maybe<EvidenceSummaryUniProtSomatic>,
  textMining?: Maybe<EvidenceSummaryTextMining>,
};

export type EvidenceSummaryAnimalModels = {
   __typename?: 'EvidenceSummaryAnimalModels',
  mouseModelCount: Scalars['Int'],
  sources: Array<Source>,
};

export type EvidenceSummaryCancerGeneCensus = {
   __typename?: 'EvidenceSummaryCancerGeneCensus',
  hasMutations: Scalars['Boolean'],
  sources: Array<Source>,
};

export type EvidenceSummaryCrispr = {
   __typename?: 'EvidenceSummaryCrispr',
  hasCrispr: Scalars['Boolean'],
  sources: Array<Source>,
};

export type EvidenceSummaryDifferentialExpression = {
   __typename?: 'EvidenceSummaryDifferentialExpression',
  experimentCount: Scalars['Int'],
  sources: Array<Source>,
};

export type EvidenceSummaryDrugs = {
   __typename?: 'EvidenceSummaryDrugs',
  drugCount: Scalars['Int'],
  sources: Array<Source>,
};

export type EvidenceSummaryEva = {
   __typename?: 'EvidenceSummaryEva',
  variantCount: Scalars['Int'],
  sources: Array<Source>,
};

export type EvidenceSummaryEvaSomatic = {
   __typename?: 'EvidenceSummaryEvaSomatic',
  variantCount: Scalars['Int'],
  sources: Array<Source>,
};

export type EvidenceSummaryGene2Phenotype = {
   __typename?: 'EvidenceSummaryGene2Phenotype',
  hasPanel: Scalars['Boolean'],
  sources: Array<Source>,
};

export type EvidenceSummaryGenomicsEngland = {
   __typename?: 'EvidenceSummaryGenomicsEngland',
  hasPanel: Scalars['Boolean'],
  sources: Array<Source>,
};

export type EvidenceSummaryGwasCatalog = {
   __typename?: 'EvidenceSummaryGwasCatalog',
  variantCount: Scalars['Int'],
  sources: Array<Source>,
};

export type EvidenceSummaryIntogen = {
   __typename?: 'EvidenceSummaryIntogen',
  hasMutations: Scalars['Boolean'],
  sources: Array<Source>,
};

export type EvidenceSummaryPhewasCatalog = {
   __typename?: 'EvidenceSummaryPhewasCatalog',
  variantCount: Scalars['Int'],
  sources: Array<Source>,
};

export type EvidenceSummaryProgeny = {
   __typename?: 'EvidenceSummaryProgeny',
  pathwayCount: Scalars['Int'],
  sources: Array<Source>,
};

export type EvidenceSummaryReactome = {
   __typename?: 'EvidenceSummaryReactome',
  pathwayCount: Scalars['Int'],
  sources: Array<Source>,
};

export type EvidenceSummarySlapenrich = {
   __typename?: 'EvidenceSummarySlapenrich',
  pathwayCount: Scalars['Int'],
  sources: Array<Source>,
};

export type EvidenceSummarySysBio = {
   __typename?: 'EvidenceSummarySysBio',
  hasSysBio: Scalars['Boolean'],
  sources: Array<Source>,
};

export type EvidenceSummaryTextMining = {
   __typename?: 'EvidenceSummaryTextMining',
  textMiningCount: Scalars['Int'],
  sources: Array<Source>,
};

export type EvidenceSummaryUniProt = {
   __typename?: 'EvidenceSummaryUniProt',
  variantCount: Scalars['Int'],
  sources: Array<Source>,
};

export type EvidenceSummaryUniProtLiterature = {
   __typename?: 'EvidenceSummaryUniProtLiterature',
  hasVariants: Scalars['Boolean'],
  sources: Array<Source>,
};

export type EvidenceSummaryUniProtSomatic = {
   __typename?: 'EvidenceSummaryUniProtSomatic',
  hasVariants: Scalars['Boolean'],
  sources: Array<Source>,
};

export type ExpandedRowRelatedDisease = {
   __typename?: 'ExpandedRowRelatedDisease',
  target: Target,
  associationScoreA: Scalars['Float'],
  associationScoreB: Scalars['Float'],
};

export type ExpandedRowRelatedTarget = {
   __typename?: 'ExpandedRowRelatedTarget',
  disease: Disease,
  associationScoreA: Scalars['Float'],
  associationScoreB: Scalars['Float'],
};

export enum GeneOntologyCategory {
  CellularComponent = 'CELLULAR_COMPONENT',
  BiologicalProcess = 'BIOLOGICAL_PROCESS',
  MolecularFunction = 'MOLECULAR_FUNCTION'
}

export type GenomicsEnglandPanel = {
   __typename?: 'GenomicsEnglandPanel',
  id: Scalars['String'],
  url: Scalars['String'],
};

export type HomologyRow = {
   __typename?: 'HomologyRow',
  dNdS?: Maybe<Scalars['Float']>,
  species: Scalars['String'],
  speciesId: Scalars['String'],
  homologyType: Scalars['String'],
  queryPercentageIdentity: Scalars['Float'],
  targetPercentageIdentity: Scalars['Float'],
  targetGeneId: Scalars['String'],
  targetGeneSymbol?: Maybe<Scalars['String']>,
};

export enum InheritancePattern {
  XLinkedRecessive = 'X_LINKED_RECESSIVE',
  DominantOrRecessive = 'DOMINANT_OR_RECESSIVE',
  Dominant = 'DOMINANT',
  Recessive = 'RECESSIVE',
  Unknown = 'UNKNOWN'
}

export enum IntogenActivity {
  GainOfFunction = 'GAIN_OF_FUNCTION',
  LossOfFunction = 'LOSS_OF_FUNCTION',
  Unknown = 'UNKNOWN'
}

export type Journal = {
   __typename?: 'Journal',
  title: Scalars['String'],
  volume?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['String']>,
  year?: Maybe<Scalars['Int']>,
};

export type LowLevelReactomePathway = {
   __typename?: 'LowLevelReactomePathway',
  id: Scalars['String'],
  name: Scalars['String'],
  parents: Array<ReactomePathway>,
};

export type Match = {
   __typename?: 'Match',
  start: Scalars['Int'],
  end: Scalars['Int'],
};

export type MechanismOfActionRow = {
   __typename?: 'MechanismOfActionRow',
  mechanismOfAction: Scalars['String'],
  targetName: Scalars['String'],
  targets: Array<Target>,
  references: Array<Source>,
};

export type MousePhenotypeCategory = {
   __typename?: 'MousePhenotypeCategory',
  id: Scalars['String'],
  name: Scalars['String'],
  isAssociated: Scalars['Boolean'],
};

export type MousePhenotypeRow = {
   __typename?: 'MousePhenotypeRow',
  mouseGeneId: Scalars['String'],
  mouseGeneSymbol: Scalars['String'],
  categoryId: Scalars['String'],
  categoryLabel: Scalars['String'],
  phenotypeId: Scalars['String'],
  phenotypeLabel: Scalars['String'],
  subjectAllelicComposition: Array<Scalars['String']>,
  subjectBackground: Scalars['String'],
  pmIds: Array<Scalars['String']>,
};

export type OrthologuesBySpecies = {
   __typename?: 'OrthologuesBySpecies',
  species: Scalars['String'],
  speciesId: Scalars['String'],
  orthologuesCount: Scalars['Int'],
};

export type PageInfo = {
   __typename?: 'PageInfo',
  nextCursor?: Maybe<Scalars['String']>,
  hasNextPage: Scalars['Boolean'],
};

export type Pdb = {
   __typename?: 'Pdb',
  pdbId: Scalars['String'],
  chain?: Maybe<Scalars['String']>,
  start: Scalars['Int'],
  end: Scalars['Int'],
  coverage: Scalars['Float'],
  resolution?: Maybe<Scalars['Float']>,
  method: Scalars['String'],
};

export type Phenotype = {
   __typename?: 'Phenotype',
  id: Scalars['String'],
  name: Scalars['String'],
  url: Scalars['String'],
};

export type Protein = {
   __typename?: 'Protein',
  level: Scalars['Int'],
};

export type ProteinInteractionsGraphEdge = {
   __typename?: 'ProteinInteractionsGraphEdge',
  source: Scalars['String'],
  target: Scalars['String'],
  isDirected: Scalars['Boolean'],
  isStimulation: Scalars['Boolean'],
  isInhibition: Scalars['Boolean'],
  pmIds: Array<Scalars['String']>,
  sources: Array<Scalars['String']>,
  pathwaysSources: Array<Scalars['String']>,
  enzymeSubstrateSources: Array<Scalars['String']>,
  ppiSources: Array<Scalars['String']>,
};

export type ProteinInteractionsGraphNode = {
   __typename?: 'ProteinInteractionsGraphNode',
  uniprotId: Scalars['String'],
  ensgId: Scalars['String'],
  symbol: Scalars['String'],
};

export type Publication = {
   __typename?: 'Publication',
  id: Scalars['String'],
  title: Scalars['String'],
  date: Scalars['String'],
  authors: Array<Author>,
  url?: Maybe<Scalars['String']>,
  abstract?: Maybe<Scalars['String']>,
  matches?: Maybe<Array<Maybe<Array<Maybe<SectionMatch>>>>>,
};

export type Query = {
   __typename?: 'Query',
  target: Target,
  disease: Disease,
  drug: Drug,
  efo: DiseaseOntology,
  evidence: Evidence,
};


export type QueryTargetArgs = {
  ensgId: Scalars['String']
};


export type QueryDiseaseArgs = {
  efoId: Scalars['String']
};


export type QueryDrugArgs = {
  chemblId: Scalars['String']
};


export type QueryEvidenceArgs = {
  ensgId: Scalars['String'],
  efoId: Scalars['String'],
  from?: Maybe<Scalars['Int']>,
  size?: Maybe<Scalars['Int']>,
  sortBy?: Maybe<Scalars['String']>,
  order?: Maybe<Scalars['String']>
};

export enum ReactomeActivity {
  DecreasedTranscriptLevel = 'DECREASED_TRANSCRIPT_LEVEL',
  GainOfFunction = 'GAIN_OF_FUNCTION',
  LossOfFunction = 'LOSS_OF_FUNCTION',
  PartialLossOfFunction = 'PARTIAL_LOSS_OF_FUNCTION',
  UpOrDown = 'UP_OR_DOWN'
}

export type ReactomePathway = {
   __typename?: 'ReactomePathway',
  id: Scalars['String'],
  name: Scalars['String'],
};

export type Rna = {
   __typename?: 'Rna',
  value: Scalars['Float'],
  level: Scalars['Int'],
};

export type RowCancerBiomarkers = {
   __typename?: 'RowCancerBiomarkers',
  biomarker: Scalars['String'],
  diseases: Array<Disease>,
  drugName: Scalars['String'],
  associationType: AssociationType,
  evidenceLevel: Scalars['String'],
  sources: Array<Source>,
};

export type RowChemicalProbes = {
   __typename?: 'RowChemicalProbes',
  chemicalProbe: Scalars['String'],
  note?: Maybe<Scalars['String']>,
  sources: Array<Source>,
};

export type RowExpression = {
   __typename?: 'RowExpression',
  label: Scalars['String'],
  organs: Array<Scalars['String']>,
  anatomicalSystems: Array<Scalars['String']>,
  rna: Rna,
  protein: Protein,
};

export type RowGeneOntology = {
   __typename?: 'RowGeneOntology',
  id: Scalars['String'],
  term: Scalars['String'],
  category: GeneOntologyCategory,
};

export type RowRelatedDisease = {
   __typename?: 'RowRelatedDisease',
  A: Disease,
  B: Disease,
  targetCountA: Scalars['Int'],
  targetCountB: Scalars['Int'],
  targetCountAAndB: Scalars['Int'],
  targetCountAOrB: Scalars['Int'],
  score: Scalars['Float'],
};

export type RowRelatedTarget = {
   __typename?: 'RowRelatedTarget',
  A: Target,
  B: Target,
  diseaseCountA: Scalars['Int'],
  diseaseCountB: Scalars['Int'],
  diseaseCountAAndB: Scalars['Int'],
  diseaseCountAOrB: Scalars['Int'],
  score: Scalars['Float'],
};

export type ScoreForDataSource = {
   __typename?: 'ScoreForDataSource',
  dataSourceId: DataSource,
  score: Scalars['Float'],
};

export type ScoreForDataType = {
   __typename?: 'ScoreForDataType',
  dataTypeId: DataType,
  score: Scalars['Float'],
};

export type SectionMatch = {
   __typename?: 'SectionMatch',
  text: Scalars['String'],
  section: Scalars['String'],
  target?: Maybe<Match>,
  disease?: Maybe<Match>,
};

export type SinglyNestedCategoryFacetItem = {
   __typename?: 'SinglyNestedCategoryFacetItem',
  itemId: Scalars['String'],
  name: Scalars['String'],
  count: Scalars['Int'],
  children: Array<CategoryFacetItem>,
};

export type Source = {
   __typename?: 'Source',
  url: Scalars['String'],
  name?: Maybe<Scalars['String']>,
};

export type Target = {
   __typename?: 'Target',
  id: Scalars['String'],
  uniprotId: Scalars['String'],
  symbol: Scalars['String'],
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  synonyms: Array<Scalars['String']>,
  summaries: TargetSummaries,
  details: TargetDetails,
  diseasesConnection: TargetDiseasesConnection,
};


export type TargetDiseasesConnectionArgs = {
  facets?: Maybe<TargetDiseasesConnectionFacetsInput>,
  sortBy?: Maybe<TargetDiseasesConnectionSortByInput>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  search?: Maybe<Scalars['String']>
};

export type TargetDetailCancerBiomarkers = {
   __typename?: 'TargetDetailCancerBiomarkers',
  rows: Array<RowCancerBiomarkers>,
};

export type TargetDetailCancerHallmarks = {
   __typename?: 'TargetDetailCancerHallmarks',
  publicationsByHallmark: Array<CancerHallmarkPublicationsByHallmark>,
  roleInCancer: Array<CancerHallmarkRoleInCancer>,
  rows: Array<CancerHallmarkPublicationFullDetails>,
};

export type TargetDetailChemicalProbes = {
   __typename?: 'TargetDetailChemicalProbes',
  rows: Array<RowChemicalProbes>,
  probeMinerUrl?: Maybe<Scalars['String']>,
};

export type TargetDetailDrugs = {
   __typename?: 'TargetDetailDrugs',
  rows: Array<EvidenceRowDrugs>,
};

export type TargetDetailExpression = {
   __typename?: 'TargetDetailExpression',
  rows: Array<RowExpression>,
};

export type TargetDetailGeneOntology = {
   __typename?: 'TargetDetailGeneOntology',
  rows: Array<RowGeneOntology>,
};

export type TargetDetailHomology = {
   __typename?: 'TargetDetailHomology',
  rows: Array<HomologyRow>,
};

export type TargetDetailMousePhenotypes = {
   __typename?: 'TargetDetailMousePhenotypes',
  categories: Array<MousePhenotypeCategory>,
  rows: Array<MousePhenotypeRow>,
};

export type TargetDetailPathways = {
   __typename?: 'TargetDetailPathways',
  topLevelPathways: Array<TopLevelReactomePathway>,
  lowLevelPathways: Array<LowLevelReactomePathway>,
};

export type TargetDetailProtein = {
   __typename?: 'TargetDetailProtein',
  uniprotId?: Maybe<Scalars['String']>,
  pdbId?: Maybe<Scalars['String']>,
  pdbs: Array<Pdb>,
  keywords?: Maybe<Array<UniprotKeyword>>,
  subCellularLocations?: Maybe<Array<UniprotSubCellularLocation>>,
  subUnit?: Maybe<Array<Scalars['String']>>,
  structuralFeatures: Array<UniprotStructuralFeature>,
  sequenceLength?: Maybe<Scalars['Int']>,
};

export type TargetDetailProteinInteractions = {
   __typename?: 'TargetDetailProteinInteractions',
  nodes: Array<ProteinInteractionsGraphNode>,
  edges: Array<ProteinInteractionsGraphEdge>,
};

export type TargetDetailRelatedTargets = {
   __typename?: 'TargetDetailRelatedTargets',
  rows: Array<RowRelatedTarget>,
  expanded: Array<ExpandedRowRelatedTarget>,
};


export type TargetDetailRelatedTargetsExpandedArgs = {
  otherEnsgId: Scalars['String']
};

export type TargetDetails = {
   __typename?: 'TargetDetails',
  cancerBiomarkers?: Maybe<TargetDetailCancerBiomarkers>,
  cancerHallmarks?: Maybe<TargetDetailCancerHallmarks>,
  chemicalProbes?: Maybe<TargetDetailChemicalProbes>,
  drugs?: Maybe<TargetDetailDrugs>,
  expression?: Maybe<TargetDetailExpression>,
  geneOntology?: Maybe<TargetDetailGeneOntology>,
  homology?: Maybe<TargetDetailHomology>,
  mousePhenotypes?: Maybe<TargetDetailMousePhenotypes>,
  pathways?: Maybe<TargetDetailPathways>,
  protein?: Maybe<TargetDetailProtein>,
  proteinInteractions?: Maybe<TargetDetailProteinInteractions>,
  relatedTargets?: Maybe<TargetDetailRelatedTargets>,
  tractability?: Maybe<TargetDetailTractability>,
};

export type TargetDetailTractability = {
   __typename?: 'TargetDetailTractability',
  smallMolecule: Array<TractabilityAssessmentBucket>,
  antibody: Array<TractabilityAssessmentBucket>,
};

export type TargetDiseasesConnection = {
   __typename?: 'TargetDiseasesConnection',
  totalCount: Scalars['Int'],
  facets: TargetDiseasesConnectionFacets,
  edges: Array<TargetDiseasesConnectionEdge>,
  pageInfo: PageInfo,
};

export type TargetDiseasesConnectionEdge = {
   __typename?: 'TargetDiseasesConnectionEdge',
  id: Scalars['String'],
  node: Disease,
  score: Scalars['Float'],
  scoresByDataType: Array<ScoreForDataType>,
  scoresByDataSource: Array<ScoreForDataSource>,
};

export type TargetDiseasesConnectionFacetDataTypeAndSource = {
   __typename?: 'TargetDiseasesConnectionFacetDataTypeAndSource',
  items: Array<DataTypeFacetItem>,
};

export type TargetDiseasesConnectionFacetInputDataTypeAndSource = {
  dataTypeIds?: Maybe<Array<DataType>>,
  dataSourceIds?: Maybe<Array<DataSource>>,
};

export type TargetDiseasesConnectionFacetInputTherapeuticArea = {
  efoIds: Array<Scalars['String']>,
};

export type TargetDiseasesConnectionFacets = {
   __typename?: 'TargetDiseasesConnectionFacets',
  dataTypeAndSource?: Maybe<TargetDiseasesConnectionFacetDataTypeAndSource>,
  therapeuticArea?: Maybe<TargetDiseasesConnectionFacetTherapeuticArea>,
};

export type TargetDiseasesConnectionFacetsInput = {
  dataTypeAndSource?: Maybe<TargetDiseasesConnectionFacetInputDataTypeAndSource>,
  therapeuticArea?: Maybe<TargetDiseasesConnectionFacetInputTherapeuticArea>,
};

export type TargetDiseasesConnectionFacetTherapeuticArea = {
   __typename?: 'TargetDiseasesConnectionFacetTherapeuticArea',
  items: Array<CategoryFacetItem>,
};

export enum TargetDiseasesConnectionSortByField {
  GeneticAssociation = 'GENETIC_ASSOCIATION',
  SomaticMutation = 'SOMATIC_MUTATION',
  KnownDrugs = 'KNOWN_DRUGS',
  Pathways = 'PATHWAYS',
  DifferentialExpression = 'DIFFERENTIAL_EXPRESSION',
  AnimalModels = 'ANIMAL_MODELS',
  TextMining = 'TEXT_MINING',
  ScoreOverall = 'SCORE_OVERALL',
  DiseaseName = 'DISEASE_NAME'
}

export type TargetDiseasesConnectionSortByInput = {
  field: TargetDiseasesConnectionSortByField,
  ascending: Scalars['Boolean'],
};

export type TargetSummaries = {
   __typename?: 'TargetSummaries',
  cancerBiomarkers?: Maybe<TargetSummaryCancerBiomarkers>,
  cancerHallmarks?: Maybe<TargetSummaryCancerHallmarks>,
  chemicalProbes?: Maybe<TargetSummaryChemicalProbes>,
  drugs?: Maybe<TargetSummaryDrugs>,
  expression?: Maybe<TargetSummaryExpression>,
  geneOntology?: Maybe<TargetSummaryGeneOntology>,
  homology?: Maybe<TargetSummaryHomology>,
  mousePhenotypes?: Maybe<TargetSummaryMousePhenotypes>,
  pathways?: Maybe<TargetSummaryPathways>,
  protein?: Maybe<TargetSummaryProtein>,
  proteinInteractions?: Maybe<TargetSummaryProteinInteractions>,
  relatedTargets?: Maybe<TargetSummaryRelatedTargets>,
  tractability?: Maybe<TargetSummaryTractability>,
  variation?: Maybe<TargetSummaryVariation>,
};

export type TargetSummaryCancerBiomarkers = {
   __typename?: 'TargetSummaryCancerBiomarkers',
  hasCancerBiomarkers: Scalars['Boolean'],
  cancerBiomarkerCount: Scalars['Int'],
  diseaseCount: Scalars['Int'],
  drugCount: Scalars['Int'],
  sources: Array<Source>,
};

export type TargetSummaryCancerHallmarks = {
   __typename?: 'TargetSummaryCancerHallmarks',
  promotionAndSuppressionByHallmark: Array<CancerHallmarkPromotionAndSuppression>,
  roleInCancer: Array<CancerHallmarkRoleInCancer>,
  sources: Array<Source>,
};

export type TargetSummaryChemicalProbes = {
   __typename?: 'TargetSummaryChemicalProbes',
  hasStructuralGenomicsConsortium: Scalars['Boolean'],
  hasChemicalProbesPortal: Scalars['Boolean'],
  hasOpenScienceProbes: Scalars['Boolean'],
  hasProbeMiner: Scalars['Boolean'],
  sources: Array<Source>,
};

export type TargetSummaryDrugs = {
   __typename?: 'TargetSummaryDrugs',
  drugCount: Scalars['Int'],
  sources: Array<Source>,
};

export type TargetSummaryExpression = {
   __typename?: 'TargetSummaryExpression',
  rnaBaselineExpression: Scalars['Boolean'],
  proteinBaselineExpression: Scalars['Boolean'],
  expressionAtlasExperiment: Scalars['Boolean'],
  gtexData: Scalars['Boolean'],
};

export type TargetSummaryGeneOntology = {
   __typename?: 'TargetSummaryGeneOntology',
  molecularFunctionTermsCount: Scalars['Int'],
  biologicalProcessTermsCount: Scalars['Int'],
  cellularComponentTermsCount: Scalars['Int'],
  sources: Array<Source>,
};

export type TargetSummaryHomology = {
   __typename?: 'TargetSummaryHomology',
  paraloguesCount: Scalars['Int'],
  orthologuesBySpecies: Array<OrthologuesBySpecies>,
  sources: Array<Source>,
};

export type TargetSummaryMousePhenotypes = {
   __typename?: 'TargetSummaryMousePhenotypes',
  phenotypeCount: Scalars['Int'],
  categoryCount: Scalars['Int'],
  sources: Array<Source>,
};

export type TargetSummaryPathways = {
   __typename?: 'TargetSummaryPathways',
  count: Scalars['Int'],
  sources: Array<Source>,
};

export type TargetSummaryProtein = {
   __typename?: 'TargetSummaryProtein',
  hasSequenceAnnotationVisualisation: Scalars['Boolean'],
  hasProteinStructure: Scalars['Boolean'],
  hasSubCellularLocation: Scalars['Boolean'],
  hasSubUnitData: Scalars['Boolean'],
  hasUniprotKeywords: Scalars['Boolean'],
  sources: Array<Source>,
};

export type TargetSummaryProteinInteractions = {
   __typename?: 'TargetSummaryProteinInteractions',
  ppi: Scalars['Int'],
  pathways: Scalars['Int'],
  enzymeSubstrate: Scalars['Int'],
  interactorsCount: Scalars['Int'],
  sources: Array<Source>,
};

export type TargetSummaryRelatedTargets = {
   __typename?: 'TargetSummaryRelatedTargets',
  relatedTargetsCount: Scalars['Int'],
  sources: Array<Source>,
};

export type TargetSummaryTractability = {
   __typename?: 'TargetSummaryTractability',
  hasSmallMoleculeTractabilityAssessment: Scalars['Boolean'],
  hasAntibodyTractabilityAssessment: Scalars['Boolean'],
  sources: Array<Source>,
};

export type TargetSummaryVariation = {
   __typename?: 'TargetSummaryVariation',
  common: VariationCommon,
  rare: VariationRare,
  sources: Array<Source>,
};

export type Tissue = {
   __typename?: 'Tissue',
  id: Scalars['String'],
  name: Scalars['String'],
};

export type TissueSpecificityFacetItem = {
   __typename?: 'TissueSpecificityFacetItem',
  itemId: Scalars['String'],
  name: Scalars['String'],
  organs: Array<Scalars['String']>,
  anatomicalSystems: Array<Scalars['String']>,
};

export type TopLevelReactomePathway = {
   __typename?: 'TopLevelReactomePathway',
  id: Scalars['String'],
  name: Scalars['String'],
  isAssociated: Scalars['Boolean'],
};

export type TractabilityAssessmentBucket = {
   __typename?: 'TractabilityAssessmentBucket',
  chemblBucket: Scalars['Int'],
  description: Scalars['String'],
  value: Scalars['Boolean'],
};

export type UniprotKeyword = {
   __typename?: 'UniprotKeyword',
  id: Scalars['String'],
  name: Scalars['String'],
  category: Scalars['String'],
};

export type UniprotStructuralFeature = {
   __typename?: 'UniprotStructuralFeature',
  type: Scalars['String'],
  start: Scalars['Int'],
  end: Scalars['Int'],
};

export type UniprotSubCellularLocation = {
   __typename?: 'UniprotSubCellularLocation',
  id: Scalars['String'],
  name: Scalars['String'],
  description: Scalars['String'],
};


export type VariationCommon = {
   __typename?: 'VariationCommon',
  variantsCount: Scalars['Int'],
  diseasesCount: Scalars['Int'],
};

export type VariationRare = {
   __typename?: 'VariationRare',
  mutationsCount: Scalars['Int'],
  diseasesCount: Scalars['Int'],
};

export enum VepConsequence {
  TranscriptAblation = 'TRANSCRIPT_ABLATION',
  SpliceAcceptorVariant = 'SPLICE_ACCEPTOR_VARIANT',
  SpliceDonorVariant = 'SPLICE_DONOR_VARIANT',
  StopGained = 'STOP_GAINED',
  FrameshiftVariant = 'FRAMESHIFT_VARIANT',
  StopLost = 'STOP_LOST',
  StartLost = 'START_LOST',
  TranscriptAmplification = 'TRANSCRIPT_AMPLIFICATION',
  InframeInsertion = 'INFRAME_INSERTION',
  InframeDeletion = 'INFRAME_DELETION',
  MissenseVariant = 'MISSENSE_VARIANT',
  ProteinAlteringVariant = 'PROTEIN_ALTERING_VARIANT',
  SpliceRegionVariant = 'SPLICE_REGION_VARIANT',
  IncompleteTerminalCodonVariant = 'INCOMPLETE_TERMINAL_CODON_VARIANT',
  StartRetainedVariant = 'START_RETAINED_VARIANT',
  StopRetainedVariant = 'STOP_RETAINED_VARIANT',
  SynonymousVariant = 'SYNONYMOUS_VARIANT',
  CodingSequenceVariant = 'CODING_SEQUENCE_VARIANT',
  MatureMirnaVariant = 'MATURE_MIRNA_VARIANT',
  FivePrimeUtrVariant = 'FIVE_PRIME_UTR_VARIANT',
  ThreePrimeUtrVariant = 'THREE_PRIME_UTR_VARIANT',
  NonCodingTranscriptExonVariant = 'NON_CODING_TRANSCRIPT_EXON_VARIANT',
  IntronVariant = 'INTRON_VARIANT',
  NmdTranscriptVariant = 'NMD_TRANSCRIPT_VARIANT',
  NonCodingTranscriptVariant = 'NON_CODING_TRANSCRIPT_VARIANT',
  UpstreamGeneVariant = 'UPSTREAM_GENE_VARIANT',
  DownstreamGeneVariant = 'DOWNSTREAM_GENE_VARIANT',
  TfbsAblation = 'TFBS_ABLATION',
  TfbsAmplification = 'TFBS_AMPLIFICATION',
  TfBindingSiteVariant = 'TF_BINDING_SITE_VARIANT',
  RegulatoryRegionAblation = 'REGULATORY_REGION_ABLATION',
  RegulatoryRegionAmplification = 'REGULATORY_REGION_AMPLIFICATION',
  FeatureElongation = 'FEATURE_ELONGATION',
  RegulatoryRegionVariant = 'REGULATORY_REGION_VARIANT',
  FeatureTruncation = 'FEATURE_TRUNCATION',
  IntergenicVariant = 'INTERGENIC_VARIANT',
  NearestGeneCountingFromFivePrimeEnd = 'NEAREST_GENE_COUNTING_FROM_FIVE_PRIME_END',
  SequenceVariant = 'SEQUENCE_VARIANT'
}

export type WithdrawnNotice = {
   __typename?: 'WithdrawnNotice',
  classes?: Maybe<Array<Scalars['String']>>,
  countries: Array<Scalars['String']>,
  reasons?: Maybe<Array<Scalars['String']>>,
  year: Scalars['String'],
};

export type TargetQueryQueryVariables = {
  ensgId: Scalars['String']
};


export type TargetQueryQuery = (
  { __typename?: 'Query' }
  & { target: (
    { __typename?: 'Target' }
    & Pick<Target, 'id' | 'name' | 'uniprotId' | 'symbol' | 'description' | 'synonyms'>
  ) }
);


export const TargetQueryDocument = gql`
    query TargetQuery($ensgId: String!) {
  target(ensgId: $ensgId) {
    id
    name
    uniprotId
    symbol
    description
    synonyms
  }
}
    `;
export type TargetQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TargetQueryQuery, TargetQueryQueryVariables>, 'query'> & ({ variables: TargetQueryQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const TargetQueryComponent = (props: TargetQueryComponentProps) => (
      <ApolloReactComponents.Query<TargetQueryQuery, TargetQueryQueryVariables> query={TargetQueryDocument} {...props} />
    );
    
export type TargetQueryProps<TChildProps = {}> = ApolloReactHoc.DataProps<TargetQueryQuery, TargetQueryQueryVariables> & TChildProps;
export function withTargetQuery<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TargetQueryQuery,
  TargetQueryQueryVariables,
  TargetQueryProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, TargetQueryQuery, TargetQueryQueryVariables, TargetQueryProps<TChildProps>>(TargetQueryDocument, {
      alias: 'targetQuery',
      ...operationOptions
    });
};
export type TargetQueryQueryResult = ApolloReactCommon.QueryResult<TargetQueryQuery, TargetQueryQueryVariables>;