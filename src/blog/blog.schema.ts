import mongoose,{ Schema } from "mongoose";

const blogSchema = new Schema({
    title : {
        required : true,
        type : String
    },
    content : {
        required : true,
        type : String
    },
    description : {
        type : String,
        required : true,
        maxLength : 100
    },
    image : {
        required : true,
        type : String
    },
    tag : {
        type : String,
        enum : ['Learning', 'Salary', 'Interview', 'Product', 'Job', 'Tech'],
        required : true
    },
    status : {
        type : String,
        enum : ['Published', 'Pending'],
        required : true
    },
    author : {
        type : mongoose.Schema.Types.ObjectId, 
        ref : 'author'
    },
},{timestamps : true})

const authorSchema = new Schema({
    name : {
        required : true,
        type : String
    },
    image : {
        required : true,
        type : String
    }
}, {timestamps : true})

export const authorModel = mongoose.model('author', authorSchema)
export const blogModel = mongoose.model('blog', blogSchema)