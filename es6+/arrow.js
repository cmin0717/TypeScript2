// 기본적인 함수 형태
function add (a,b) {
    return a + b
}

// 화살표 함수
const add2 = (a,b) => {
    return a+b
}

// 실행문이 하나일때(return을 생략할 수 있다.)
const add3 = (a,b) => a+b 

// 매개변수가 1개 일경우
const add4 = a => a+4

// 객체 반환
const add5 = (a) => {
    return {'Hello':1}
}

// const add6 = a => {Hello:'1'}  // return문을 생략하고 객체를 출력할시에는 ()로를 사용하여 감싸주어야한다. // undefined 출력
const add6 = a => ({Hello:'1'})
console.log(add6(1))
