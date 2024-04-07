const getInputValue = () => {
    let numberCodeForm = document.querySelector('[data-number-code-form]');
    let numberCodeInputs = [...numberCodeForm.querySelectorAll('[data-number-code-input]')];

    let inputValue = [];

    numberCodeInputs.forEach((value, index) => {
        let currentInput = numberCodeInputs[index];

        inputValue.push(currentInput.value);
    });
    
    let result = inputValue.join("");

    return result;
}

const checkInput = () => {
    let value = getInputValue();
    
    if(value == "" || value !== correctAnswer) {
        console.log("nem helyes");

        document.querySelector('.error').classList.add("show");
    }

    else if(value == correctAnswer) {
        console.log("jó válasz");

        window.location.href = "/" + next + ".html";
    }
}


document.querySelector(".nextButton").addEventListener("click", () => checkInput());