// abstract(추상 클래스) => 상속, 슈퍼-서브, 부모-자식
// interface -> 구현, 어떤한 기능을 설계 및 명세
// 쉽게 말하자면 큰틀은 abstract를 이용하여 잡은후 상세 기능들 같은걸 interface를 implements하여 구현해나간다.
// 그렇게 되면 코드의 확정성이 높아지게되고 코드 관리하기도 편해진다.
// OS로 예를 들자면 기본적인 모든 OS에 필수적이고 같은 코드로 실행되는것들은 추상클래스로 구현을 해놓는다.
// 그 다음 각각의 OS에 추상클래스를 상속한다음에 각 OS마다 필요한 기능들은 interface를 implement하여 구현한다.
// 이런 느낌쓰~~!

// 추상 클래스
abstract class Linux {
    protected abstract _description?: string
    constructor(protected _name: string, protected _version: number){}

    // 각 상속할 곳마다 조금씩 다르게 쓰일거기에 선언만 했다
    abstract operation(): void

    // 모든 애들에게 필수적인 종목이라 생각하기에 abstract에서 직접 구현해주엇따.
    turnOff(){
        console.log('모든 프로그램 종류 전원 끄기!')
    }
}

// 여러 기능들의 인터페이스 // 추상 클래스를 상속 받은 애들이 필요한것만 implement하여 사용
interface IFileSystem {
    write(): void
    open(): void
    close(): void
}
interface IProcess {
    fork(): void
    wait(): void
    kill(): void
}

class Ubuntu extends Linux implements IFileSystem{
    protected _description?: string | undefined
    constructor(_name: string, _version: number, _description?: string){
        // super()로 넘어가게 되는 인자 또한 부모 클래스에서 정의한 signature와 동일해야 합니다
        // super() 을 호출하여 부모클래스의 생성자를 호출하고, 이러한 방식으로 부모클래스의 필드에 값을 전달할 수 있다.
        super(_name,_version)
        if (_description) this._description = _description
    }

    operation(): void {
        console.log("OS 등장!")
    }

    // interface로 받아온 기능들 구현
    write(): void {
        console.log("기능 구현!")
    }
    open(): void {
        console.log("기능 구현!")
    }
    close(): void {
        console.log("기능 구현!")
    }
}

class RedHat extends Linux implements IProcess{

    protected _description?: string | undefined
    constructor(_name: string, _version: number, _description?: string){
        super(_name,_version)
        if(_description) this._description = _description
    }

    operation(): void {
        console.log("OS 등장!")
    }

    fork(): void {
        console.log('기능 구현!')
    }
    wait(): void {
        console.log('기능 구현!')
    }
    kill(): void {
        console.log('기능 구현!')
    }
}

class Debian extends Linux implements IFileSystem, IProcess{

    protected _description?: string | undefined
    constructor(_name: string, _version: number, _description?: string){
        super(_name,_version)
        if(_description) this._description = _description
    }

    operation(): void {
        console.log("OS 등장!")
    }

    fork(): void {
        console.log('기능 구현!')
    }
    wait(): void {
        console.log('기능 구현!')
    }
    kill(): void {
        console.log('기능 구현!')
    }
    write(): void {
        console.log("기능 구현!")
    }
    open(): void {
        console.log("기능 구현!")
    }
    close(): void {
        console.log("기능 구현!")
    }
}