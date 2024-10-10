window.addEventListener('load' , () => {
    const btn = document.querySelector('.navbutton')
    const nav = document.querySelector('.navigation')
    
    btn.addEventListener('click', () => {
      if( nav.classList.contains('open') ) {
        nav.classList.remove('open')
      }
      else{
        nav.classList.add('open')
      }
    })
})