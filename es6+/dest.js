// 객체에서 키와 벨류가 같을경우 벨류 생략
const register = (ID, PW) => ({ID,PW})
console.log(register('HI',0000)) // {ID:'HI', PW:0000} 출력

// 객체의 값을 분해하여 받을수있다.
const {name, age, sex} = {
    name:'Hi',
    age:25,
    sex:"male"
}
console.log(name, age, sex)

// 배열 // 배열도 값을 분해하여 받을수있다.
const [f, s, t] = [1,2,'hi']
console.log(f, s, t)

// spread 연산자 (...)
const [f1, ...rest] = [1,2,3,4]
console.log(f1) // 1
console.log(rest) // [2,3,4] // 나머지 값들은 배열에 담겨 rest 변수에 저장된다.

const arr = [1,3,5] // [1,3,5]
const arr2 = [...arr, 7, 8] // [1,3,5,7,8]

const {name:name2, ...rest2} = {
    name:'Hi',
    age:25,
    sex:'male'
}
console.log(name2) // 'HI'
console.log(rest2) // {age:25, sex: 'male"}
console.log({
    ...rest,
    heught:177
}) // { '0': 2, '1': 3, '2': 4, heught: 177 }

