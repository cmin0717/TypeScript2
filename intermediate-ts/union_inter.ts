// union 타입

let nameORage: string | number
nameORage = 14
nameORage = 'asdfasfd'

interface IName {
    name: string
}
interface IAge {
    age: number
}

type NameAge = IName | IAge // 타입 별칭을 사용하여 간소화

const prtUnion = (params: NameAge) => {
    // params에 name속성이 있을경우
    if ('name' in params){
        console.log(params.name)
    }
    // params에 age속성이 있을경우
    if ('age' in params){
        console.log(params.age)
    }
}

// 타입 가드 함수를 생성하여 타입을 명확히 알려준다.
const isIName = (params: NameAge ): params is IName => {
    return (params as IName).name !== undefined
}

const prtUnion2 = (params: NameAge) => {
    // 해당 타입 가드 함수에서 true가 리턴되면 해당 타입이다.
    if (isIName(params)){
        console.log(params.name)
    }
    else{
        console.log(params.age)
    }
}

// type intersection ( & ) - and 연산자

type NameandAge = IName & IAge

const search = (params: NameandAge) => {
    console.log(params.age + '-' + params.name)
}