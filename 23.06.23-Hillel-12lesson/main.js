const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

  function generateKey(length){
    let key = '';
      for(let i = 0; i < length; i++){
      let randomChar = Math.floor(Math.random() * characters.length);
      let stringRandom = characters.charAt(randomChar);
      key += stringRandom;
      }
    return key
  }
let key = generateKey(16);
console.log(key);