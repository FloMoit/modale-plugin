import * as React from "react";

declare module "ModalePlugin" {
  interface ModalePluginProps {
    onClose: () => void;
    textModal: string;
    children?: React.ReactNode;
  }

  const ModalePlugin: React.FC<ModalePluginProps>;

  export default ModalePlugin;
}
