
const terminal = document.getElementById("terminal")

const logs = [
"Initializing automation framework...",
"Loading API test suite...",
"Executing microservice tests...",
"Validating database responses...",
"Running performance benchmarks...",
"Connecting to Azure CI/CD...",
"Build successful ✔"
]

let i = 0

function addLog(){
if(i < logs.length){
const line = document.createElement("div")
line.textContent = "> " + logs[i]
terminal.appendChild(line)
terminal.scrollTop = terminal.scrollHeight
i++
setTimeout(addLog,800)
}
}

addLog()
