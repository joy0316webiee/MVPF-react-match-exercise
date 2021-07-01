// config
import config from '../config';

// constants
import { imageSizes } from '../constants';

export const getImagePath = (
  fileName,
  imageSize = imageSizes.W780
) => {
  return config.movieDB.baseImgURL.concat(`/${imageSize}${fileName}`);
};
