'use strict'

document.addEventListener('click', (e)=>{
    let clickedElem = e.target
    const editBtn = document.querySelector('.notes__btn-note-menu');
    const editMenu = document.querySelector('.notes__body-note-menu');

    if (clickedElem == editBtn){
        editMenu.classList.toggle('active');
    } else if ( ! e.composedPath().includes(editMenu)){
        editMenu.classList.remove('active');
    };

    let notesCounter = 1;
    const notesContainer = document.querySelector('.notes__list');


    let note = document.createElement('div')
    function createNote() {
        note.classList.add('notes__note')
        note.setAttribute('data__note', notesCounter)
        note.innerHTML = `<div ><h4 class="notes__note-name">Note</h4><p class="notes__last-changes">latest changes 5 minutes ago</p></div>`
        notesContainer.insertAdjacentElement('beforeend', note)
        notesCounter++
    }

    if (clickedElem.hasAttribute("data-note-create")){
        createNote()
    } else if (clickedElem.hasAttribute("data-note")){
        // selectNote()
        clickedElem.classList.add('note-active')
    } else if (clickedElem.hasAttribute('data-note-delete')){
        console.log('true');
        let noteDel = note.hasAttribute('data-note')
        .remove(noteDel)
    }
});

