const terminal = document.querySelector(".terminal-box")

const logs = [

"> Initializing automation framework...",
"> Loading API test suite...",
"> Executing microservice validations...",
"> Connecting to CI/CD pipeline...",
"> Running performance tests...",
"> Build Successful"

]

let i = 0

function addLog(){

if(i < logs.length){

const p = document.createElement("p")

p.textContent = logs[i]

terminal.appendChild(p)

i++

setTimeout(addLog,800)

}

}

addLog()
