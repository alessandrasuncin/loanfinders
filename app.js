const dayDropdown = document.getElementById('day-dropdown');

for (let i = 1; i <= 31; i++) {
    let option = new Option(i, i);
    dayDropdown.add(option);
}

const yearDropdown = document.getElementById('year-dropdown');
const currentYear = new Date().getFullYear();
const minAge = 19;
const maxAge = 75;

const oldestYear = currentYear - maxAge;
const youngestYear = currentYear - minAge;

for (let i = youngestYear; i >= oldestYear; i--) {
    let option = new Option(i, i);
    yearDropdown.add(option);
}

const stepsApplication = document.querySelector("[steps-application]");
const formSteps = [...stepsApplication.querySelectorAll("[data-step]")];
let currentStep =
    formSteps.findIndex(steps => {
        return steps.classList.contains("active")
    })

if (currentStep < 0) {
    currentStep = 0
    showCurrentStep()
}

stepsApplication.addEventListener("click", e => {
    let incrementor
    if (e.target.matches("[data-next]")) {
        incrementor = 1
    } else if (e.target.matches("[data-previous]")) {
        incrementor = -1
    }

    if (incrementor == null) return

    const inputs = [...formSteps[currentStep].querySelectorAll("input")]
    const allValid = inputs.every(input => input.reportValidity())
    if (allValid) {
        currentStep += incrementor
        showCurrentStep()
    }
})

formSteps.forEach(step => {
    step.addEventListener("animationend", e => {
        formSteps[currentStep].classList.remove("hide")
        e.target.classList.toggle("hide", !e.target.classList.contains("active"))
    })
})

function showCurrentStep() {
    formSteps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep)
    })
}


document.getElementById('phone-number').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});

const phoneInput = document.getElementById('phone-number');

phoneInput.addEventListener('input', function () {
    const numericValue = phoneInput.value.replace(/\D/g, '');
    if (numericValue.length < 10) {
        phoneInput.setCustomValidity("Please enter a valid 10-digit phone number.");
    } else {
        phoneInput.setCustomValidity("");
    }
});

phoneInput.addEventListener('change', function () {
    const canadianPhoneNumberPattern = /^(?:\+1)?(?:\([2-9][0-9]{2}\)\s?|[2-9][0-9]{2}-)[2-9][0-9]{2}-[0-9]{4}$/;
    if (!canadianPhoneNumberPattern.test(phoneInput.value)) {
        phoneInput.setCustomValidity("Please enter a valid Canadian phone number.");
    } else {
        phoneInput.setCustomValidity("");
    }
});

// const form = document.querySelector('form');
// form.addEventListener('submit', function (event) {
//     if (!phoneInput.checkValidity()) {
//         event.preventDefault();
//         alert(phoneInput.validationMessage);
//     }
// });


const nextButton = document.getElementById('nextButton');
const provinceDropdown = document.getElementById('province-dropdown');

nextButton.addEventListener('click', function () {
    const selectedProvince = provinceDropdown.value;
    if (selectedProvince !== 'AB' && selectedProvince !== 'BC') {
        alert("Our business only operates in Alberta (AB) and British Columbia (BC).");
    }
});


var modal = document.getElementById('myModal');
var noProvinceLink = document.getElementById('noProvinceLink');
var span = document.getElementsByClassName('close')[0];

noProvinceLink.onclick = function (event) {
    event.preventDefault();
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modalSubmit = document.getElementById('myModalSubmit');
var submitButton = document.getElementById('submitButton');
var span = document.getElementsByClassName('close-submit')[0];
submitButton.onclick = function (event) {
    event.preventDefault();
    modalSubmit.style.display = "block";
}

span.onclick = function () {
    modalSubmit.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalSubmit) {
        modalSubmit.style.display = "none";
    }
}

// document.addEventListener('DOMContentLoaded', (event) => {
//     const loader = document.querySelector('.loader');
//     const loaderText = document.getElementById('loaderText');
//     const checkIcon = document.getElementById('checkIcon');
//     const messages = ["Searching for dealers in your area...", "Checking for pre-approval...", "Congratulations!"];
//     let currentMessageIndex = 0;

//     loader.addEventListener('animationiteration', (event) => {

//         if (currentMessageIndex < messages.length - 1) {
//             loaderText.textContent = messages[currentMessageIndex];
//             currentMessageIndex++;
//         } else if (currentMessageIndex === messages.length - 1) {
//             loaderText.innerHTML = `<strong>${messages[messages.length - 1]}</strong>`;
//             loaderText.style.fontWeight = 'bold';
//             loaderText.style.fontSize = '18px'
//             checkIcon.style.display = 'inline-block';
//             loader.style.animation = 'none';
//             loader.style.background = 'transparent';
//             currentMessageIndex++;
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', (event) => {
    const loader = document.querySelector('.loader');
    const loaderText = document.getElementById('loaderText');
    const checkIcon = document.getElementById('checkIcon'); // Get the check icon element
    const approvalText = document.getElementById('approvalText'); // Get the approval text element
    const messages = [
        "Searching for dealers in your area...",
        "Checking for pre-approval...",
        "Connecting to server...",
        "Congratulations!"
    ];
    let currentMessageIndex = 0;

    const updateMessage = () => {
        loaderText.textContent = messages[currentMessageIndex]; // Set the text for the current message
        currentMessageIndex++; // Increment the index to point to the next message

        if (currentMessageIndex >= messages.length) {
            loader.style.animation = 'none'; // Stop the loader animation
            loader.style.background = 'transparent'; // Hide the loader bar

            loaderText.textContent = "Congratulations!"; // Set the text for the final message
            loaderText.style.fontWeight = 'bold';

            checkIcon.style.display = 'block'; // Show the check icon
            approvalText.style.display = 'block'; // Show the approval text

            // Remove the event listener since we don't need to update the messages anymore
            loader.removeEventListener('animationiteration', updateMessage);
        }
    };

    // Start the process
    updateMessage(); // Initial call to display the first message

    // Add event listener to update the message at the end of each animation iteration
    loader.addEventListener('animationiteration', updateMessage);
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click-toggle", function () {
        this.classList.toggle("active-toggle");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}