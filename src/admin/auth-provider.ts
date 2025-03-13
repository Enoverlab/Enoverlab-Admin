import { DefaultAuthProvider } from 'adminjs';

import componentLoader from './component-loader.js';
import bcrypt from "bcryptjs"
import { admin } from './admin.schema.js';

/**
 * Make sure to modify "authenticate" to be a proper authentication method
 */
const provider = new DefaultAuthProvider({
  componentLoader,
  authenticate: async ({ email, password }) => {
    const user = await admin.findOne({email : email.toLowerCase()}).exec()
    if(!user){
      return null
    }
    const match = await bcrypt.compare(password, user.password)
    if(!match){
      return null
    }else{
      return {email : user.email, role : user.role}
    }
  },
});

export default provider;
