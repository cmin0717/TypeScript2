export const minus1 = (a:number, b:number):number => a-b

export const minus2 = (a:number, b:number):number => a-b

export const minus3 = (a:number, b:number):number => a-b

export const minus4 = (a:number, b:number):number => a-b

// 네임스페이스 (다른 파일에서 같은 이름를 불러오는 상황들을 방지하기 위해)
namespace MATH {
    export const minus5 = (a:number, b:number):number => a-b
    
    export const minus6 = (a:number, b:number):number => a-b
    
    export const minus7 = (a:number, b:number):number => a-b

    // export { minus5, minus6, minus7 } 네임스페이스에서는 한꺼번에 내보는것이 안된다.
}

export { MATH }
// export {minus1. minus2, minus3, minus4, minus5} 각각의 export를 붙여서 export할수있지만 한꺼번에 export를 할수도 있다.