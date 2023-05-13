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

// 클래스를 만들 함수에는 화살표함수를 사용하면 안된다. 화살표함수는 동작방식이 조금 다르기 때문에
// const Person1 = (name: string, city: string) => {
//     this.name = name
//     this.city = city
// }


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