// needed as @types/fg-loadcss does not exist
declare module "fg-loadcss/src/loadCSS" {
  export const loadCSS: (stylesheet: string, element: React.ReactNode) => void;
}
