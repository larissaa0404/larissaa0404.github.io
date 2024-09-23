// const header = document.getElementById("header");
// document.body.appendChild(header.content);

// Get the element
const buttonP = document.querySelector("#python");
const buttonJ = document.querySelector("#javascript");

const certificateP = document.querySelector("#certificateP");
const certificateJ = document.querySelector("#certificateJ");

const cancelP = document.querySelector("#cancelP");
const cancelJ = document.querySelector("#cancelJ");

const getAllLink = document.querySelectorAll(".group");
const sectionELs = document.querySelectorAll("section");

// Listen for the user to hover over the image

buttonP.addEventListener("click", () => {
    certificateP.classList.remove("hide");
    certificateP.classList.add("open");
});
buttonJ.addEventListener("click", () => {
    certificateJ.classList.remove("hide");
    certificateJ.classList.add("open");
});

// Listen for user to leave image
cancelP.addEventListener("click", () => {
    certificateP.classList.add("hide");
    certificateP.classList.remove("open");
});

cancelJ.addEventListener("click", () => {
    certificateJ.classList.add("hide");
    certificateJ.classList.remove("open");
})

// Listen for windows scroll
function navActive() {
    let len = sectionELs.length;
    while(--len && window.scrollY - 290 < sectionELs[len].offsetTop){}
    getAllLink.forEach(nav => nav.classList.remove('active'));
    getAllLink[len].classList.add('active');
}

window.addEventListener("scroll", navActive)

getAllLink.forEach(link.addEventListener('click', () => {
    link.classList.add('active');
}))