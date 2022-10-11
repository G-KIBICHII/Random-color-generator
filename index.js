const containerEl =document.querySelector(".container");



for (let index = 0; index < 30; index++) {
    const colorContainerEl =document.createElement("div");
    colorContainerEl.classList.add("color-container")
    containerEl.appendChild(colorContainerEl);

}

const colorContainerEls = document.querySelectorAll(".color-container");
// console.log(colorContainerEls);

generateColors()

function generateColors(){
    colorContainerEls.forEach((colorContainerEl)=>{
        const newColor =randomColor();
        // console.log(newColor);
        colorContainerEl.style.backgroundColor ="#" + newColor;
        colorContainerEl.innerText= "#"+ newColor;

    })
}


function randomColor(){
    const chars ="0123456789abcdef"
    const colorcodelen =6;
    let color =""
    for (let index = 0; index < colorcodelen; index++) {
        const randomNumber = Math.floor(Math.random()*chars.length);
        color += chars.substring(randomNumber,randomNumber+1);
        // console.log(color);
        

    }
    return color;
}

randomColor()