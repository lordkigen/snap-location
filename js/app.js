const menu =  document.getElementById('menubutton'),
             nav = document.getElementById('nav'),
             submitBtn =  document.getElementById('submitBtn'),
             getBtn = document.getElementById('getBtn'),
             modal = document.getElementById('modal'),
             form = document.getElementById('form');
            


// add and remove the nav
menu.addEventListener('click', () =>{
    if(!nav.classList.contains('navActive')){
        nav.classList.add('navActive')
    }else{
        nav.classList.remove('navActive')
    }   
})

// open modal
getBtn.addEventListener('click', () =>{
    modal.style.bottom = '0';
})

// close modal
submitBtn.addEventListener('click', ()=>{
   modal.style.bottom = '-100%';
})

// get form value
form.addEventListener('submit', (e) =>{
   e.preventDefault()
        const email = form.elements['email']
        const emailValue = email.value.trim()
})


// observer Func
const  title = document.querySelector('.container_left-title'),
              subtitle = document.querySelector('.container_left-desc');

const callbackfunc  = function(entries){
    entries.forEach((entry) => {
        if(entry.isIntersecting){
             title.style.paddingTop = '0';
             subtitle.style.paddingTop = '0';
        }
    })
}

const observer = new  IntersectionObserver(callbackfunc)

// invoke the observer
observer.observe(title, subtitle)