// JS에서는 Class를 잘 사용하지 않는다.
// 속도 측면에서 느려지기 때문에 class대신 함수와 프로퍼티를 이용하여 진행한다.

class Person {
    constructor(public name: string, public city: string) {}

    getName(){
        console.log(`my name is ${this.name}`)
    }
}

const p = new Person('csd', 'fdgs')
console.log(p, p.getName())
console.log(typeof p) // class로 나오는것이 아닌 object로 나온다.

// 위와 같은 class는 실제로는 함수에 프로퍼티를 부여하여 만들기 때문에 굳이 저렇게 표현하지 않고 바로 함수로 표현하는게 일반적이다.
// 함수로 class를 표현하기위해서는 TS 컴파일 옵션에서 noImplicitAny, noImplicitThis를 false로 바꿔주어야 하는거 같다.(삽질 오지게 함)

function Person2(name:string, city:string): void {
    this.name = name
    this.city = city

    this.getName = function (): void {
        console.log('hihi', this.name)
    }
}

// 상속
function Student(name: string, city: string, uni: string){
    // .call을 이용하여 Person2에 Student받은 name, city를 넣어주어서 Student에 Person2을 상속시킨다.
    Person2.call(this, name, city)
    this.uni = uni

    this.getUni = function () {
        console.log(`hi ${this.uni}`)
    }
}

interface IPerson2 {
    (name: string, city: string): void
    name: string
    city: string

    getName: () => void
}
interface IStudent extends IPerson2 {
    (name:string, city:string, uni:string): void
    uni: string

    getUni: () => void
}

const p2: IPerson2 = new Person2('sdfs', 'asdfsa')
const s1: IStudent = new Student('Capt', 'USA', 'Heloo')
console.log(p2, p2.getName(), '------', s1.getUni(), s1.getName())


// 클래스를 함수로 구현 2

interface IADD {
    (a:number, b:number): IADD
    a:number
    b: number
    getreult(): number
}

const add0 = (a: number, b:number): IADD => {
    // this가 globalthis로 작동하기에 이중 타입 단언을 통해 IADD로 인식하게 해준다.
    // const _this = this as any as IADD // this를 같은걸 넣어주면 중복으로 가르키게됨으로 깊은복사로 각각 다른 this를 넣어주어야한다.
    const _this = JSON.parse(JSON.stringify(this)) as any as IADD
    _this.a = a
    _this.b = b

    _this.getreult = () => {
        return _this.a + _this.b
    }

    return _this
}

// 대신 위와 같이 구현하면 _this가 중복됨으로 temp1,temp2가 같은 _this를 가리키게 된다.
// 그렇기에 _this값에 각각 this를 깊은 복사하여 넣어주어야한다.
const temp1 = add0(3,6)
const temp2 = add0(2,10)
console.log(temp1, temp1.a, temp1.b, temp1.getreult())
console.log(temp2, temp2.a, temp2.b, temp2.getreult())