const openBtn = document.querySelector(".modal-btn");
const modelContent = document.querySelector(".modal-overlay")
const closeBtn = document.querySelector(".close-btn")

openBtn.addEventListener('click' , ()=>{
    modelContent.classList.add("open-modal")
})

closeBtn.addEventListener('click' , ()=>{
    modelContent.classList.remove("open-modal")
})