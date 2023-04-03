import { movieType } from "./movieTypes";

export type bannerPropType = {
  infoButton?: boolean;
  movie: movieType;
};

export type sliderPropType = {
  title: string;
  url: string;
};

export type movieCardPropType = {
  movie: movieType;
};
