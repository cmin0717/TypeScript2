// typeof 해당 데이터가 어떤 타입인지 확인할수있다.

console.log(typeof 'hi') // string
console.log(typeof 123) // number
console.log(typeof true) // boolean

const exString: string = 'exString'

const childString: typeof exString = 'hi' // 타입을 정할때 typeof를 사용할수도 있다.

const add1 = (a:number, b:number): number => a+b

// type 별칭과 typeof를 사용하여 여러 타입을 쉽게 저장할수있다.
type add1_ty = typeof add1 // add1의 타입이 저장된다.
type add_re = ReturnType<typeof add1> // type 별칭에서만 사용가능한 ReturnType를 이용하여 add1의 리턴타입을 저장


enum ENums {
    'Zero',
    'one',
    'two',
    'three'
}
const nums: typeof ENums = ENums
console.log(nums[nums.one])