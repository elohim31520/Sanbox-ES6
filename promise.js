function getDataFromService(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("執行getDataFromService" ,'DATA')
            console.log('service已回應')
            resolve('拿到data')
        },3000)
        
    })
}

let login = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("已login")
            resolve('已登入')
        },1000)
        
    })
}

function sendToChrome(){
    console.log('chrome got')
}


let doSomething = async function(){
    await login()
    let getting = await getDataFromService()
    console.log("getting",getting)
    await sendToChrome()
    console.log('ALL DONE')
}

doSomething()