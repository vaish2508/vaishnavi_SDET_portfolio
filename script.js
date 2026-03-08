const terminal = document.getElementById("terminal")

const logs = [

"Initializing QA automation framework...",
"Loading API test suite...",
"Connecting to Azure cloud environment...",
"Executing microservice tests...",
"Running performance benchmarks...",
"CI/CD pipeline triggered...",
"Build status: SUCCESS"

]

let i = 0

function addLog(){

if(i < logs.length){

const line = document.createElement("div")

line.textContent = "> " + logs[i]

terminal.appendChild(line)

terminal.scrollTop = terminal.scrollHeight

i++

setTimeout(addLog,900)

}

}

addLog()
