// 다른 파일에서 export하는 법

// 지정해서 몇개 가져오기
import { minus1 } from "./export" // {불러온 이름}

console.log(minus1(1,3))


// 해당 파일의 불러올수 있는 모든걸 불러오고 싶을때
import * as Math from "./export" // *을 이용하여 모두 불러오는데 as 이름으로 해당 이름으로 불러온다.

console.log(Math.minus1(3,5)) // 불러온 이름을 통해 해당파일의 export된 애들에 접근가능


// 네임스페이스를 통해 불러오기
import { MATH } from "./export"
import * as m from "./export"

console.log(MATH.minus5(4,6)) // 네임스페이스를 불러오고 해당 네임스페이스에 담긴것들을 사용할수있다.
console.log(m.MATH.minus5(123,4))