const hamburgerBtn = document.querySelector('.hamburgerBtn')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')


// top section
hamburgerBtn.addEventListener('click', ()=>{
    console.log('click')
    if (overlay.classList == 'overlay'){
        
        overlay.classList.toggle('open')
        body.classList.toggle('noscroll')
        hamburgerBtn.classList.toggle('open')
    }
    else{
        overlay.classList.toggle('open')
        overlay.classList.toggle('close')
        body.classList.toggle('noscroll')
        hamburgerBtn.classList.toggle('open')
    }
    
})

//center section


const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('inner_box_in_view');
        document.querySelector('.center_section').classList.add('center_section_in_view')
      }
    });
  });
  
  observer.observe(document.querySelector('.inner_box'));