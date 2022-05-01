'use strict';

document.addEventListener('click', function (e) {
  var clicedElem = e.target;
  var editBtn = document.querySelector('.notes__note-menu');
  var editMenu = document.querySelector('.notes__note-body');

  if (clicedElem == editBtn) {
    editMenu.classList.toggle('active');
  } else if (!e.composedPath().includes(editMenu)) {
    editMenu.classList.remove('active');
  }

  ;
});