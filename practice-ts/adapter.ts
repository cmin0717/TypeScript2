// adapter 패턴 : 어댑터 패턴은 다른 명칭으로 래퍼(Wrapper)라고 불리운다.
// 어댑터는 호환되지 않은 인터페이스를 가진 객체가 협업할 수 있도록 하는 구조 설계 패턴이다.
// 어댑터는 두 객체 사이에서 래퍼 역할을 한다. 
// 하나의 객체에 대한 호출을 확인하고 두 번째 객체가 인식할 수 있는 포맷과 인터페이스로 변환한다.
// 호환성이 없는 인터페이스 때문에 함께 동작할 수 없는 클래스들을 함께 작동해주도록 변환 역할을 해주는 행동 패턴이라고 보면 된다.

// Client Interface : 클라이언트가 접근해서 사용할 고수준의 어댑터 모듈
interface Target {
    request(): string
}

// Adaptee : 클라이언트에서 사용하고 싶은 기존의 서비스 (하지만 호환이 안되서 바로 사용 불가능)
class Adaptee {
    specificRequest(): string {
        return '.eetpadA eht fo roivaheb laicepS'
    }
}

// Adapter : Adaptee 서비스를 클라이언트에서 사용하게 할 수 있도록 호환 처리 해주는 어댑터
class Adapter extends Adaptee implements Target{

    request(): string {
        const value: string = this.specificRequest().split('').reverse().join('')
        return `Adapter : ${value}`
    }
}

const ad: Adapter = new Adapter()
console.log(ad.request())