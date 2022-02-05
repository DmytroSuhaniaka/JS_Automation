// ########################################################################################
// Создать ф-цию flatify, которая будет принимать объект и возвращать плоский объект с теми же свойствами.
// Допускаем, что уровень вложенности <= 3
// ########################################################################################

const instructorData = {
  name: "Elie",
  fullName: "Elie Johnson",
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
};

const instructorDataEasier = {
  name: "Elie",
  fullName: "Elie Johnson",
  additionalData: {
    instructor: true,
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    "is Youngest": true,
  },
  address: {
    city: "West Orange",
    state: "NJ",
  },
};

// const flatInstructor = {
//   name: "Elie",
//   fullName: 'Elie Johnson',
//   instructor: true,
//   favoriteBasketballTeam: "New York Knicks",
//   numberOfSiblings: 3,
//   isYoungest: true,
//   city: "West Orange",
//   state: "NJ",
// }

// ########################################################################################
// создать fucntion countTypes (obj) - принимает объект и считает количество свойств каждого типа.
// результат вернуть в виде объекта, где ключи - тип, а свойства - количество свойств этого типа в исходном объекте.
// ########################################################################################

const instructorDataCountProps = {
  name: "Elie",
  fullName: "Elie Johnson",
  instructor: true,
  favoriteBasketballTeam: "New York Knicks",
  numberOfSiblings: 3,
  "is Youngest": true,
  address: {
    // это просто свойство типа object; city и state не должн считаться
    city: "West Orange",
    state: "NJ",
  },
  hobbies: null,
};

//{ string: 3, boolean: 2, number: 1, object: 1, null: 1 }

// ########################################################################################
// Функция buildInstructorObj принимает плоский объект и возврщает новый с теми же свойствами,но:
// Если в исходном встречаются свойства city и state - в новом - они должны объединиться в свойство address : {city: [value], state: [value]}
// Если встречаются свойста instructor, favoriteBasketballTeam, numberOfSiblings, 'is Youngest' - объеденить их в свойство additionalData: {...}
// ########################################################################################

const initialInstructor = {
  name: "Elie",
  fullName: "Elie Johnson",
  instructor: true,
  favoriteBasketballTeam: "New York Knicks",
  numberOfSiblings: 3,
  isYoungest: true,
  city: "West Orange",
  state: "NJ",
};

// const resultInstructor = {
//   name: 'Elie',
//   fullName: 'Elie Johnson',
//   additionalData: {
//     instructor: true,
//     favoriteBasketballTeam: 'New York Knicks',
//     numberOfSiblings: 3,
//     'is Youngest': true,
//   },
//   address: {
//     city: 'West Orange',
//     state: 'NJ',
//   },
// };

// ########################################################################################
//  Функция removeNulls - принимает объект и возвращает новый такой же, но без null свойств
// ########################################################################################

const instructorWithNulls = {
  name: "Elie",
  fullName: "Elie Johnson",
  instructor: true,
  favoriteBasketballTeam: "New York Knicks",
  numberOfSiblings: null,
  isYoungest: null,
  city: "West Orange",
  state: null,
};

// const instructorWithoutNulls = {
//   name: 'Elie',
//   fullName: 'Elie Johnson',
//   instructor: true,
//   favoriteBasketballTeam: 'New York Knicks',
//   city: 'West Orange',
// };
