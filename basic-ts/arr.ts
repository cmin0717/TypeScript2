// 배열 타입

const arr: number[] = [1,2,3]
const arr2: Array<number> = [1,2,3]

const arr3: string[] = ['hi', 'hello', 'world']
const arr4: Array<string> = ['hi', 'hello', 'world']

const arr5: (number | string | boolean)[] = [1,true,false,'haha']

interface IPerson {
    name:string,
    age:number,
    city?: string
}


const arr6: IPerson[] = [
    {
        name:'Capt',
        age: 100,
        city:'Seoul'
    },
    {
        name:'Capt',
        age: 100,
    },
    {
        name:'Capt',
        age: 100,
        city:'Seoul'
    },
    {
        name:'Capt',
        age: 100,
    }
]

arr6.forEach((data) => console.log(data.city ?? 'default'))


// 튜플 : 배열의 길이 length와 안에 원소를 바꿀수 없는 자료형 / 불변성유지
// JS에서는 튜플의 자료형이 실제로는 존재하지 않는다. 논리적으로만 명시를하는것
const tp: [number, string, object, any[]] = [1, 'hi', {}, []]
tp.push('hahah') // 원해 튜플이라면 원소를 추가하거나 변경할수없다. 하지만 논리적 명시이기에 JS에서는 값이 들어간다.
