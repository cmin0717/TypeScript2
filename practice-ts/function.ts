// JS에서 함수는 객체이다.

const add3: Function = new Function('a', 'b', 'return a + b * 3')
console.log(add3(1,4))

interface ADD {
    (a:number, d:number): number
}

const add4: ADD = (a:number, b:number): number => {
    return a + b
}
console.log(add4(3,5))

