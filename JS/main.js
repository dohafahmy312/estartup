let body = document.body;
let icon = document.querySelectorAll('.theem-toggle i');
let headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
let paragraphs = document.querySelectorAll("p");
let nav = document.querySelector(".navbar");
let navitem = document.querySelector(".navbar .nav-item");


let sections = document.querySelectorAll("section");
let buttons = document.querySelectorAll("button");
let boxes = document.querySelectorAll(".box");
let icons = document.querySelectorAll('i')
let theem = 'dark'
icon[0].addEventListener('click', function () {
    if (theem == 'dark') {
        body.classList.add('darkmood');
        icon[0].classList.add('d-none');
        icon[1].classList.remove("d-none");
        theem = 'light';
        section.forEach(function (sec) {
            sec.style.backgroundColor = null;

        });
        headers.forEach(function (header) {
            header.style.color = null;
        });
        buttons.forEach(function (button) {
            button.style.backgroundColor = null;
        });
        nav.style.backgroundColor = null;


    }


}

);
icon[1].addEventListener('click', function () {
    if (theem == 'light') {
        body.classList.remove('darkmood');
        icon[0].classList.remove('d-none');
        icon[1].classList.add('d-none');
        theem = 'dark';



    }


});

let btnclose = document.getElementById('btn_closee');
let offcanvans = document.querySelector('.colors');
let setting = document.querySelector('.bi-gear');

let open = () => {
    offcanvans.style.display = "flex";


}
setting.addEventListener("click", open);

let close = () => {
    offcanvans.style.display = "none";

}
btnclose.addEventListener('click', close);
//  let box=document.querySelectorAll('.color-option-background-body');
let section = document.querySelectorAll("section");
let changeheadercolor = document.querySelectorAll(".color-option-headercolor");
let backdrounsectionsbox = document.querySelectorAll(".color-option-section")
let coloroptionbuttoncolor = document.querySelectorAll(".color-option-buttoncolor");
let coloroptionnavbar = document.querySelectorAll(".color-option-navbar");
let clearbutton = document.getElementById("clearbutton");


backdrounsectionsbox.forEach(function (box) {

    let color = box.getAttribute("data-color");
    box.style.backgroundColor = color;
    box.addEventListener('click', function () {
        section.forEach(function (sec) {
            sec.style.backgroundColor = color;

        });

    });
});
changeheadercolor.forEach(function (box) {
    let color = box.getAttribute('data-color');
    box.style.backgroundColor = color;
    box.addEventListener('click', function () {

        headers.forEach(function (header) {
            header.style.color = color;
        });
    });
});
coloroptionbuttoncolor.forEach(function (box) {
    let color = box.getAttribute("data-color");
    box.style.backgroundColor = color;
    box.addEventListener('click', function () {
        buttons.forEach(function (button) {
            button.style.backgroundColor = color;

        });
    });
});
coloroptionnavbar.forEach(function (box) {
    let color = box.getAttribute('data-color');
    box.style.backgroundColor = color;
    box.addEventListener("click", function () {

        nav.style.backgroundColor = color;
    });

});




clearbutton.addEventListener('click', function () {
    buttons.forEach(function (button) {
        button.style.backgroundColor = null;
    });
    headers.forEach(function (header) {
        header.style.color = null;
    });

    section.forEach(function (sec) {
        sec.style.backgroundColor = null;



    });
    nav.style.backgroundColor = null;

});