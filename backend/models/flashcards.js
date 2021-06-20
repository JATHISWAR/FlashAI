import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    word:String,
    description:String
})

export default mongoose.model("cards",cardSchema);