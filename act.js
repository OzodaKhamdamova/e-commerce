window.addEventListener('DOMContentLoaded' ,()=>{
    let showModal= document.querySelector('.show')
    let closeModal = document.querySelector('close')
showModal.addEventListener("click" , ()=>{
    document.querySelector('.form').classList.toggle('show')
})
closeModal.addEventListener('click' ,()=>{
    document.querySelector('.form').classList.remove('show')
})



})