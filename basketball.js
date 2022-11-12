let countEl = document.getElementById("count-el")
let countEls = document.getElementById("count-els")
let count = 0;
let counts = 0;
function increment_1(){
    count += 1
    countEl.innerText = count
}
function increment_2(){
    count += 2
    countEl.innerText = count
}
function increment_5(){
    count += 5
    countEl.innerText = count
}
function increment_one(){
    counts += 1
    countEls.innerText = counts
}
function increment_two(){
    counts += 2
    countEls.innerText = counts
}
function increment_five(){
    counts += 5
    countEls.innerText = counts
}