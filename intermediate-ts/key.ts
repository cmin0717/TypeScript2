// key와 같이 쓰는 타입 1

interface IName1 {
    name: string
}
interface IAge1 {
    age: string
}
interface ICity1 {
    city: string
}

// 객체에서 []표시는 키값을 변수로 받는다는 의미이다.
interface ISuperKey{
    // [변수명: 타입]은 해당 키값은 해당 타입으로 받는다는 의미이다. 변수명은 어떤것이 들어오든 상관없다.
    [props: string]: string
}

const ptr1 = (params: IName1 | IAge1 | ICity1) => {
    if ('name' in params){
        console.log(params.name)
    }
    else if ('age' in params){
        console.log(params.age)
    }
    else if ('city' in params){
        console.log(params.city)
    }
}
// ptr1({'asdf': 'asdfaf'}) 3개의 타입에 만족하지 못하기에 에러 발생
ptr1({'age': '123'})
// 이렇게도 표현할수있다.
const ptr2 = (params: ISuperKey) => {
    if ('name' in params){
        console.log(params.name)
    }
    else if ('age' in params){
        console.log(params.age)
    }
    else if ('city' in params){
        console.log(params.city)
    }
    // 위의 키값이 없다면 예외처리
    else console.log('error')
}
ptr2({'asdfads': 'fewafe'}) // 키와 벨류가 string이기만 하면 isuperkry 타입을 만족하기에 오류발생 X


// key와 같이 쓰는 타입 2

interface IBook {
    title: string
    publisher: string
    price: number
    author: string
}

enum IBook_element  {
    title = 'title',
    publisher = 'publisher',
    price = 'price',
    author = 'author'
}

const ptr3 = (params: IBook, key: keyof IBook) => {
    console.log(params[key])
}

// key 매개변수에 현재 keyof가 있기에 IBook의 속성 키값만 들어갈수잇다. 
// ptr3({title:'sads', publisher:'safsad', price:21421, author:'sadfafs'}, 'asdfas')
ptr3({title:'sads', publisher:'safsad', price:21421, author:'sadfafs'}, 'title')

// enum을 사용하여 더욱 명확하게 키값을 사용할수있게 할수있다.
ptr3({title:'sads', publisher:'safsad', price:21421, author:'sadfafs'}, IBook_element.price)

// key와 같이 쓰는 타입 3
