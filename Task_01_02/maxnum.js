const maxNum = (num) => {
    const arr = num.toString(10).split("").map(int=>parseInt(int,10))
    return arr.sort((a,b)=>{
        return a - b
    }).reverse().join("")
}

console.log(maxNum(145263))