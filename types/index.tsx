import { MouseEventHandler } from "react";

export interface ButtonProps {
  text: String;
  Styles?: String;
  buttonType?: "submit" | "button";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface Card{
  title: String;
  description: String;
  imagem: String;
}
