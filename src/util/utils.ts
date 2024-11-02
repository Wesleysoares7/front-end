import { BACK_END_URL } from "../constants";

export const getUrlImage = (imageName: string) => {
  return `${BACK_END_URL}/images/${imageName}.jpg`;
};
