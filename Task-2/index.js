import { addImage } from './addImage.js';

export const addImageV2 = (url) => {
  const promise = new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.setAttribute('alt', 'User avatar');
    img.src = url;

    const pageElem = document.querySelector('.page');
    pageElem.append(img);

    const onImageLoaded = () => {
      const { width, height } = img;
      resolve({ width, height });
    };
    const onImageLoadError = () => reject('Image load failed');

    img.addEventListener('load', onImageLoaded);

    img.addEventListener('error', onImageLoadError);
  });
  return promise;
};

const img = 'https://server.com/image.png';

const resultPromise = addImageV2(img);

resultPromise.then((data) => console.log(data));
