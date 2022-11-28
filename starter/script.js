'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-modal');
const modalShowBtns = document.querySelectorAll('.show-modal');
const closeModal = function(){
      modal.classList.add('hidden')
      overlay.classList.add('hidden')
}

const openModal = function(){
      modal.classList.remove('hidden')
      overlay.classList.remove('hidden')
}

modalShowBtns.forEach(item => {
            item.addEventListener('click', function(){
      })
})

closeButton.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal);
