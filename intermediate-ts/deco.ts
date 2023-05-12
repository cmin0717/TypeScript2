// 데코레이션을 사용하기 위해 tsconfig.json 파일에서
// "experimentalDecorators": true, "emitDecoratorMetadata": true 옵션을 켜준다.
// TS파일을 컴파일시  tsc --experimentalDecorators 파일경로를 명령어로 해야 컴파일이 된다.
// *중요* 데코레이터는 런타임때 클래스에 붙어서 알아서 실행된다.
//  그렇기에 따로 호출하지 않아도 런타임때 한번 알아서 실행된다.


// 데코레이터는 함수이다.
const InitClass = (params: any) => {
    console.log('InitClass :', params)

    // return값에 데코레이터 함수를 넣는 과정이다. 이렇게 되면 initclass는 데코레이터 팩토리가 된다.
    // return값에 있는 함수가 데코레이터 함수가 되는것이다.
    return (params: Function) => {
        console.log(params)
    }
}

// 메서드 데코레이터 / 메서드 데코레이터는 리턴 타입이 void가 나오면 안된다?
const Get = (params: any): any => {
    console.log('[GET] ',params)
}

const Post = (params: any): any => {
    console.log('[POST] ',params)

    // 메서드 데코레이터 함수는 매개변수로는 3가지로 받을수있다. (통상적으로 target, propertyKry, descriptor로 이름을 정한다.)
    // 첫번째는 정적 멤버에 대한 클래스의 생성자 함수 또는 인스턴스 멤버에 대한 클래스의 프로토타입
    // 두번째 변수는 자신을 호출한 매서드의 key값이 있다.(멤버의 이름)
    // 세번째는 해당 멤버의 메타데이터가 담겨있다.
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        console.log(target, propertyKey, descriptor)
        target.getReq()
        target[propertyKey]() // 본인을 호출시 안전한게 propertyKey를 사용하자
    }
}

const Column = (params: any): any => {
    console.log(' Column! ',params)
}

const UseGuard = (params: any): any => {
    console.log('UseGuard :', params)

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        console.log(target, propertyKey, descriptor, 'guard')
    }
}


// 데코레이터는 무조건 Class와 같이 사용한다.(클래스 자체, 인스턴스, 메소드, 매개변수...)
// 데코레이터는 @를 사용하여 사용한다.

@InitClass('/api/v1')  // 데코레이터 팩토리로 선언했기에 매개변수를 넘겨주어야한다. 
class ExampleClass {

    @Column('email')
    private _email: string

    constructor (email: string) {
        this._email = email
    }

    @Get('/user') // 메서드 데코레이터는 매개변수를 넣어주어야한다?
    getReq() {
        console.log('Get Req method')
    }

    @Post('/board')
    @UseGuard('/guard')
    postReq() {
        console.log('Post Req method')
    }
    // 여기서는 Post팩토리 -> UseGarud팩토리 -> UseGuard 데코레이터 함수 -> POST 데코레이터 함수
}

// 현재 실행 순서는 Column -> Get -> Post -> InitClass 순으로 실행된다.
// class 내부의 데코레이터 그다음이 외부 데코레이터 순으로 실행되는거 같다.
// 내부 데코레이터는 위에서 아래 순으로 실행된다.
// 데코레이터 팩토리라면 팩토리가 먼저 실행되고 그다음에 데코레이터 함수가 실행된다.
// 같은 선상이라면 팩토리는 위에서 아래 순으로 실행되고 데코레이터 함수는 아래서 위 순으로 실행된다.
