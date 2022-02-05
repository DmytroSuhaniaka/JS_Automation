const data = {
  name: "Elie",
  "full name": "Elie Johnson",
  additionalData: {
    instructor: true,
    moreDetails: {
      favoriteBasketballTeam: "New York Knicks",
      numberOfSiblings: 3,
      "is Youngest": true,
      city: "West Orange",
      state: "NJ",
    },
  },
  telNo: "+32425436547",
};

//data.additionalData.moreDetails.tel = '+345332435345';
//console.log(data);

//data.contacts.tel = '+323425435647';

// if ('contancts' in data) {
//   data.contacts.tel = '+32542354536';
// } else {
//   data.contacts = {
//     home: { address: 'sfergfer' },
//     work: { address: 'dsfdegerg' },
//   };
// }

//console.log(data);

// console.log(data.name)
// console.log(data['name']);

// console.log(data.additionalData.instructor)
// console.log(data["additionalData"]["instructor"])

// console.log(data["full name"])

//const prop = 'name';
// console.log(data[prop]);

//console.log(prop in data);

// data.telNo = '+3456456456';
// data.name = 'Alex';
// data.additionalData = 'ololol';

// for (let key in data) {
//   if (typeof data[key] === 'string') {
//     console.log(key, data[key]);
//   }
// }

// const clone = (obj) => {
//   const result = {};
//   for (let key in obj) {
//     result[key] = obj[key];
//   }
//   return result;
// };

// const cloned = clone(data);
// console.log(cloned);

// const empty = {};

// const isEmpty = (obj) => {
//   for (let key in obj) {
//     return false;
//   }

//   return true;

// };

// console.log(isEmpty(empty));
// SOLID

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

// const multiply = (obj, m) => {
//   const result = {};

//   for (let prop in obj) {
//     if (typeof obj[prop] === 'number') {
//       result[prop] = obj[prop] * m;
//     } else {
//       result[prop] = obj[prop];
//     }
//   }
//   console.log(result);
// };

const multiply = (obj) => {
  for (let prop in obj) {
    if (typeof obj[prop] === "number") {
      obj[prop] = obj[prop] * 2;
    }
  }
};

multiply(menu);
console.log(menu);
