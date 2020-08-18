let loadProg = document.body.querySelector(".preloader__percent");
let loadNum = ++loadProg.textContent;
let inter = setInterval(function () {
    if (loadNum >= 100){
        clearInterval(inter)
    } else {
        loadProg.innerHTML= loadNum++
    }
}, 50)



window.onload = function () {
    clearInterval(inter)
    loadProg.innerHTML = 100;
    document.body.querySelector(".preloader").classList.add("hide_preload")
}
setTimeout(function () {
    document.body.querySelector(".preloader").classList.add("hiden")
},1000)
