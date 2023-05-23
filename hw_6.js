
// Task 3
/* Дан обьект:
```javascript
    const student = {
        name: 'John',
        age: 19,
        isHappy: true
    }
C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта. */

const student = {
    name: 'John',
    age: 19,
    isHappy: true
};

for(key in student){
    console.log(key); 
};
for(key in student){
    console.log(student[key]);
}

// Task 4
/* Дан обьект:
```javascript
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
Вывести в консоль слово красный и синий */

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};

for(key in colors){
    console.log(`${colors[key].red} и ${colors[key].blue}`);
};

// Task 5
/* Дан обьект:

```javascript
    let salaries = {
        andrey: 500,
        sveta: 413,
        anton: 987,
        alexandra: 199
    }
```
Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную */

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    alexandra: 199,
};

let sum = 0;
let employeeCounter = 0;

for (const key in salaries) {
  employeeCounter++;
  sum += salaries[key];
}

salaries.mediana = sum / employeeCounter;

console.log(salaries);


// Переписать с помощью функции(решение с ограниченным вычислением медианы)

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    alexandra: 199,
  };
  
  function calcMidlleSalary() {
    let sum = 0;
    let midlleSalary = 0;
    for (let key in salaries) {  // а зачем тут let
      sum += salaries[key];
      midlleSalary = sum / 4;
    }
    return midlleSalary;
  }
  
  salaries.midlleSalary = calcMidlleSalary();
  console.log(salaries);

// Task 6
/* Создать валидатор, 2 метода: валидатор и логин. Первый метод принимают у пользователя логин и пароль для регистрации. Затем данные записать в обьект. 
Второй метод принимает данные пользователя и объект зарегестрированного пользователя. Если передан верный логин и пароль, вывести сообщение **Добро пожалоВать**.  */
// Вариант решения на JS
/*
let validator = {};
//console.log(validator);

function getDateUser(login, password) {
    return { login, password };
}

validator.dateUser = getDateUser('petr', 123);
//console.log(validator);

function isTrueDate(userLogin, userPassword, validator){
    if(userLogin === validator.dateUser.login && userPassword === validator.dateUser.password){
        console.log('Добро пожалоВать');
    }
    else{
        console.log('Проверьте логин и пароль');
    }
}
isTrueDate('ivan', 123, validator);
isTrueDate('petr', 4, validator);
isTrueDate('petr', 123, validator);
*/



// Task 2
/* Даны два одинаковых обьекта. Сравните их так чтобы они были равны

```javascript
    let student1 = {
        name: 'Polina',
        age: 27,
    }

    let student2 = {
        name: 'Polina',
        age: 27,
    }
``` */
const _ = require('lodash');

let student11 = {
    name: 'Polina',
    age: 27
}

let student22 = {
    name: 'Polina',
    age: 27
}
console.log(_.isEqual(student11, student22));


// Task 3
/* Дан объект cat. Склонируйте его 2 способами, и подтвердите, что при изменении поля в 1ом объекте, это же поле не меняется во втором объекте. Объекты должны быть описаны с помощью типа или интерфейса

```javascript
const cat = {
      name: 'Енчик',
      age: 3,
   }
``` */
// Решения для JS
/*
const cat = {
    name: 'Енчик',
    age: 3,
 };

const cat1 = JSON.parse(JSON.stringify(cat));
const cat2 = Object.assign({}, cat);

console.log(cat);
console.log(cat1);
console.log(cat2);

cat.owner = 'Igor';
cat1.name = 'Ёся';
cat1.age = 1;
cat1.owner = 'Stepan';
cat2.name = 'Муся';
cat2.age = 2;
cat2.owner = 'Stepan';

console.log(cat);
console.log(cat1);
console.log(cat2);
 */