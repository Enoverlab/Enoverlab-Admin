import mongoose,{ Schema } from "mongoose";

export class UneccessaryMultipleAnswers extends Error {
  
    constructor( message: string) {
      super(message);
      this.name = 'UneccessaryMultipleAnswers';
    }
}

const assessmentQuestionsSchema = new Schema({
    assessmentName : {
        type : String,
        require : true
    },
    questions : [{ 
        question : { type: String, required: true }, 
        options : { type: [String], required: true },
        multipleAnswers : { type: Boolean}, 
        correctAnswer: { 
            type: [String], 
            required: true,
            validate: {
                validator: function(value) {
                    if (!Array.isArray(this.options) || this.options.length === 0) return false;
                    if (!this.multipleAnswers  && value.length > 1) {
                        throw new Error('Too many correct answers than necessary')
                    }
                    return Array.isArray(value) && value.every(answer => this.options.includes(answer));
                },
                message: props => `Invalid correctAnswer. It must be included in options`
                
            }
        },
        aspect : {type : String, required : true, enum : ['User Research','MVP', 'User Experience', 'Market Value']}
    }],
    active : {type : Boolean}
},{timestamps : true})

export const assessmentQuestionModel = mongoose.model('assessmentQuestion', assessmentQuestionsSchema)