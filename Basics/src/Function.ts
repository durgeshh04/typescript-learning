// function Hello(name:string) : string {
//     return `${name} hello, hope your dreams come true`;
// }

// let greet = Hello('Durgesh');
// console.log(greet);


function myName(fname: string, id: number, active: boolean): string | number | boolean{
    return `Hello ${fname} your id is ${id} and status is ${active}`;
    
}

let ans = myName("Durgesh", 69, true);
console.log(ans);