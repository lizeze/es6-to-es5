let fn1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ok')
        })
    })
}

let fn2 = async () => {
    let res = await fn1();
    console.log(res);
}

fn2()
