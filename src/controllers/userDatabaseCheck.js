import users from "../models/User.js"
import ResponseRegister from "../models/ResponseRegister.js";

async function getRgAndEmail(user) {
   const foundRG = await users.findOne ({ "rg" : user.rg });
   const foundEmail = await users.findOne ({ "email" : user.email });

   return isValidUser(foundRG, foundEmail)
}

function isValidUser(foundRG, foundEmail) {
   let validRG = false
   let validEmail = false
   if (foundRG === null) validRG = true;
   if (foundEmail === null) validEmail = true;

   const bothValid = validRG && validEmail == true
   return bothValid ? jsonResponse(true, validRG, validEmail) : jsonResponse(false, validRG, validEmail);

}

function jsonResponse(result, fieldRG, fieldEmail){
   const haveFieldRG = fieldRG ? "" : "RG";
   const haveFieldEmail = fieldEmail ? "" : "Email";
   const haveTwoFields = fieldRG? "" : fieldEmail ? "" : "e";

   function response (result) {
      const message = result ? undefined : `Campo ${haveFieldRG} ${haveTwoFields} ${haveFieldEmail} já cadastrado.`;
      const response = new ResponseRegister(result, message);
      return response
   }
   return response(result)
}

export default getRgAndEmail