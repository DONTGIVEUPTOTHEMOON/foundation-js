// const person = {
//   name: "Tonfern",
//   age: 20,
//   pet: {
//     kind: "cat",
//     age: 7
//   }
// };

//console.log('Name:', person.name)// *Access using dot notation
//console.log("Name", person[keynam])// * Acess using bracket notation

//reviwe ref. Type
// const person2 = person;
// person2.name = "Pee";

// console.log("person 1:", person);
// console.log("person 2:", person2);

// //reviwe ref. Type2
// const person3 = person;
// person3.name = "Nuch";

// console.log("person 1:", person);
// console.log("person 2:", person2);
// console.log("person 3:", person2);

//EX
const data = [
  {
    name: "John",
    age: 22,
    job: "software engineer"
  },
  {
    name: "Johny",
    age: 26,
    job: "web designer"
  },
  {
    name: "Watson",
    age: 36,
    job: "marketing"
  }
];

// data.forEach((person, index) => {
//   console.log("person: " + (index + 1));
//console.log();
//   console.log("name: " + person.name);
//   console.log("age : " + person.age);
//   console.log("job : " + person.job);
//   console.log("__________________");
//   console.log();
// });

data.forEach((person, index) => {
  console.log(
    "\nperson" + (index + 1),
    "\nname: " + person.name,
    "\nage: " + person.age,
    "\njob: " + person.job
  );
});
//`person ${person.name} \nname: ${person.age} \nage: ${person.age} `

data.reduce((prevVal, val, idx) => {
  return `${prevVal}\n`;
});
