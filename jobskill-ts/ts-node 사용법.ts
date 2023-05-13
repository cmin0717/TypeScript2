const testerText = 'hello world'
console.log(testerText)

// ts-node 패키지
// TS파일을 JS로 컴파일시 tsc 파일경로 후 node 파일경로로 실행했는데 ts-node를 사용하여 간소화할수있다.
// 일단 ts-node를 인스톨해야한다. ( npm install -g ts-node )
// 설치후 ts-node 파일경로를 사용하여 해당 파일을 컴파일후 실행시킬수있다. 컴파일된 JS파일은 저장되지 않는다. 내부적으로 처리하는듯

// ts-node에서 컴파일 옵션 부여하기
// npm install -D @types/node을 입력하여 TS화 node패키지를 설치한다.
// @types/패키지 이름이 의미하는건 해당패키지를 typescript로 변환하여 설치한다는 의미이다. (무조건은 아니다. 관례같은 느낌쓰)
// npm install -D @tsconfig/node18을 사용하여 현재 node버전에 맞게 tsconfig를 설치한다.
// 이제 현재 적용되고 있는 tsconfig파일로 가서 "extends": "@tsconfig/node18/tsconfig.json"을 추가하여 ts-node 컴파일 옵션을 주기위해
// 위에서 설치한 tsconfig파일을 상속시켜준다.
// 이후 "ts-node"를 추가하고 해당 객체안에 ts-node의 컴파일 옵션을 설정해주면 된다.
// "ts-node": {
    //       "compilerOptions": {
    //         "target": "ES6",
    //         "module": "CommonJS",
    //         "experimentalDecorators": true,
    //         "emitDecoratorMetadata": true,
    //       }
    //     }

// 쉽게 정리 해보자면
// 1. npm install -g ts-node를 사용하여 ts-node 설치
// 2. 이후 ts-node 파일경로를 사용하여 컴파일 후 실행가능
// 3. ts-node에 컴파일옵션을 부여하고 싶다면
//     1. npm install -D @types/node를 입력하여 TS화된 node패키지 설치
//     2. npm install -D @tsconfig/node18를 입력하여 현재 노드버전에 해당하는 tsconfig파일 설치(의미하는게 확실하진 않다.)
//     3. 현재 적용되는 tsconfig파일에 "extends": "@tsconfig/node18/tsconfig.json" 를 추가하여 설치한 tsconfig파일 상속
//     4. 현재 적용되는 tsconfig파일에 "ts-node" : {} 를 추가하여 해당 객체에 컴파일 옵션부여(tsconfig파일에서 부여하듯이 똑같이 부여하면 된다.)