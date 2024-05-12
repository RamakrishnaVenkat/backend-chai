// here we will be using the promises method
const asynchandler=(requestHandler)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((err)=> next(err))
}

export {asynchandler}


// here we pass a function as a paramater

/*step 1:const asynchandler=()=>
step 2:const asynchandler=()=>{()=>}
step 3:const asynchandler=()=>()=> here we have removed the {} and have directly passed the function as a parameter
*/


// here we have used the try catch method 
// const asynchandler=(fn)=> async(req,res,next)=>{
//     try {
//         await fn(req,res,next)
        
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message

//         })

//     }
// } 