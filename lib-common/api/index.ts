export  const apiFetchUserInf = ()=>{
    return new Promise((resolve, reject) => {
        resolve({
            uname: 'zs',
            age: 11
        })
    })
    
}