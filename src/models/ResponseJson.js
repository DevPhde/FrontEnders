class ResponseJson {
   constructor(result, message) {
      this.result = result;
      this.message = message;
   }
   static response(result, message) {
      const response = new ResponseJson(result, message);
      return response
   }
}

export default ResponseJson