import * as React from "react";
import { Tabs as MuiTabs, Tab as MuiTab } from "@material-ui/core";

export type Tab = {
  id: string;
  label: React.ReactNode;
  node: React.ReactNode;
};

export type TabsProps = {
  // id: string;
  defaultTabId: string;
  tabs: Tab[];
};

const Tabs: React.FC<TabsProps> = ({ defaultTabId, tabs }) => {
  const [tabId, setTabId] = React.useState(defaultTabId);
  const handleChange = (_: React.ChangeEvent, newTabId: string) =>
    setTabId(newTabId);
  return (
    <React.Fragment>
      <MuiTabs value={tabId} onChange={handleChange}>
        {tabs.map(tab => (
          <MuiTab key={tab.id} value={tab.id} label={tab.label} />
        ))}
      </MuiTabs>
      {tabs.map(tab =>
        tab.id === tabId ? (
          <React.Fragment key={tab.id}>{tab.node}</React.Fragment>
        ) : null
      )}
    </React.Fragment>
  );
};

export default Tabs;
