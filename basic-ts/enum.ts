// 성별, 부서 코드, 카테고리 처럼 접근할때 특정값만 들어와야 하는경우
// 다른 값이 온다면 서버가 멈출수있는 오류를 발생할수 있는 상황이 나올법한곳
// 컴파일된 JS파일에서 enum은 함수형태로 변환된다.
// JS에서는 enum이 실제로 없기 때문에

enum categoryEnum {
    H,
    K,
    S
}

const category: categoryEnum = categoryEnum.H

const cate = (category: categoryEnum):void => {
    console.log(categoryEnum[category])
    if (category === 0){
        console.log('5% 할인')
    }
    else if(category === 1){
        console.log('10% 할인')
    }
    else if(category === 2){
        console.log('50% 할인')
    }
    else{
        console.log('서버 멈춤')
    }
}
cate(category)


// 리터럴 타입

enum sexEnum {
    MALE = 'MALE',
    FEMALE = 'FEMAEL',
    ETC = 'ETC'
}
// 단순히 한번만 이용하거나 할때 사용할수있다.
// 이넘값만 넘길수있는게 아니라 정해준 값이랑 같은 값만 들어오면된다.
const sex: "MALE" | "FEMAEL" | "ETC" = 'MALE'
const sex2: "MALE" | "FEMAEL" | "ETC" = sexEnum.FEMALE