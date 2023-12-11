import { Schema, model } from "mongoose"

const authorSchema = new Schema(
  {
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String ,
        required: true

    },
    email: {
        type: String ,
        required: true

    }, 
    birthday: {
        type: String,
        required: true

    },
    avatar: {
        type: String,
        required: true

    }
  },
  { collection: "author" }
)

export default model("Author", authorSchema)
