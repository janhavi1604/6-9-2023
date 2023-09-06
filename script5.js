class User{
    constructor(userName,age)
    {
        this.userName=userName
        this.age=age

    }


}

let user=new User("Sam",20)
let user1=new User("Peter",32)
console.log(user)

let age=[20,18,15]
let filter=age.filter((e)=>e<18)
console.log(filter)