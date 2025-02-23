// Union Type

const unionFun = (weight: number | string) => {
    if(typeof weight == 'number'){
        return weight * 2.2;
    } else{
        return parseFloat(weight) * 2.2;
    }
}

console.log(unionFun("10"));
console.log(unionFun(10));