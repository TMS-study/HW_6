// Task 1
/* Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта. */

interface student {
    name?: string,
    age?: number
};

const student1: student = {
    name: 'Alina',
    age: 33
}
console.log(student1);
delete student1.name;
delete student1.age;
console.log(student1);

// Task 2
/* Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true** */

let student2 = {
    name: 'Ivan',
    age: 18
};

console.log('name' in student2);


// Task 6
/* Создать валидатор, 2 метода: валидатор и логин. Первый метод принимают у пользователя логин и пароль для регистрации. Затем данные записать в обьект. 
Второй метод принимает данные пользователя и объект зарегестрированного пользователя. Если передан верный логин и пароль, вывести сообщение **Добро пожалоВать**.  */

type Validator = {
    dateUser?: { login: string, password: number };
  }
  
  let validator: Validator = {};
  
  function getDateUser(login: string, password: number) {
      return { login, password };
  }
  
  validator.dateUser = getDateUser('petr', 123);
  
  function isTrueDate(userLogin: string, userPassword: number, validator: Validator) {
      if (validator.dateUser && userLogin === validator.dateUser.login && userPassword === validator.dateUser.password) {
          console.log('Добро пожаловать');
      } else {
          console.log('Проверьте логин и пароль');
      }
  }
  
  isTrueDate('ivan', 123, validator);
  isTrueDate('petr', 4, validator);
  isTrueDate('petr', 123, validator);

// Task 1
/* Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей. Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами. Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль. */ 
  
  const scoreThisMatch = {
    com1: 0,
    com2: 5
  };
  
  console.log(`'${scoreThisMatch.com1}:${scoreThisMatch.com2}'`);
  
  function numberToString(num: number) {
    switch (num) {
      case 0:
        return "ноль";
      case 1:
        return "один";
      case 2:
        return "два";
      case 3:
        return "три";
      case 4:
        return "четыре";
      case 5:
        return "пять";
      case 6:
        return "шесть";
      case 7:
        return "семь";
      case 8:
        return "восемь";
      case 9:
        return "девять";
      default:
        return "ошибка";
    }
  }
  
  if (scoreThisMatch.com1 < 9 && scoreThisMatch.com2 < 9) {
    console.log(`Счет в текущем матче ${numberToString(scoreThisMatch.com1)} : ${numberToString(scoreThisMatch.com2)} `);
  } else {
    console.log('');
  }
// Task 3
/* Дан объект cat. Склонируйте его 2 способами, и подтвердите, что при изменении поля в 1ом объекте, это же поле не меняется во втором объекте. Объекты должны быть описаны с помощью типа или интерфейса

```javascript
const cat = {
      name: 'Енчик',
      age: 3,
   };
   */

   type cat = {
    name?: string,
    age?: number
   };

   const cat1: cat = {
    name: 'Енчик',
    age: 3
   };

const cat2 = JSON.parse(JSON.stringify(cat1));
const cat3 = Object.assign({}, cat1);

console.log(cat1); // { name: 'Енчик', age: 3 }
console.log(cat2); // { name: 'Енчик', age: 3 }
console.log(cat3); // { name: 'Енчик', age: 3 }

cat1.name = 'Муха';
cat1.age = 34;

console.log(cat1); // { name: 'Муха', age: 34 }
console.log(cat2); // { name: 'Енчик', age: 3 }
console.log(cat3); // { name: 'Енчик', age: 3 }

cat2.name = 'Ёся';
cat2.age = 1;
cat3.name = 'Муся';
cat3.age = 2;

console.log(cat1); // { name: 'Муха', age: 34 }
console.log(cat2); // { name: 'Ёся', age: 1 }
console.log(cat3); // { name: 'Муся', age: 2 }

