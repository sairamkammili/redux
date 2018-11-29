export const  selectUser = (user)=>{

    console.log("click on ", user.firstname);
    return {
        type : "USER_SELECTED",
        payload : user
    }
};