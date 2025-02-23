// function Hello(name:string) : string {
//     return `${name} hello, hope your dreams come true`;
// }

// let greet = Hello('Durgesh');
// console.log(greet);


// function myName(fname: string, id: number, active: boolean): string | number | boolean{
//     return `Hello ${fname} your id is ${id} and status is ${active}`;
    
// }

// let ans = myName("Durgesh", 69, true);
// console.log(ans);


// function isLegal(age: number) : boolean {
//     return age >= 18 ? true : false;
// }

// let ans = isLegal(22);
// console.log(ans);



// function first(fn: Function){
//     setTimeout(fn, 1000);
// }

// first(function(){
//     console.log("Hello");
// })



// const greet = (name: string) => `Hello ${name}`; 



function calculateTax(income: number, taxYear: number): number{
    if(taxYear < 2020){
        return income * 1.2;
    }

    return income * 1.3;
}

console.log(calculateTax(51_000, 2010));



