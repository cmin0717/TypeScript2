// 여기서는 구현

import { ICalculator } from './cal'

// implements해준 타입의 속성을 모두 가지고 있게끔 구현해야한다.
export class CalculatorImpl implements ICalculator {
    add(a: number, b: number): number {
        return a+b
    }

    minus(a: number, b: number): number {
        return a-b
    }

    multiple(a: number, b: number): number {
        return a*b
    }
}