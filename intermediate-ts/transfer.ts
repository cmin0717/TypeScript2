// 서버에서 서버로 정보 전달
// 프론트 -> 서버로 데이터를 보낼때 -> json, object를 자주 사용
// 서버 -> 프론트로 데이터를 보낼때 -> class를 자주 사용한다.

class LoginTransferObject {
    // readonly 접근 제한자
    // readonly는 진짜로 읽기만 가능하다. set도 먹히지 않는다. 정말 지켜야할 데이터는 readonly를 사용하여 지킨다.
    readonly ID: string
    // 옵셔널을 클래스에도 적용시킬수 있다.
    private readonly _PW?: string

    constructor (ID:string, PW?: string){
        this.ID = ID
        // 현재 PW가 옵셔널이기에 PW값이 있을때만 넣어주도록한다. undefined값 들어가도 상관없다면 그냥 두어도 된다.
        if (PW) this._PW = PW
    }

    set PW(newPW: string){
        // this._PW = newPW 에러 발생 readonly는 set도 먹히지 않는다.
    }
}

const LoginDTO = new LoginTransferObject("cyun0717", 'cmin9717')
// LoginDTO.ID = 'saffs' // 에러 발생
LoginDTO.PW = 'sfasd' // 속성 함수는 실행되나 실행과정에서 readonly를 바꾸려고 하면 에러가 발생할것이다.


// 클래스 간단화 하기

class LoginTransferObject2 {
    // pw에 디폴트 문자열을 넣어두어 옵셔널로 받게 할수있다.
    constructor (readonly ID: string, readonly PW: string = 'defualt'){}
}
const LoginDTO2 = new LoginTransferObject2('asfdfa', 'asdfas')
LoginDTO2.ID // this.속성을 해주지 않아도 알아서 들어가게 된다.
// 이런식으로 constructor로 선언할때 매개변수에 접근제한자를 표시할수있다.