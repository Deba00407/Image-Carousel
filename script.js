let slidemover = document.querySelector(".slide-mover");
let containers = document.querySelectorAll('.slide');
let container = document.querySelector(".container");
let currentIndex = -1;

//Creating slide mover buttons
for (let index = 0; index < containers.length; index++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute('class', 'mover-dot');
    slidemover.insertAdjacentElement('beforeend', newDiv);

    newDiv.addEventListener('click', () => {
        container.style.backgroundImage = getComputedStyle(containers[index]).backgroundImage;
    });
}

//Adding button functionality
let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
btn1.addEventListener("click", () => {
    if (currentIndex > 0){
        currentIndex--;
        container.style.backgroundImage = getComputedStyle(containers[currentIndex]).backgroundImage;
    }
})

btn2.addEventListener("click", () => {
    if (currentIndex < containers.length){
        currentIndex++;
        container.style.backgroundImage = getComputedStyle(containers[currentIndex]).backgroundImage;
    }
})

//Automatically changing the image on the screen
async function timer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 5000);
    });
}

async function main() {
    while (true) {
        await timer();
        let rand = Math.floor(Math.random() * containers.length);
        container.style.backgroundImage = getComputedStyle(containers[rand]).backgroundImage;
        currentIndex = rand;
    }
}
main();
document.title = 'Image Carousel'

