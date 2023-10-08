import { MouseEventHandler } from "react";

export interface ButtonProps {
  text: String;
  Styles?: String;
  buttonType?: "submit" | "button";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  image?: String;
}


export interface Rectangle { styles: String }
export interface CarouselProps { items: String }
export interface Testimonial {
  id: number;
  name: string;
  title: string;
  description: string;
  url: string;
}
