# THE KEYS USED IN UTILS:

## CORS:
 used as a middleware to access the website.

```bash
    app.use(cors({
    origin:process.env.CORS_ORIGIN,
    Credentials:true
}))
```
here we use the origin to define what are all the links that we allow the user to access

## to set a limit to the website on how much json can be accepted:

```bash
    app.use(express.json({limit:"20kb"}))
```
this tells us how much data is allowed for the user to give the data as json format

## when we get the data as a url, that needs to be decoded:

```bash
    app.use(express.urlencoded({extended:true,limit:"16kb"}))
```
here we use the "urlencoded" as the keyword to access the url using express

## NOTE: cookie parser is used to access the cookie of the website only be the server and not by anyone else

>the middle ware acts as a checking mechanism in the website where they are placed in the middle of the client and the server and checks the request and sends the respective response

# HIGHER ORDER FUNCTION:

>here we pass a function as a paramater

step 1:const asynchandler=()=>
step 2:const asynchandler=()=>{()=>}
step 3:const asynchandler=()=>()=> here we have removed the {} and have directly passed the function as a parameter


```bash
    const asynchandler=(fn)=> async(req,res,next)=>{
        try {
                await fn(req,res,next)
                
            } catch (error) {
                res.status(err.code || 500).json({
                    success:false,
                    message:err.message

    })
```
here we have passed the function as the parameter and hence we use the try catch method to execute the async function
in this we have used the next for acessing the middleware 
in line 48 the success acts as a flag where the developers can access the message for checking the status of the data

## same using the promises:

```bash
    const asynchandler=(requestHandler)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((err)=> next(err))
}

export {asynchandler}
```
>here we have used the promises to execute the function where we have used the resolve to execute the function 
here we have used the next to handle the data if there is no error or else we use the catch to get the error message we can also use reject instead of the catch  

#API ERROR HANDLER

>here we have used the ApiError file to handle the error 

## API RESPONSE HANDLER:

> here we have used the ApiResponse handler to handle the responses of the Api, we can see in the below code that the 

```bash 
     constructor(statusCode, data ,message){
        this.statusCode=statusCode;
        this.data= data;
        this.message= message;
        this.success= statusCode < 400
    }
```
here the successcode has a condition of < 400 that 400 is the status code of success, there are various codes for each of the messages

see below:
Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)