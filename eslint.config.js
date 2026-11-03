import pobConfig from "@pob/eslint-config";
import pobTypescriptConfigReact from "@pob/eslint-config-typescript-react";

export default [
  ...pobTypescriptConfigReact.configs.node,
  ...pobConfig.configs.toolsProject,
];
