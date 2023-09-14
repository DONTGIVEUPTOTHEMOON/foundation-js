// fucntion ที่รับ fucntion (You can use)

// function callMe() {
//   console.log("hello from callback fucntion");
// }

// function greeting(callback) {
//   console.log("hello word");
//   callback();
// }
// greeting(callMe);

// const callMe = () =>{
//   console.log("hello from callback fucntion");
//};

// const greeting = (callback) => {
//   console.log("hello word");
//   callback();
// };
//
// greeting (callme)

// greeting(function)() {
//   console.log("Fern from Annonymous Fuvtio");
// });

// greeting(() => {
//   console.log("Fern from Annonymous arrow Fuvtio");
// });

//ท่าที่นิยมมากกว่า (Annonymous Fuvtion) ฟักชั่นที่ไม่มีชื่อ ฟักชั้นที่ใส่เข้าไปสามารถ cuttom ได้เต็มที่
// console.log('Men')
//}
//() => {}

//let's try agian

// const callMe = () => {
//   console.log("hello from callback fucntion");
// };

// const greeting = (callback) => {
//   console.log("hello from");
//   callback;
// };

//* Call a greeting function with passing in reference of `callMe` function greeting(callMe)
//* Call a greeting function with passing in an annonymous function greeting (callMe)

// greeting(function () {
//   console.log("Men from Annonymous Fuvtion");
// });

// greeting(() => {
//   console.log("Men from Annonymous Fuvtion");
// });

//greeting 2 ถ้าเราต้องการส่ง ข้อมูลเข้าไปใน พารามิเตอร์ ให้สามารถสกรีน object เพิ่มได้

// const greeting2 = (callback) => {
//   console.log("Hello from");
//   callback("Tonfern");
// };

// greeting2((name) => {
//   console.log(`Hello from ${name}`);
// });

// greeting2((name) => {
//   console.log(`How are you ${name}`);
// });

//const originalArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const loopThroughArrayV2 = (arr, cb) => {
//   for (let i = 0; i < arr.length; i++) {
//     cb(arr[i]);
//   }
// };

// loopThroughArrayV2(originalArr, (item) => {
//   console.log(item);
// });

// greeting2((name) => {
//   console.log(`How are you ${name}`);
// });

//callback funtion ที่มีการ reture (mapArray) แก้ไขสิ่งที่อยู่ใน array แล้ว

// const mapArray = (arr, cb) => {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     const newItem = cb(arr[i]);
//     result.push(newItem);
//   }

//   return result;
// };
// const newArr = mapArray(originalArr, (item) => {
//   return item * 2;
// });

// console.log(newArr);

//practice

// const originalArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const mapArray = (arr, cb) => {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     const newItem = cb(arr[i]);
//     result.push(newItem);
//   }
//   return result;
// };
// const newArr = mapArray(originalArr, (item) => {
//   return item * 5;
// });

// console.log(newArr);

// * Exercise: Create a function called "filterArray" to filter only positive number
// * 1. This function receive 2 parameters, arr and cb.
// * 2. cb function must receive 1 parameter, which is each item from the array
// * 3. cb must return only boolean, if it return true, keep that item, otherwise, don't keep it.
// * 4. filterArray must return a new array that keeps all true items

// function filterArray(arr, cb) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     const isKeeping = cb(arr[i]);
//     if (isKeeping) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// const beforeFilter = [-1, 3, 20, -24];

// const afterFilter = filterArray(beforeFilter, (item) => {
//   return item > 0;
// });

// console.log(afterFilter);

const greeting = (callback) => {
  console.log("hello word");
  callback();
};

greeting(function () {
  console.log("Fern from Annonymous Fuvtio");
});

greeting(() => {
  console.log("Fern from Annonymous arrow Fuvtio");
});
