interface User{
    firstname: string,
    lastname: string,
    age: number
}

function interfacePractice(user: User){
    console.log(user.firstname, user.lastname, user.age);
}

interfacePractice({
    firstname: "Durgesh",
    lastname: "lastname",
    age: 22
});