// Singleton 패턴
// 하나의 class(클래스)가 하나의 instance(인스턴스)만 갖는 것을 보장하는 디자인.
// 싱글톤 패턴은 오직 하나의 인스턴스를 가져야 하고 전역에서 접근할 수 있도록 제한하기 위해 사용한다. 
// 이 패턴은 하나의 앱에서 특정 작업을 한 곳에서 처리해야할 때 매우 유용하다.


// "private" 접근제어자로 "constructor"를 class 내부에서만 접근할 수 있게 설정한다.
// -instance를 "new" 키워드로 직접 생성하는 것을 막는다.
// "static" 접근제어자로 instance를 생성하는 getInstance 메서드를 정의한다.
// -instance를 메서드를 통해 생성, 반환받게 한다.

class Singleton {
    // static은 정적 변수를 의미한다. 정적 메서드는 클래스의 인스턴스 없이 호출이 가능하며 클래스가 인스턴스화되면 호출할 수 없다.
    // 그렇기에 클래스를 new로 생성하지 않고도 접근할수있다.
    // 하지만 static으로 선언된 애들은 클래스의 데이터를 가져오지 못한다.
    // 그래서 클래스의 데이터를 가져오기 위해 this를 바인딩 해주어야한다.
    private static instance: Singleton

    private constructor() {
        console.log("싱글톤 생성!")
    }

    public static getInstance(): Singleton{
        // 맨 처음만 Singleton.instance가 없기에
        if(!Singleton.instance){
            // 처음에만 new를 사용하여 constructor가 실행되게 되는것이다.
            this.instance = new Singleton()
        }
        // 
        return this.instance
    }
}

// 아무리 많이 가져다가 써도 실제 Singleton의 초기화과정은 딱 1번밖에 없다.
const d1: Singleton = Singleton.getInstance()
const d2: Singleton = Singleton.getInstance() // getInstance를 static으로 선언했기에 Singleton를 생성하지 않고도 접근할수있는것
const d3: Singleton = Singleton.getInstance()

// 서로 같은걸 가르키고 있다.
if (d1 === d3){
    console.log('same same!!')
}


// 정적 메소드와 프로토타입 메소드
// 정적메소드는 인스턴스의 프로토타입 체인에 속해있지 않다. 그렇기 때문에, 정적 메소드와 프로토타입 메소드는 아래와 같은 차이점을 가지게 된다

// 정적 메소드 : 클래스로 호출한다. / 프로토타입 메소드 : 인스턴스로 호출한다.
// 정적 메소드는 생성자 함수로 인스턴스를 생성하지 않아도 호출할 수 있는 메소드를 말한다. 
// 그렇기 때문에, 정적 메소드는 클래스로 호출이 가능하다. 인스턴스를 생성하지 않아도 클래스로 호출을 할 수 있다.

// 정적 메소드 : 인스턴스의 프로퍼티를 참조하지 않는다 / 프로토타입 메소드 : 인스턴스의 프로퍼티를 참조한다

// 정적 메소드는 클래스로 호출되기 때문에, 인스턴스로 호출되는 클래스와는 내부의 this가 다를 수 밖에 없다
// 따라서, this를 사용해야하는 경우엔 프로토타입 메소드로 정의해야 한다. 
// 반면에 this로 인스턴스의 프로퍼티를 참조해야할 필요가 없고 클래스 호출만으로도 충분하다면 정적 메소드로 만들면 된다.