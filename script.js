const buttons = document.querySelectorAll(".btn");
imageContainer = document.querySelector(".image-container");
const pictures = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"
];
let counter = 0;

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        if(button.classList.contains("btn-left")){
            counter--;
            if(counter < 0){
                counter = pictures.length - 1;
            }
            imageContainer.style.background =`url("./images/${pictures[counter]}.jpg")`;
        } 
        if(button.classList.contains("btn-right")){
            counter++;
            if(counter > pictures.length - 1){
                counter = 0;
            }
            imageContainer.style.background =`url("./images/${pictures[counter]}.jpg")`;
        } 
    })
});
