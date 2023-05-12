const printType = (params: any) => {
    console.log(typeof params)
    // 각 타입이 알맞게 나올것이다. 하지만 함수안에서는 변수가 어떤 타입인지 알수없다. 아직 실행되지 않았기에
    // 그래서 각 타입의 매서드를 사용하는것이 복잡하고 오류를 일으키기 쉽다.
}

printType(10) // number
printType('asdf') // string
printType(false) // boolean


// 제네릭 : 타입을 변수처럼 입력하여 사용하는법(코드의 확장성을 높일수있다.)

interface IGene<T> {
    date: T
}

const ptr4 =<T> (params: IGene<T>) => {
    console.log(params.date)
}

// ptr4<string> ({date:21312}) 현재 제네릭 타입 변수로 string을 주었기에 IGene의 타입은 string이다 근데 number을 넣었기에 오류발생
ptr4<string>({date:'wfdsaf'})


// 제네릭에서 extends 사용
// 1 제한을 하여 안정성 높임, 2 안정성 보장

const prt = <T extends string | number> (params: T) => {
    if (typeof params === 'string'){
        console.log('문자열 입니다.')
    }
    else if (typeof params === 'number'){
        console.log('숫자 입니다.')
    }
}

prt<string>('asdf')
// prt<object>({}) // 함수 prt의 제네릭에 string과 number을 상속시켰기에 해당 타입만 올수있다.

// interface를 통해 함수 타입을 지정
interface IHi {
    // 매개변수로는 string형태의 name을 받고 리턴은 void를 하는 함수 타입을 의미한다.
    hi: (name:string) => void
}

// prt1의 제네릭에 Ihi를 상속시켜서 해당 속성이 있는 애들만 들어올수있게 제한한다.
const prt1 = <T extends IHi> (params: T, name:string) => {
    // 제네릭을 통해 hi속성이 있는것으로만 제한했기에 hi속성을 사용할수있다.
    params.hi(name)
}

// prt1({hi:213}, 'safd') // hi타입은 함수이기에 그냥 다른값은 들어갈수없다 위에서 정한 함수 형태로 넘겨주어야한다.
prt1({hi: (name:string) => {console.log(name)}}, 'Capt')


// 제네릭 활용

interface IObj1 {
    name: string
    age: number
}
interface IObj2 {
    city: string
    phone: string
}

// prtKey의 제네릭에 객체를 상속시켜서 객체 타입만 올수있게한다.
// 제네릭 U에는 T에서 들어온 객체타입의 키값을 상속시켜 해당 키값만 올수있게한다.
const prtKey = <T extends object, U extends keyof T> (params: T, key: U): T[U] => {
    // 위에서 타입을 잘 제한했기에 아래와 같은 명령에서도 에러를 발생시키지 않는다.
    return params[key]
}
prtKey<IObj1, keyof IObj1>({name:'srer', age: 143}, 'name')
prtKey<IObj2, keyof IObj2>({city: "Busan", phone: '1249284032'}, 'phone')


class ClassName<T> {
    constructor (private _data: T){}

    set data(newData: T){
        this._data = newData
    }

    get data(): T{
        return this._data
    }
}