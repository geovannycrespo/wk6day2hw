let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favorite_food(person3){
    for(let i = 0; i < 3; i++){
        console.log(Object.values(person3)[i])
    }
}




// //Q2
function Person(name,age){
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        console.log(`Your ${this.name}, and you are ${this.age} old`)
    }

    this.addAge = num => {
        //this.age += num;
        this.age++
    }
}


let fred = new Person("Fred", 26);
let bob = new Person("Bob", 23);

for(let i = 0; i < 3; i++){
    bob.addAge()
}
bob.printInfo()
fred.printInfo()