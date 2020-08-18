let mainElem = document.querySelector(".main_first")
let mainClients = document.querySelector(".main_clients")
let oreolCont = document.querySelector(".oreol");
let mainWeDo = document.querySelector(".main_wedo");
let weDoNav = document.querySelectorAll(".main_wedo__table_gap");
let mainTeam = document.querySelector(".main_team");
let counterCont = document.querySelector(".main_first__counter_amount");

weDoNav.forEach(elem => elem.addEventListener("mouseover", showDescription));
weDoNav.forEach(elem => elem.addEventListener("mouseout", deleteDesc))


//___________________________HOMEPAGE CURSOR_______________________________//
mainElem.addEventListener("mousemove", getCoords);

function getCoords() {
    oreolCont.classList.remove("hiden")
    let left = event.pageX;
    let top = event.pageY;
    if (left < 0){left = 0}
    if (top < 0){top =0}
    oreolCont.style.left= left - (oreolCont.offsetWidth /2) + "px";
    oreolCont.style.top= top - (oreolCont.offsetHeight / 2) + "px";
}
//____________________________HEADER TOOLTIP_____________________________________//
mainElem.addEventListener("mousemove", tooltip);
mainClients.addEventListener("mousemove", tooltip);
mainWeDo.addEventListener("mousemove", tooltip);
mainTeam.addEventListener("mousemove", tooltip)
let tooltipCont;
function tooltip() {
    removeTip()
    let tip  = event.target.dataset.tooltip;
    if (tip){
        tooltipCont = document.createElement("div");
        tooltipCont.classList.add("tooltip__elem");
        tooltipCont.innerHTML= tip.toUpperCase();
        document.body.append(tooltipCont);
        let position = event.target.getBoundingClientRect()
        let left = event.clientX - tooltipCont.offsetWidth / 2
        let top = (position.top - tooltipCont.offsetHeight) + tooltipCont.offsetHeight / 2;
        if (left < 0){left = 0};
        if (top < 0) {top = 0};
        tooltipCont.style.left = left + "px";
        tooltipCont.style.top = top + "px";
        tooltipCont.style.animation= "toolTip 0.1s ease-out"
    } else {
        return
    }
}

function removeTip(e) {
 if (tooltipCont){
    tooltipCont.remove()
     tooltipCont = null
 }
}
//__________________________VIEWERS COUNTER_______________________________________//
let countArr = ++counterCont.textContent;
setInterval(function () {
    counterCont.innerHTML= countArr++

}, 50)

//__________________________WE DO NAVIGATION AND DESCRIPTION _______________//
function showDescription() {
    mainWeDo.insertAdjacentHTML("beforeend", "<div class='wedo_description'></div>")
    let description = document.querySelector(".wedo_description")
    description.innerHTML= "<img class='wedo_description__image' src='img/weDo/"+this.id+"Main.png'><p class='wedo_description__quote'>"+this.dataset.quote+"</p>"
}
function deleteDesc() {
    let del = document.querySelector(".wedo_description");
    del.remove()
}
