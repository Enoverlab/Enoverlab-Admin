import { Schema, model } from "mongoose";

const adminSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ['admin','superAdmin'],
        required : true,
        default : 'admin'
    }
})

export const admin = model('admin',adminSchema)