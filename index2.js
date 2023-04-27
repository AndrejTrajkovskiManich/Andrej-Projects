//Validation Form

const form = document.getElementById('section');
const username = document.getElementById('nameandsurname');
const email = document.getElementById('email1');
const telephone = document.getElementById('telephoneNumber');
const company = document.getElementById('companyName');
const options = document.getElementById('options');





function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-container error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-container success';
}


function checkEmail (input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if(re.test(input.value.trim())) {
         showSucces(input)

     } else {
         showError(input, 'Е-маилот е невалиден!');
     }
}


// From Validation
form.addEventListener('submit', function(e){
    e.preventDefault();

    // checkRequired([username, email, telephone, company]);
    checkEmail(email);

    if (username.value.trim() === "") {
        showError(username, "Ве молиме внесете го вашето Име и Презиме")
    } else {
        showSucces(username)
    }

    if (company.value.trim() === "") {
        showError(company, "Потребно е да го внесете името на вашата компанија!" )
    } else {
        showSucces(company)
    }

    if (telephone.value.trim() === "" || isNaN(telephone.value)) {
        showError(telephone, "Потребно е да го внесете вашиот телефонски број!")
    } else {
        showSucces(telephone)
    }
     if (options.length === 0 || options.value === "choose") {
        showError(options, "Потребно е да одберете тип на студент!" )
    } else {
        showSucces(options)
    }
});