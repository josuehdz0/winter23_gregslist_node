import { Schema } from "mongoose";

export const HouseSchema = new Schema(
  {
    beds:{type:Number, required: true},
    baths:{type:Number, required: true, min:1},
    price:{type:Number, required: true},
    year:{type:Number, required: true, min:1860},
    description:{type:String, minLength:3, maxLength:100},
    imgUrl:{type:String, required: true, default:'//placehold.it/300x300'}


  }
)