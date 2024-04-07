//generate a random color
const randomColor = function(){
    const hexValue = "0123456789ABCDEF"
    let color = '#'
    for(let i=0; i<6; i++){
        color += hexValue[Math.floor(Math.random()*16)]
    }
    return color
}

let interChange;
const changeColour = function(){
    if(!interChange){
        interChange = setInterval(changeBgColor, 1000)
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    }
};
const stopChangingColor = function (){
    clearInterval(interChange)
    interChange = null
}
document.querySelector('#start').addEventListener('click', changeColour)
document.querySelector('#stop').addEventListener('click', stopChangingColor)