 interface IDetail1 {
    name: string
    age: number
    city: string
 }

 interface IUser3 {
    info: IDetail1
    marketing: boolean
    sns: 'kakao' | 'naver'
 }

 const setUser = (target: IUser3, param: keyof IUser3, newvalue: typeof target[typeof param]) => {
    
    if (param === "marketing" && typeof newvalue === 'boolean' ){
        target[param] = newvalue
    }
    else if (param === "sns" && typeof newvalue === 'string' ){
        target[param] = newvalue
    }
    else if (param === 'info' && typeof newvalue === 'object'){
        target[param] = newvalue
    }
 }

const u1: IUser3 = {
    info: {
        name: 'sda',
        age: 123,
        city: 'asdad'
    },
    marketing: false,
    sns: 'kakao'
}

setUser(u1, 'sns', 'naver')
console.log(u1)