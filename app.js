/*======= Select Elements =======*/
const navBtn = document.querySelector('.toggle-btn');
const navBar = document.querySelector('.nav-links');
const navLink = document.querySelectorAll('.nav-link')
const horBtn = document.querySelector('.bx-dots-horizontal-rounded')
const vertBtn = document.querySelector('.bx-dots-vertical-rounded')


/*======= Event Listeners =======*/
navBtn.addEventListener('click',()=>{
    navBar.classList.toggle('show-links');
    horBtn.classList.toggle('flat');
    vertBtn.classList.toggle('none');
})

navLink.forEach(link=>{
    link.addEventListener('click',()=>{
    navBar.classList.remove('show-links')
    horBtn.classList.remove('flat');
    vertBtn.classList.remove('none');
    })
})
/*======= Preloaders =======*/