import { ComponentLoader } from 'adminjs';
import path from "path";

const componentLoader = new ComponentLoader();
let absolute = path.resolve( './src/components/UploadImage.tsx');
export const Components = {
  UploadImage: componentLoader.add('UploadImage', absolute),
}

export default componentLoader;
