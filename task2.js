/* Этап 1. Подготовка данных */

// JSON, который мы будем парсить
const jsonString = `
{
  "list": [
    {
     "name": "Petr",
     "age": "20",
     "prof": "mechanic"
    },
    {
     "name": "Vova",
     "age": "60",
     "prof": "pilot"
    }
   ]
}
`;
// console.log('jsonString', jsonString);
/* Этап 2. Получение данных */
const data = JSON.parse(jsonString);
const list = data.list;
console.log(list)

const result = [];
/* Этап 3. Запись данных в результирующий объект */
list.forEach((item) => {

    result.push({
        name: item.name,
        age: item.age,
        prof: item.prof,
    });
});
console.log('result', result);