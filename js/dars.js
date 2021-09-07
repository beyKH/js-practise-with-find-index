// Kontaktlarni joylash uchun bo'sh array ochamiz
var contacts = [];


// DOM
var elNewContactForm = document.querySelector('.js-new-contact-form');
var elNewContactNameInput = elNewContactForm.querySelector('.js-new-contact-name-input');
var elNewContactRelationshipInput = elNewContactForm.querySelector('.js-new-contact-relationship-input');
var elNewContactPhoneInput = elNewContactForm.querySelector('.js-new-contact-phone-input');
var elContactPhoneSpan = document.querySelector(".phone-span");

var elContacts = document.querySelector('.contacts');
var elContactsList = elContacts.querySelector('.contacts__list');


var addContact = function () {
  // Add contact to contacts array
    contacts.push({
      name: elNewContactNameInput.value.trim(),
      relationship: elNewContactRelationshipInput.value.trim(),
      phone: elNewContactPhoneInput.value.trim()
    });
}


var resetInputs = function () {
  // Reset inputs
    elNewContactNameInput.value = '';
    elNewContactRelationshipInput.value = '';
    elNewContactPhoneInput.value = '';
}

var showContacts = function () {
  elContactsList.innerHTML = '';
    var elContactsFragment = document.createDocumentFragment();

    for (var contact of contacts) {
      var elNewLi = document.createElement('li');
      elNewLi.classList.add('list-group-item', 'p-3');

      var elNewHeading = document.createElement('h3');
      elNewHeading.classList.add('h5');
      elNewHeading.textContent = contact.name;
      elNewLi.appendChild(elNewHeading);

      var elNewRelDiv = document.createElement('div');
      elNewRelDiv.classList.add('mb-2');
      elNewRelDiv.textContent = contact.relationship;
      elNewLi.appendChild(elNewRelDiv);

      var elNewPhoneLink = document.createElement('a');
      elNewPhoneLink.classList.add('btn', 'btn-outline-success', 'btn-sm');
      elNewPhoneLink.href = contact.phone;
      elNewPhoneLink.textContent = contact.phone;
      elNewLi.appendChild(elNewPhoneLink);

      elContactsFragment.appendChild(elNewLi);
    }

    elContactsList.appendChild(elContactsFragment);
}

console.log(contacts);



// Form bo'lsa
if (elNewContactForm) {
  elNewContactForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

  var findContact = contacts.findIndex(function (contact) {
    return contact.phone == elNewContactPhoneInput.value.trim();
  });

    console.log(findContact);
    if (findContact == -1) {
      addContact();
      elNewContactPhoneInput.classList.remove("is-invalid");
      elContactPhoneSpan.classList.add("d-none");
    }else{
      elNewContactPhoneInput.classList.add("is-invalid");
      elContactPhoneSpan.classList.remove("d-none");

    }
    resetInputs();

    // addContact funksiyasi yordamida yangi kontaktni contactsga qo'shiladi
    // showContacts funksiyasi yordamida HTMLda kontaktlarni ko'rsatamiz

    showContacts();

  });
}
// Form submitda amal bajariladi


var ElformInput = document.querySelector('form-control');

elNewContactForm.addEventListener('click', function(e) {
  e.preventDefault();


})
