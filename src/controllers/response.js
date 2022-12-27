import ResponseJson from "../models/ResponseJson.js";

function response (result, message) {
    const response = new ResponseJson(result, message);
    return response
 }
 export default response