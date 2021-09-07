var LOCAL_PASSWORD = 'jprq2021';

// SIDEBAR MODAL
var elsSidebarModalProfilesToggler = document.querySelectorAll('.js-sidebar-modal-profiles-toggler');
var elSidebarModaProfilesExpandIcon = document.querySelector('.sidebar-modal__expand-icon');


// LOCK MODAL
var elLockModal = document.querySelector('.lock-modal');
var elLockModalForm = elLockModal.querySelector('.js-lock-modal-form');
var elLockModalPasswordInput = elLockModalForm.querySelector('.js-lock-modal-password-input');
var elLockModalIncorrectPasswordNotice = elLockModalForm.querySelector('.js-lock-modal-incorrect-password-notice');


// SIDEBAR MODAL
if (elsSidebarModalProfilesToggler.length > 0) {
  elsSidebarModalProfilesToggler.forEach(function (toggler) {
    toggler.addEventListener('click', function () {
      elSidebarModaProfilesExpandIcon.classList.toggle('sidebar-modal__expand-icon--open');
    });
  })
}


// LOCK MODAL
if (elLockModalForm) {
  elLockModalForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    var userPassword = elLockModalPasswordInput.value;

    if (userPassword === LOCAL_PASSWORD) {
      $('#lock-modal').modal('hide');
      elLockModalPasswordInput.value = '';
      elLockModalIncorrectPasswordNotice.classList.add('d-none');
    } else {
      elLockModalIncorrectPasswordNotice.classList.remove('d-none');
    }
  });
}
