//Нет проверки на пустые массивы - они объекты, но ключей у них не будет.
//Пример работающего кода:
// removeEmpty(obj) {
//     const finalObj = {};
//     Object.keys(obj).forEach((key) => {
//       if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//         const nestedObj = this.removeEmpty(obj[key]);
//         if (Object.keys(nestedObj).length) {
//           finalObj[key] = nestedObj;
//         }
//       } else if (Array.isArray(obj[key])) {
//         if (obj[key].length) {
//           obj[key].forEach((x) => {
//             const nestedObj = this.removeEmpty(x);
//             if (Object.keys(nestedObj).length) {
//               finalObj[key] = finalObj[key] ? [...finalObj[key], nestedObj] : [nestedObj];
//             }
//           });
//         }
//       } else if (obj[key] !== '' && obj[key] !== undefined && obj[key] !== null) {
//         finalObj[key] = obj[key];
//       }
//     });
//     return finalObj;
//   }

//Но в реальных задачах в принципе очень круто познакомится с lodash. Попробуй использовать.

// меня зовут Алексей, я живу в Симферополе

const name = 'Алексей';
const town = 'Симферополь';

const text = `Меня зовут ${name}, я живу в ${town}`;

console.log (text)