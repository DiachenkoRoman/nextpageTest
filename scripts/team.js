//_____________Person constructor____________________//
function Teammate(person, photo, spec){
        this.person= person;
        this.photo= photo;
        this.spec= spec;
}

let teamList = document.querySelector(".main_team__list");

let tom = new Teammate("Thomas", "img/1.png", "Videomaker");
let mag = new Teammate("Maggie", "img/2.png", "Soundmaker");
let gab = new Teammate("Gabbie", "img/3.png", "Designer");
let bai = new Teammate("Bailey", "img/4.png", "Technician");

//_____________Array of teammates (objects)__________//

let team = [tom, mag, gab, bai];

//______Teammates list parsing and fulfilling_______//

teamList.innerHTML = team.map(elem => {
    return(`
        <li class="main_team__list_item" style="background-image:url(${elem.photo})" 
                                         data-person=${elem.person} 
                                         data-spec=${elem.spec}>                         
        </li>
    `)
}).join("");

//____________Teammates hover_____TEST_____________//

let teamItem = document.querySelectorAll(".main_team__list_item");
teamItem.forEach(elem => elem.addEventListener("mouseover", teamMateDesc));

function teamMateDesc() {
    this.innerHTML = `<div class="main_team__list_item_hover">
                           <h3>${this.dataset.person}</h3>
                            <p>${this.dataset.spec}</p>
                      </div>`
}
