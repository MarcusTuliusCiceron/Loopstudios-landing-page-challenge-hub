const hamburgerBtn = document.querySelector('.hamburgerBtn')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')

hamburgerBtn.addEventListener('click', ()=>{
    console.log('click')
    if (overlay.classList == 'overlay'){
        
        overlay.classList.toggle('open')
        body.classList.toggle('noscroll')
    }
    else{
        overlay.classList.toggle('open')
        overlay.classList.toggle('close')
        body.classList.toggle('noscroll')
    }
    
})