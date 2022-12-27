import response from "./response.js";
import getUser from "./getUser.js"

async function registerValidation(user) {
   const foundEmail = await getUser("email", user['email']);
   const foundRG = await getUser("rg", user['rg']); 
   return isValidUser(foundRG, foundEmail)
}

function isValidUser(foundRG, foundEmail) {
   const validEmail = foundEmail === null ? true : false;
   const validRG = foundRG === null ? true : false;
   return validEmail && validRG ? jsonResponse(true, validRG, validEmail) : jsonResponse(false, validRG, validEmail)
   
}

function jsonResponse(result, fieldRG, fieldEmail){ 
   const haveFieldRG = fieldRG ? "" : "RG";
   const haveFieldEmail = fieldEmail ? "" : "Email";
   const haveTwoFields = fieldRG? "" : fieldEmail ? "" : "e";
   const message = result ? undefined : `Campo ${haveFieldRG} ${haveTwoFields} ${haveFieldEmail} já cadastrado.`
   return response(result , message)
}

export default registerValidation