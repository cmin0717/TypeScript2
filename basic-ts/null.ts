// null 과 undefined
// undefined는 타입의 최하위 계층이다. 그렇기에 상위 계층의 타입에 모두 해당하기도 한다.
// 이런 특성이 있기에 여러 에러가 발생할수 있다 아래서 확인해보자.

const un: undefined = undefined // undefined라는 타입을 설정할수도 있다.

interface IMan {
    name: string
}

const printName = (p: IMan) => {
    console.log('PrintName')
    // 그렇기에 항상 undefined를 생각하여 처리해주어야한다.
    // p가 undefined가 아니면 .name속성을 확인한다 해당 값이 undefined라면 ?? 뒤에 default값을 출력
    console.log(p?.name ?? 'default')
}

// printName(10) // 10은 number타입이기에 IMan 타입에 해당하지 못하기에 컴파일 자체에서 오류가 발생한다.
printName(undefined)
// 하지만 undefined는 최하위 계층이기에 모든 타입에 해당할수잇다. 
// 빨간 줄이 있지만 컴파일시 그냥 진행된다.
// 그렇게 JS파일로 변환되고 실제로 함수가 실행되면 undefined타입에서 .name 속성에 접근하려고 하니 오류가 발생한것이다.
// 매개변수에 undefined가 들어올수있기에 ?를 잘사용하여 예외처리를 해주어야한다.