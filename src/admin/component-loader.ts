import { ComponentLoader } from 'adminjs';
import path from "path";

const componentLoader = new ComponentLoader();
let UploadImgabsolute = path.resolve( './src/components/UploadImage.tsx');
let UploadVidabsolute = path.resolve( './src/components/UploadVideo.tsx');
const FilteredModulesAbsolute = path.resolve('./src/components/FilteredModules.tsx');
export const Components = {
  UploadImage: componentLoader.add('UploadImage', UploadImgabsolute),
  UploadVideo: componentLoader.add('UploadVideo', UploadVidabsolute),
  FilteredModules: componentLoader.add('FilteredModules', FilteredModulesAbsolute),
}

export default componentLoader;
