const add = (a:number, b:number):number => {
    return a + b
}
add(1,2)


// 타입 별칭

const minus: (a:number, b:number) => number = (a:number, b:number): number => a-b

const mutiple: (a:number, b:number) => () => number = (a:number, b:number): () => number => {
    return () => {
        return a * b
    }
}

type typeName = any // 타입 별칭은 어떤 타입이든 다 넣어도 된다. 해당 타입에 이름을 붙여주는것이기에
type Hi = "MALE" | "FEMAEL" | "ETC"
type minusfunc = (a:number, b:number) => number
type submultifunc = () => number
type mainmultifunc = (a:number, b:number) => submultifunc

// 타입 별칭을 이용하여 간단화하기

const minus1: minusfunc = (a:number, b:number): number => a-b
const mutiple1: mainmultifunc = (a:number, b:number): submultifunc => {
    return () => a*b
}

// 함수 throw 리턴 타입 // throw는 리턴타입을 어떤걸 넣어주어도 상관없다.
// throw는 return이 아니기에 리턴타입에 영향을 받지 않는다.

const sendError = (): {e:string, i:number} => {
    throw {errorCode: 404, message:'not found page'}
}
sendError()
