// 여기서는 실행

import { CalculatorImpl } from "./callmpl"
import { ICalculator } from "./cal"

const cal2: CalculatorImpl = new CalculatorImpl() // 해당 타입을 구현한 클래스로 넣어주어도 문제없다.
const cal: ICalculator = new CalculatorImpl()
console.log(cal.add(123,1231))
console.log(cal.minus(1231,423))
console.log(cal.multiple(12,12))

// interface를 이용하여 명세를 하고
// 해당 interface을 implement한 class를 구현한다.
// 구현한 class를 모듈로 불러와서 사용한다.

// class를 담는 변수의 타입은 클래스를 넣는게 아닌 명세인 interface타입을 넣어준다.
// 위와 같이 하는 이유는 각 결합도를 낮추어 확장성을 높이기 위함이다.
// 또한 예를들어 여러 버전에 맞춰 편하게 확장하기 위해서이다.
// 여러 버전이 있다면 구현 단계에서 구현된것들만 바꿔 끼우면 되기 때문에?? 아직 확 느껴지진 않는다...