// any와 unknown

const User:any = {
    ID: 'Capt'
}

console.log(User.name) // undefined
console.log(User.length) // undefined
console.log(User.ID) // Capt

const User1: unknown = {
    ID: 'Capt'
}

// console.log(User1.name) // 오류
// console.log(User1.length) // 오류
// console.log(User1.ID) // 값이 있음에도 오류
console.log(User1) // 출력은 가능

// any와 unknown의 차이점
// any : 어떤값이든 다 들어갈수있다. 그렇기에 없는 속성도 접근은 할수있다. 출력값이 undefined일뿐
// unknown : 어떤값인지 모르겠다. 그러기에 어떤 속성도 접근할수없다.