function generateHash() {
  try {
    let hash = '';
    for (let i = 0; i < 5; i++) {
      const randomCharCode = Math.floor(Math.abs(Math.random() * (65 - 90))) + 65;
      hash += String.fromCharCode(randomCharCode);
      for (let j = 0; j < 3; j++) {
        const randomCharCode = (Math.floor(Math.abs(Math.random() * (48 - 57))) + 48);
        hash += String.fromCharCode(randomCharCode);
      }
    }
    return hash
  } catch(error) {
    if(error){
      return false
    }
  }
}


export default generateHash;