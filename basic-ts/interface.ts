interface IPerson {
    name: string
    age: number
    city?: string
}

const man: IPerson = {
    name:'Capt',
    age: 100,
    city:'Seoul'
}

const ptr = (params: IPerson): void => {
    let default_city: string = 'Busan'
    console.log(params.city ?? default_city)
}
ptr(man)