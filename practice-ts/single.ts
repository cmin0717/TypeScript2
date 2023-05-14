// Singleton 패턴
// 하나의 class(클래스)가 하나의 instance(인스턴스)만 갖는 것을 보장하는 디자인.
// 싱글톤 패턴은 오직 하나의 인스턴스를 가져야 하고 전역에서 접근할 수 있도록 제한하기 위해 사용한다. 
// 이 패턴은 하나의 앱에서 특정 작업을 한 곳에서 처리해야할 때 매우 유용하다.


// "private" 접근제어자로 "constructor"를 class 내부에서만 접근할 수 있게 설정한다.
// -instance를 "new" 키워드로 직접 생성하는 것을 막는다.
// "static" 접근제어자로 instance를 생성하는 getInstance 메서드를 정의한다.
// -instance를 메서드를 통해 생성, 반환받게 한다.

class Singleton {
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
        return this.instance
    }
}

// 아무리 많이 가져다가 써도 실제 Singleton의 초기화과정은 딱 1번밖에 없다.
const d1: Singleton = Singleton.getInstance()
const d2: Singleton = Singleton.getInstance()
const d3: Singleton = Singleton.getInstance()

// 서로 같은걸 가르키고 있다.
if (d1 === d3){
    console.log('same same!!')
}