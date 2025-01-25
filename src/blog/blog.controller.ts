import {Router} from "express"
import { blogModel } from "./blog.schema.js"

const blogRouter = Router()

blogRouter.get('/getallblogs', async(req,res,next)=>{
    try {
        const {search} = req.query
        const regex = new RegExp(search as string, 'i');
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const skip = (page - 1) * limit;
        const totalBlogs = await blogModel.countDocuments({$and : [
            {
                $or : [
                    {title : {$regex : regex}},
                    {content : {$regex : regex}}
                ]
            },
            { status: 'Published' }
        ]});

        const blogs = await blogModel.find({$and : [
            {
                $or : [
                    {title : {$regex : regex}},
                    {content : {$regex : regex}}
                ]
            },
            { status: 'Published' }
        ]}).populate('author').sort({ createdAt: -1 }).skip(skip).limit(limit).exec();
        res.send({
            blogs,
            pagination: {
              currentPage: page,
              totalPages: Math.ceil(totalBlogs / limit),
              totalBlogs,
              pageSize: limit,
            },
        });
    } catch (error) {
        console.log(error)
        throw new Error('An  error occured')
    }
})
blogRouter.get('/getblogDetails', async(req,res,next)=>{
    try {
        const {blogId} = req.query
        const details = await blogModel.findById(blogId, "title content image")
        res.send(details)
    } catch (error) {
        console.log(error)
        throw  new Error('An error occured')
    }
})

export default blogRouter