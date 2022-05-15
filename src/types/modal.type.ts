import { ReactElement } from "react";

export type ModalPropsType = {
  children?: ReactElement | ReactElement[];
  isShowing: boolean;
  hide?: () => void;
  title: string;
};
