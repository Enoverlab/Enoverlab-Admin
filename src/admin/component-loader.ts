import { ComponentLoader } from 'adminjs';
import path from "path";

const componentLoader = new ComponentLoader();
let UploadImgabsolute = path.resolve( './src/components/UploadImage.tsx');
let UploadVidabsolute = path.resolve( './src/components/UploadVideo.tsx');
export const Components = {
  UploadImage: componentLoader.add('UploadImage', UploadImgabsolute),
  UploadVideo: componentLoader.add('UploadVideo', UploadVidabsolute),
}

export default componentLoader;
