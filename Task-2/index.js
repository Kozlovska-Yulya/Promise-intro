import { addImage } from './addImage.js';

export const addImageV2 = (url) =>
  new Promise((resolve, reject) => {
    const promise = (data, error) => {
      if (load) {
        resolve(data);
      } else {
        reject(error);
      }
    };
    addImage(url, promise);
  });

addImageV2('https://server.com/image.png')
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
