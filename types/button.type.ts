import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  buttonType?:
    | ButtonType.Link
    | ButtonType.Text
    | ButtonType.Dashed
    | ButtonType.Default
    | ButtonType.Primary;
  children: ReactNode;
  className?: string;
}

export enum ButtonType {
  Link = "link",
  Text = "text",
  Default = "default",
  Primary = "primary",  
  Dashed = "dashed",
}
