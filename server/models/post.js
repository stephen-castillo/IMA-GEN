import mongoose from "mongoose";

const Post = new mongoose.Schema({
    name:{type:String, required:true},
    prompt:{type:String, required:true},
    photo:{type:String, required:true},
    date:{type:Date, default:Date.now},
});

const PostSchema = mongoose.model("Post", Post);

export default PostSchema;