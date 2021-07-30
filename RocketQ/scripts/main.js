import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector(".modal h2")
const modalDescription = document.querySelector(".modal p")
const modalButton = document.querySelector(".modal button")

const roomID = document.querySelector("#room-id").dataset.id

const slug = check ? "check" : "delete"

const questionID = event.target.dataset.id

const form = document.querySelector(".modal form")
form.setAttribute("action", `/room/${roomID}/:question/${slug}`)



//Pegar quando o marcar quando lido for clicado
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button =>{
    //adicionar a escuta
    button.addEventListener("click", event =>{
        modalTitle.innerHTML = "Marcar como lida"
        modalDescription.innerHTML = "Tem certeza que deseja marcar como lida esta pergunta?"
        modalButton.innerHTML = "Sim, marcar"

        modalButton.classList.remove("red")
        modal.open()
    })
})

/*  Quando delete for clicado, ele abre a modal*/
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", event => {
        modalTitle.innerHTML = "Excluir esta pergunta"
        modalDescription.innerHTML = "Tem certeza que deseja excluir esta pergunta?"
        modalButton.innerHTML = "Sim, excluir"
        modalButton.classList.add("red")
        modal.open()
    })
})