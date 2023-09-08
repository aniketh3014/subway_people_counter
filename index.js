let ele = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
function increment() {
    count += 1
    ele.innerText = count
}
function save() {
    let countStr = count + " - "
    saveEl.innerText += countStr   
    console.log(count)
}