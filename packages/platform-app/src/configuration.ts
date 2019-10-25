export const headerMenuItems = [
  {
    name: "Open Targets Consortium",
    url: "https:/www.targetvalidation.org",
    external: true,
  },
  {
    name: "Documentation and FAQs",
    url: "https:/docs.targetvalidation.org",
    external: true,
  },
  {
    name: "GraphQL API",
    url: `${process.env.REACT_APP_PLATFORM_API_URL}/browser`,
    external: true,
  },
  {
    name: "Downloads",
    url: "/downloads",
    external: false,
  },
  {
    name: "Contact us",
    url: "mailto:support@targetvalidation.org",
    external: true,
  },
];

export const footerSections = [
  {
    title: "About",
    items: [
      {
        label: `Version ${
          process.env.REACT_APP_REVISION
            ? process.env.REACT_APP_REVISION
            : "55378008"
        }`,
        url: `https://github.com/opentargets/platform-app/commit/${
          process.env.REACT_APP_REVISION
            ? process.env.REACT_APP_REVISION
            : "55378008"
        }`,
      },
      {
        label: "Terms of use",
        url: "http://www.targetvalidation.org/terms-of-use",
      },
      {
        label: "Privacy notice",
        url:
          "https://www.ebi.ac.uk/data-protection/privacy-notice/open-targets",
      },
    ],
  },
  {
    title: "Help",
    items: [
      {
        label: "Documentation",
        url: "https://docs.targetvalidation.org",
      },
      {
        label: "support@targetvalidation.org",
        url: "mailto:support@targetvalidation.org",
      },
    ],
  },
  {
    title: "Partners",
    items: [
      { label: "Biogen", url: "https://www.biogen.com" },
      { label: "Celgene", url: "https://www.celgene.com" },
      {
        label: "EMBL-EBI",
        url: "https://www.ebi.ac.uk",
      },
      { label: "GSK", url: "https://www.gsk.com" },
      { label: "Sanofi", url: "https://www.sanofi.com" },
      { label: "Takeda", url: "https://www.takeda.com" },
      {
        label: "Wellcome Sanger Institute",
        url: "https://www.sanger.ac.uk",
      },
    ],
  },
  {
    title: "Open Targets",
    items: [
      {
        label: "Overview",
        url: "https://www.opentargets.org",
      },
      { label: "Science", url: "https://www.opentargets.org/science" },
      { label: "Resources", url: "https://www.opentargets.org/resources" },
      { label: "Jobs", url: "https://www.opentargets.org/jobs" },
      { label: "Blog", url: "https://blog.opentargets.org" },
    ],
  },
];
