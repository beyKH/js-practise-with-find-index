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
      phone: elNewContactPhoneInput.value.trim(),
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

      var elNewPhoneRemove = document.createElement("span");
      elNewPhoneRemove.classList.add("ms-2","text-danger","remove-phone");
      elNewPhoneRemove.style.cursor = "pointer";
      elNewPhoneRemove.textContent = "remove";
      elNewLi.appendChild(elNewPhoneRemove);

      elNewLi.setAttribute("data-id", contact.phone);


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


//FILM

// DOM
var elFilmTemplate = document.querySelector('.film').content;
// var elFilmCard = document.querySelector(".film-self");
// var elFilmName = document.querySelector('.film-name');
// var elFilmYear = document.querySelector('.film-year');
// var elFilmGenre = document.querySelector('.film-genre');
// var elFilmActor = document.querySelector('.film-actor');


var films = kinolar.slice(0,50);
var elFilms = document.querySelector(".movies");
var elFilmsFragment = document.createDocumentFragment();
for (const film of films) {
  var elNewFilmItem = elFilmTemplate.cloneNode(true);

  elNewFilmItem.querySelector('.film-name').textContent = film.title;
  elNewFilmItem.querySelector('.film-year').textContent = film.year;
  elNewFilmItem.querySelector('.film-genre').textContent = film.genres.join(", ");
  elNewFilmItem.querySelector('.film-actor').textContent = film.cast.join(", ");

  elFilmsFragment.appendChild(elNewFilmItem);
}

elFilms.appendChild(elFilmsFragment)


elContactsList.addEventListener("click", function (e) {

  e.preventDefault();
  if (e.target.matches(".remove-phone")) {


    var findDel = contacts.findIndex(function (contact) {
      return e.target.closest("li").dataset.id == contact.phone;
    })

    if (findDel > -1){
      contacts.splice(findDel, 1);
    }


    showContacts();
  }
  console.log(e.target);
})
