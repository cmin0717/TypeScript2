// document를 TS에서 사용하고 싶을경우에는 tsconfig파일에서 컴파일 옵션의 'lib'에 DOM라이브러리를 추가해야한다.
// ts-node를 사용하려면 같이 추가해주어야한다.


// 타입 단언

const testText = document.querySelector("#someText")
const testText1 = document.querySelector("#someText")! // !를 붙여서 단언을 할수있다.
const testText2 = document.querySelector("#someText") as Element // 해당 타입은 무조건 as 타입에서의 타입임을 단언하는것

// 변수 선언시에는 단언이 안되고 출력시 단언시킬경우
console.log(testText!.id)
console.log(testText?.id)
console.log((testText as Element).id)

// 변수 선언시 단언이 되었던 경우
console.log(testText1.id)
console.log(testText2?.id) // 단언하였지만 혹시 모르니 ?을 붙여서 예상치 못한 오류를 방지할수있다.


// 타입 단언 방법
interface IExam {
    value: number
}
const example: object = { value: 1}

// console.log(example.value) 오류가 발생한다. example이 {}인건 알겠는데 안에 어떤 속성이 있을지는 알지못하기때문에

// as 사용
console.log((example as IExam)?.value) // example은 IExam이라고 단언해주어 사용할수있다.

// <> 사용
console.log((<IExam>example)?.value) // 제네릭을 사용하여 example을 단언해주는방법 (잘 사용하지 않는거 같다.)