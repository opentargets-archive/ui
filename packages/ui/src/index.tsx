import "@material-ui/styles";
import "typeface-inter";

export { default as Page } from "./components/Page";
export { default as PageTitle } from "./components/PageTitle";
export { default as Home } from "./components/Home";
export { default as Header } from "./components/Header";
export { default as HeaderMenu } from "./components/HeaderMenu";
export { default as Footer } from "./components/Footer";
export { default as Section } from "./components/Section";
export { default as SectionContainer } from "./components/SectionContainer";
export { default as ChipContainer } from "./components/ChipContainer";
export { default as InfoTooltip } from "./components/InfoTooltip";
export { default as SearchInput } from "./components/SearchInput";
export { default as TableClientSide } from "./components/TableClientSide";
export { default as Link } from "./components/Link";
export { default as Tabs } from "./components/Tabs";

export { default as GeneIcon } from "./icons/Gene";
export { default as DrugIcon } from "./icons/Drug";
export { default as DiseaseIcon } from "./icons/Disease";

export { default as FontAwesomeLoader } from "./components/FontAwesomeLoader";

export { default as theme } from "./theme";

export { default as getComparator } from "./utils/getComparator";
export { getArrayElementType } from "./utils/getArrayElementType";

export { TableClientSideColumn } from "./hooks/useClientSideSorting";
export { TableDownloadColumn } from "./hooks/useClientSideDownload";
