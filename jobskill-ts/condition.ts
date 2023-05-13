// 조건부 타입

interface ICity1  {
    name: string
}
interface ISchool {
    year: number
}

// ischool 인터페이스가 icity 인터페이스를 상속 받았으면 number를 아니면 string을 ConditionType타입에 담는다.
// 결국 조건부 타입이란 삼항 연산자 등과 같이 여러 조건에따라 다른 타입을 넣어주는걸 의미하는거 같다.
type ConditionType = ISchool extends ICity1 ? number : string

const test: ConditionType = "312" // 현재 ischool은 상속받지 못했기에 conditiontype은 string타입이다.

// 나중에 인터페이스를 여러개 상속하고 그러다 보면 문제가 생길수있기에 조건부 타입을 설정하여 진행된다고한다.
// 아직 정확히 어떤 상황에서 사용하지는 감이 안잡힌다.