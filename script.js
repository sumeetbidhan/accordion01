document.addEventListener('DOMContentLoaded', () =>{
  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const active = document.querySelector('.accordion-header.active');

      if(active && active !== header){
        active.classList.remove('active');
        active.nextElementSibling.style.maxHeight = null;
      }

      header.classList.toggle('active');
      const content = header.nextElementSibling;
      if(header.classList.contains('active')){      
        content.style.maxHeight = content.scrollHeight + 'px';
      }else{
        content.style.maxHeight = null;
      }
    })
  })
})