console.log(`Задание 1`)
let user = {
    name: "John",
    age: 30
    };

console.log(`age` in user)


 console.log(`Задание 2 `)
 let user2 = [
    {
    name: "John",
    age: 30
    },
    {
    name: "Bob",
    age: 21
    },
    {
    name: "Anna",
    age: 19
    }
    ];
    console.log(user[3]);


console.log(`Задание 3 `)
 user = [

    {

      name: "John",

      age: 30

    },

    {

      name: "Bob",

      age: 21

    },

    {

      name: "Anna",

      age: 19

    }

];



const delUserName = function(){

    let nameDelete =[];

    for (const iterator of user) {

        if(iterator.name !== "Anna"){

            nameDelete.push(iterator);

        }

    }

    return nameDelete;

}



console.log(delUserName(user))



console.log(`Задание 4`)
console.log(user2.sort((a,b) => a.age - b.age));


console.log(`Задание 5`)
const obj = {
    id: 5,
    token: 12343423
};
const id = obj [`id`];
console.log(id);


console.log(`Зaдание 6 `)
const obj1 = {
    id: 5,
    token: 12343423
    };
const{id: userld } = obj
console.log(userld);           
