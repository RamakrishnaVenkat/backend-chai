class ApiError{
    constructor(statuscode,
        message="there is some error",
        errors= [],
        stack=""
    ){
        super(message)
        this.statuscode=statuscode;
        this.data=null;
        this.errors=errors;
        this.success=false;

        if(stack){
            this.stack=stack
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}
export {ApiError}