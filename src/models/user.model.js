import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"


const userSchema = new Schema({
    username:{
        type: String,
        required : true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email:{
        type: String,
        required : true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullname:{
        type: String,
        required : true,
        lowercase: true,
        trim: true,
        index:true
    },
    avatar:{
        type:true, // url is fetched from the cloudinary
        required:true,
    },
    coverImage:{
        type:String // url is fetched from the cloudinary
    },
    watchHistory:{
        type:Schema.Types.ObjectId,
        ref:"Video"
    },
    passsword:{
        type:String,
        required:[true,"Password is required"]
    },
    refreshToken:{
        required:true
    }

},
{
    timestamps:true
}
)


userSchema.pre('save',async function(next) {
    if(!this.modified("password")) return next();

    this.passsword= bcrypt.hash(this.passsword,10)
    next()
})

userSchema.method.isPassword= async function(passsword){
     return await bcrypt.compare(passsword,this.passsword);
}

userSchema.methods.generateAccessToken = function () {
    return jwt.sign({
        __id:this.__id,
        email:this.email,
        username:this.username,
        fullname:this.fullname,
    },
    process.env.Access_Token_Secret,{
        expiresIn:process.env.Access_Token_Expiry
    }
)
}
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign({
        __id:this.__id,
    },
    process.env.Refresh_Token_Secret,{
        expiresIn:process.env.Refresh_Token_Expiry
    }
)
}
export const user = mongoose.model("User",userSchema)