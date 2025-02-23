// let obj: {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// } = {
//     id: 1,
//     name: "Durgesh",
//     retire: (date: Date) => {
//         console.log(date);
//     }
// }


type Emp = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void,
}

const emp : Emp = {
    id: 1,
    name: "Durgesh",
    retire: (date: Date) => {
        console.log(date);
    }
}


console.log(emp);



