// 타입 분기

type userType = 'admin' | 'manager' | 'user'

interface IAdmin {
    type: userType
    post: any
    info: any
    detail: any
}
interface IManager {
    type: userType
    post: any
    info: any
}
interface IUser4 {
    type: userType
    post: any
}


type element = IAdmin | IManager | IUser4
const getLogic = (p: element) => {

    // switch와 타입 단언을 이용하여 타입 분기처리를 해줄수있다.
    switch (p.type){
        case 'admin':
            console.log((p as IAdmin).detail)
            break
        case "manager":
            console.log((<IManager>p).info)
            break
        case "user":
            console.log(p.post)
    }
}

getLogic({
    type:"manager",
    post:"asda",
    info: 'asda'
})

type errorcode = 404 | 500

interface INF {
    code: errorcode
    f: any
}
interface IIE {
    code: errorcode
    f: any
}

// 타입 분기를 사용하여 에러코드마다 각자의 다른 처리를 해줄수있다.
const error_H = (p: IIE | INF) => {
    switch (p.code){
        case 404:
            console.log((p as INF).f, p.code)
            break
        case 500:
            console.log((p as IIE).f, p.code)
    }
}