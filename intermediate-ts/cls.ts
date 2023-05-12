// 클래스 - 접근 제한자

class UserInfo {
    // 접근 제한자
    public name: string // public : 접근 get 설정 set 2개가 외부,내부 둘다 사용가능(디폴트 값이다.)
    protected age: number // protected : 접근 get 설정 set 2개가 해당 클래스에서만 + 자신을 상속한 자식에서만 사용가능
    private _city: string // private : 접근 get 설정 set 2개가 해당 클래스에서만 사용가능
    // privat는 관례적으로 이름 앞에 _를 붙여서 사용한다.

    constructor(name: string, age:number, city: string){
        this.name = name
        this.age = age
        this._city = city
    }

    // get과 set을 이용하여 private, protected의 값들을 내가 원하는대로 변경 혹은 출력할수있다
    get city(): string{
        return `my city is ${this._city}`
    }
    set city(newCity: string){
        this._city = newCity
    }
}

const user = new UserInfo('Cpat', 100, 'USA')
// user.age = 101 // age는 현재 protected이기에 외부에서는 접근하지 못한다.
// console.log(user.age) // 출력 또한 안된다.
// console.log(user._city)

user.city = 'Busan' // set city 호출
console.log(user.city) // get city 호출

// 왜 private에 두고 get과 set를 이용하여 호출하는가? 그냥 public으로 하면안되나??
// 코드의 호환성이 좋아진다. 저장은 정해진 규칙대로 저장하고 그때그때 마다 출력을 다르게 해주어야한다면
// 쉽게 get과 set만 변경해주면 쉽게 고칠수있다.
// 의도에 맞게 클래스의 요소들을 저장하고 변경하기위해 private로 설정후 get과 set를 이용하여 접근 변경한다.

