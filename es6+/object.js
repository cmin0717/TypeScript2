const ptr4 = () => console.log('Hello World')

const ob = {
    name:'Hi',
    age:25,

    f1: function ptr(){
        console.log('Hello World')
    },

    f2: () => {
        console.log('Hello World')
    },

    
    f3(){
        console.log("Hello World")
    },

    //ptr4 : ptr4 일때는 생략가능하니깐
    ptr4
}
ob.f1()
ob.f2()
ob.f3()
ob.ptr4()

const test = 'test word'
const liter = `${test} ${3*3}`
console.log(liter)

// 객체의 키값에도 리터럴 변수를 이용하여 지정할수있다.
const ob2 = {
    [test]:liter,
    [1*4*2]:'a' //키값에 숫자를 넣어도 문자형으로 변환되어 키값에 들어간다.
}
console.log(ob2)