import mongoose from "mongoose";

const sliderSchema = new mongoose.Schema(
    {
        image: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const Slider = mongoose.model('Slider', sliderSchema);//name for table
export default Slider;