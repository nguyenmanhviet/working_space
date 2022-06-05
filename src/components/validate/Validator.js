function Validator(options){
    console.log("11111111111111111111111111");
    function validate(inputElement, rule){
        console.log("input element", inputElement);
        var errorMessage = rule.test(inputElement.value);
        var errorElement = inputElement.parentElement.querySelector('.form-message');
        
        if (errorMessage){
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('nivalid');
        } else {
            errorElement.innerText = '';
        }
    }

    var formElement = document.querySelector(options.form);
    console.log(document.querySelector(options.form));
    if (formElement){
        options.rules.forEach(function(rule){
            var inputElement = formElement.querySelector(rule.selector);
            
            if (inputElement){
                console.log("inputElement:")
                validate(inputElement, rule);
            }
        })
    }
}

Validator.isRequired = function(selector) {
    console.log("selector: " , selector);
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : 'Vui long nhap truong nay'
        }
    }
}

Validator.isEmail = function(selector) {
    console.log("selector: " , selector);
    return {
        selector: selector,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Vui long nhap email'
        }
    }
}

export default Validator;