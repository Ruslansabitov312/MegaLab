const revStr = (str) => {
    const arrStr = str.split(' ')
  
    for (let i = 0; i < arrStr.length; i++) {
      if (arrStr[i].length > 5) {
        arrStr[i] = arrStr[i].split('').reverse().join('')
      }
    }
  
    return arrStr.join(' ')
  }
  console.log(revStr('This is another test'))