import mongoose,{ Schema } from "mongoose";
const courseSchema = new Schema({
    title : {
        type : String
    },
    description :{
        type : String,
        required : true
    },

    courseImg : {
        type : String,
        required : true
    },
    instructorName : {
        type : String,
        required : true
    },
    learningPoints : [{
        type : String
    }],
    price : {
        type : Number,
        required : true
    },
    courseLevel : String,
    averageRating : Number,
    modules : [
        {
            type : mongoose.Schema.Types.ObjectId, 
            ref : 'module',
        }
    ],

    ratings : {
        type : Number,
        default : 0
        // type : [
        //     {
        //         type : mongoose.Schema.Types.ObjectId, 
        //         ref : 'rating',
        //         default : 0
        //     }
        // ]
    }
},{timestamps : true})

const ratingSchema = new Schema({
    userId : {
        required : true, type : mongoose.Schema.Types.ObjectId, ref : 'User'
    },
    courseId : {
        required : true, type : mongoose.Schema.Types.ObjectId, ref : 'Course'
    },
    review : {
        type : String
    },
    ratedAt : {
        type : Date, 
        default : Date.now()
    }
},{timestamps : true})

const moduleSchema = new Schema({
    title : {
        require : true, 
        type : String
    },
    content : {
        required : true, 
        type : String
    },
    lessonVideo : {
        required : String
    },
    courseId : {
        required : true, 
        type : mongoose.Schema.Types.ObjectId, 
        ref : 'course'}

},{timestamps : true})


export const courseModel = mongoose.model('course',courseSchema)
export const moduleModel = mongoose.model('module',moduleSchema)
export const ratingModel = mongoose.model('rating',ratingSchema)
