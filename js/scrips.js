const echipamente = document.getElementById("li-echipamente");
const menuEchipamente = document.getElementById("second-menu-echipamente");
const servicii = document.getElementById("li-servicii");
const menuServicii = document.getElementById("second-menu-servicii");
const html = document.documentElement;
const echipamenteTableta = document.getElementById("li-echipamente-tableta");
const serviciiTableta = document.getElementById("li-servicii-tableta");
const meniuEchipamenteTableta = document.getElementById("second-menu-echipamente-tableta");
const meniuServiciiTableta = document.getElementById("second-menu-servicii-tableta");
const burger = document.getElementById("hamburger");
const menuTableta = document.getElementById("nav-tableta");
echipamente.addEventListener("click", openEchipamente);
function openEchipamente(e){
    menuEchipamente.classList.toggle("menu-open");
    menuServicii.classList.remove("menu-open");
    e.stopPropagation();
};
servicii.addEventListener("click", openServicii);
function openServicii(e){
    menuEchipamente.classList.remove("menu-open");
    menuServicii.classList.toggle("menu-open");
    e.stopPropagation();
};
document.onclick = function(){
    menuEchipamente.classList.remove("menu-open");
    menuServicii.classList.remove("menu-open");
};
echipamenteTableta.addEventListener("click", openEchipamenteTableta);
function openEchipamenteTableta(){
    meniuEchipamenteTableta.classList.toggle("hidden");
    meniuServiciiTableta.classList.add("hidden");
}
serviciiTableta.addEventListener("click", openServiciiTableta);
function openServiciiTableta(){
    meniuEchipamenteTableta.classList.add("hidden");
    meniuServiciiTableta.classList.toggle("hidden");
};
burger.addEventListener("click", openTableta);
function openTableta(e){
    menuTableta.classList.toggle("open-tableta");
};