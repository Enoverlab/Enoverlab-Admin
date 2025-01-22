// import { admin } from "./admin.schema.js";
// import bcrypt from "bcryptjs";
// import { connect } from "mongoose";
// import dotenv from 'dotenv';
// dotenv.config();
// const testMongoString = process.env.MongoStringTest;
// const productionMongoString = process.env.MongoStringProd;
// try {
//     main();
// }
// catch (error) {
//     console.log(error);
// }
// async function main() {
//     await connect(process.env.NODE_ENV == 'development' ? testMongoString : productionMongoString);
//     return;
// }
// const createNewSuperAdmin = async () => {
//     const email = "info@enoverlab.com";
//     const name = "enoverlabAdmin";
//     const password = 'Password*';
//     const getAdminIdentity = await admin.findOne({ email: email.toLowerCase() }).exec();
//     if (getAdminIdentity) {
//         throw new Error('Email Already in use');
//     }
//     else {
//         const hashpw = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS));
//         const newUser = new admin({
//             name,
//             email,
//             password: hashpw,
//             role: 'superAdmin'
//         });
//         newUser.save().then(() => {
//             console.log('New admin user created');
//         });
//     }
// };
// createNewSuperAdmin();
