import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        image: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const Category = mongoose.model('Category', categorySchema);//name for table
export default Category;