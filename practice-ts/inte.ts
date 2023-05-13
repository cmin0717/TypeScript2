// 데이터의 무결성 (proxy)
// get	프로퍼티를 읽을 때
// set	프로터티에 값을 쓸 때
// has	in 연산자가 작동할 때
// deleteProperty	delete 연산자가 작동할 때
// Method 가로채는 트랩	작동 시점
// apply	함수를 호출할 때
// constructor	new 연산자가 작동할 때


// 대상 객체(Real Subject)
interface IUSer2 {
    firstName: string
    lastName: string
    email?: string
}
const user3: IUSer2 = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
}

// 핸들러 (handler) // target의 동작을 제어하는 메서드를 정의한 객체
// target : Proxy의 대상이 되는 대상 객체
const handler = {
    // 각각의 핸들러 매서드의 타입 형태에 맞게 작성해주어야한다.(리턴값도 잘 신경써야한다.)

	// 대상 객체의 프로퍼티를 읽을 때 발동
    get(target: IUSer2, property: keyof IUSer2) {
        console.log(`Property ${property} has been read.`);
        return target[property];
    },

    // 대상 객체의 프로퍼티를 쓸 때 발동
    set(target: IUSer2, prop: keyof IUSer2, value: any) {
        console.log("프로퍼티 쓸 때 중간에 가로채어 로직 시행");
        console.log('target: ', target); // 대상 객체
        console.log('prop: ', prop); // 프로퍼티 이름
        console.log('value: ', value); // 할당한 값
        target[prop] = value
    
        return true; // 값을 쓰는 게 성공적으로 처리되었으면 반드시 true를 반환해야 한다. 그렇지 않은 경우는 false를 반환해야 한다.
        // false를 반환하면 오류를 발생시킨다. 따로 처리하지 않으면 문제가 발생할듯 (catch등을 사용하여 처리해야할듯하다.)
    },

    // 대상 객체의 프로퍼티가 있는지 검사하는 in 연산자가 작동할 때 발동
    has(target: IUSer2, prop: keyof IUSer2){
        console.log("프로퍼티 확인 때 중간에 가로채어 로직 시행");

        console.log('target: ', target); // 대상 객체
        console.log('prop: ', prop); // 프로퍼티 이름

        return false
    },

    // 대상 객체의 프로퍼티를 삭제할 때 발동
    deleteProperty(target: IUSer2, prop: keyof IUSer2) {
        console.log("프로퍼티 삭제할 때 중간에 가로채어 로직 시행");

        console.log('target: ', target); // 대상 객체
        console.log('prop: ', prop); // 프로퍼티 이름

        console.log("삭제 제한");
        
        return true; // 값을 지우는 게 성공적으로 처리되었으면  반드시 true를 반환해야 한다. 그렇지 않은 경우는 false를 반환해야 한다.
    },
}

// 프록시 생성 및 등록
const proxyUser = new Proxy<IUSer2>(user3, handler); // user3가 target이 되고 handler가 해당 타켓을 제어할 매서드가 된다.


// 프록시 대상의 프로퍼티를 읽으려고 할때 get 핸들러가 동작한다.
console.log(proxyUser.firstName); // firstName이 property값으로 들어가게된다.
console.log(proxyUser.lastName);

// 프록시 대상의 프로퍼티를 변경하려고 할때 set 핸들러가 동작한다.
proxyUser.email = 'cyun0717@qweq.com'
console.log(proxyUser.email)

// 대상 객체의 프로퍼티가 있는지 검사하는 in 연산자가 작동할 때 has 핸들러 동작 
if("name" in proxyUser) {
    // 위에서 in연산자로 인해 has 핸들러로 이동후 has핸들러의 리턴값에 의해
    // ture면 나머지 진행하고 false면 if문에서 걸러졌을것이다.
}

// 대상 객체의 프로퍼티를 삭제할 때 발동
delete proxyUser.email
console.log(proxyUser.email)