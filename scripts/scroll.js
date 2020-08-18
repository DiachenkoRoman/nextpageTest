let controller = ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: "onLeave"
    }
});

let sections = document.getElementsByTagName("section");

for (let elem of sections){
    new ScrollMagic.Scene({
        triggerElement: elem,
    }).setPin(elem).addTo(controller)
}
