let inputData = document.querySelector('.input')
let inputBtn = document.querySelector('.btn')

// при нажатии кнопки НАЙТИ

inputBtn.onclick = wait

function btnClick() {
  let inputDataMin = inputData.value.toLowerCase()
  if (inputDataMin === 'google') {
    alert('Yandex круче. Но это не точно.')
  } else if (inputData.value !== '') {
    alert(inputData.value)
  }
  alert(objects[0].name)
  inputData.value = ''
}

function wait() {
  setTimeout(btnClick, 3000)
}

// массив объектов
let objects = [
  {
    name: 'Art',
    age: 25
  },
  {
    name: 'Nicol',
    age: 24
  },
  {
    name: 'Stas',
    age: 25
  }
]

// функция сложения
function superSum(a, b) {
  alert(a + b)
}

// Поиск наименьшего и наибольшего значения в массиве
let array = [4, 12, 5, 21, 152, 76, 53, 2, 88, 12, 3, 5, 234, 4]

function findMax(array) {
  let arrayMax = array[0]
  for (let i = 1; i <= array.length; i++) {
    if (array[i] > arrayMax) {
      arrayMax = array[i]
    }
  }
  return arrayMax
}
function findMin(array) {
  let arrayMin = array[0]
  for (let i = 1; i <= array.length; i++) {
    if (array[i] < arrayMin) {
      arrayMin = array[i]
    }
  }
  return arrayMin
}

console.log(findMax(array))
console.log(findMin(array))

// перемена значений переменных
let a = 42, b = 24;

[a, b] = [b, a]
console.log(a)
console.log(b)


