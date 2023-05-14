// builder 패턴 : 복잡한 객체를 단계별로 생성할 수 있는 creational design pattern이다.
// 빌더는 제품이 공통 인터페이스를 가질 필요가 없다. 따라서 동일한 공정으로 서로 다른 제품을 생산할 수 있다.
// 매개변수가 많은 생성자에서는 모든 매개변수가 항상 필요한 것은 아니다. 그렇기에 필요한 매개변수만 입력해주어서 클래스를 만들자
// 빌더 패턴은 자체 클래스에서 객체 생성자 코드를 추출하여 객체의 특정 구성을 생성하는데 필요한 단계만 호출할 수 있다.

class UserEntity {
  // 초기화 방법 1
  // name?: string
  // age?: number
  // marketing?: boolean

  // constructor (name?: string, age?: number, marketing?: boolean){
  //     if(name) this.name = name
  //     if(age) this.age = age
  //     if(typeof marketing === 'boolean') this.marketing = marketing
  // }

  // 초기화 방법 2
  // 사용시 "strictNullChecks": false, 옵션을 꺼줘야 한다. 엄격한 널,언디파인드에서 오류가 난다.
  constructor(
    public name: string,
    public age: number,
    public marketing: boolean
  ) {}

  // builder 패턴 생성
  static Builder = class {
    private _name?: string;
    private _age?: number;
    private _marketing?: boolean;

    // 해당 과정에서 데이터의 무결성을 지킬수있게 따로 처리를 해줄수도 있따.
    name(value: string) {
      this._name = value;
      // 리턴 this를 해주어야 리턴한 클래스를 가지고 계속 이어갈수있다.
      return this;
    }
    age(value: number) {
      this._age = value < 0 ? -value : value;
      return this;
    }
    marketing(value: boolean) {
      this._marketing = value;
      return this;
    }
    // 주어진 매개변수들을 이용하여 UserEntity생성 후 리턴
    build(): UserEntity {
      return new UserEntity(this._name, this._age, this._marketing);
    }
  };
}

// 빌더을 이용하여 매개변수로 주고 싶은 애들만 넘겨서 클래스를 생성할수있다.

// 위에서 UserEntity클래스의 초기화 방법을 1로 하면 들어가지 않는값들은 아래와같이 포함되지 않고 나온다.
const u3 = new UserEntity.Builder().name("asdf").build();
console.log(u3); // UserEntity { name: 'asdf' }

const u4 = new UserEntity.Builder()
  .name("ads")
  .age(-30)
  .marketing(true)
  .build();
console.log(u4); // UserEntity { name: 'ads', age: 30, marketing: true }

// 초기화 방법 2를 사용한다면 주어진 값 이외의 값은 undefined로 들어가서 나오게된다.
const u5 = new UserEntity.Builder().name("asdf").build();
console.log(u5); // UserEntity { name: 'asdf', age: undefined, marketing: undefined }

const u6 = new UserEntity.Builder()
  .name("ads")
  .age(-30)
  .marketing(true)
  .build();
console.log(u6); // UserEntity { name: 'ads', age: 30, marketing: true }

// 데코레이터를 이용하여 builder 패턴을 자동화하여 만들수있다.
// 하지만 타입적인 부분에서 많은 any가 사용되고 그닥 좋아보이지는 않는다.
