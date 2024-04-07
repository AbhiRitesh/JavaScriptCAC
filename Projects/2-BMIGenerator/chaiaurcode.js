const form = document.querySelector('form')
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
       results.innerHTML = `Please give a valid height ${height}`;
    } else if(weight === '' || weight < 0 || isNaN(weight)){
       results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const res = (weight/((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>${res}</span>`
    }
    const res = (weight/((height*height)/10000)).toFixed(2)
    const message = document.querySelector('#message')
    if(res <= 18.6){
        message.innerHTML = '<span>Under Weight</span>'
    } else if(res>=18.6 && res<=24.9){
        message.innerHTML='<span>Normal Range</span>'
    } else if(res>=24.9){
        message.innerHTML='<span>Over weight</span>'
    }
})