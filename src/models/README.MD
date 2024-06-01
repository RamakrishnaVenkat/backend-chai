# USER MODEL:

## The basic syntax of the every models are:

```bash
# this is the basic schema of creating a db using mongoose 
    const userSchema = new Schema({})
     export const user = mongoose.model("User",userSchema)
```
here we use the "User" as the name of the Database and the userSchema is used as the reference of the user db

## index:
```bash
    username:{
        type: String,
        required : true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    }
``` 
here we use the "index" for searching the data from the databaseN which makes it easier to access the data from the database


## mongoose pipelining:
```bash
    videoSchema.plugin(mongooseAggregatePaginate)
```
this is used in aggregation of the mongoose and the data can be used as such.

## additional packages used are :
## bcrypt 
this is used for hashing the password and to handle the password 
## jsonwebtoken
this is also used to handle the password and are hence converted to json to handle them

## hashing the password 
```bash
    userSchema.pre('save',async function(next) {
    if(!this.modified("password")) return next();
    this.passsword= bcrypt.hash(this.passsword,10)
    next()
})
```
>here we have used the bcrypt.hash to encrypt the password and the 10 is the no of cycles that we use to encrypt the password

>in this we have checked whether the password is modified or not if not modified then we can then we take the next() 
>else we modify the password to hash and the put it in a round of 10 times

## to check the password using the bcrypt 

```bash
    userSchema.method.isPassword= async function(passsword){
     return await bcrypt.compare(passsword,this.passsword);
}
```
> here we have used the bcrypt function itself to compare the passwords in this the parameter used is:

>"password" that is used to get the password, then the "this.password" is used to get the encrypted password

>the await is used for the async function that is used 


## JWT IN MONGOOSE:
```bash
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
```
in this the userSchema is the database and the methods is the methods that we have used to create in the userSchema and the name of the method is"generateAccessToken"
> so in this we return the id email and the username and the fullname of the AccessToken the username and the fullname are all called as the "payloads"

>in the AccessTokenSecret we return the AccessTokenSecret and the time that it expires is accessed from the "process.env.Access_Token_Expiry"
