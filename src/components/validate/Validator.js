function Validator(options){
    function validate(inputElement, rule){
        console.log("input element", inputElement);
        var errorMessage = rule.test(inputElement.value);
        var errorElement = inputElement.parentElement.querySelector('.form-message');
        
        if (errorMessage){
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }

    var formElement = document.querySelector(options.form);
    if (formElement){
        options.rules.forEach(function(rule){
            var inputElement = formElement.querySelector(rule.selector);
            if (inputElement){
                inputElement.onblur = function(){
                    console.log("blur: ", rule.selector)
                    validate(inputElement, rule);
                }
                
                inputElement.oninput = function (){
                    var errorElement = inputElement.parentElement.querySelector('.form-message');
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
  
                }
            }
        })
    }
}

Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            var reg = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
            return reg.test(value) ? undefined : 'Please enter your full name'
        }
    }
}

Validator.isPhoneNumber = function(selector){
    return {
        selector: selector,
        test: function (value){
            var reg = /^\d+$/;
            return reg.test(value) ? undefined : "Please enter your phone"
        }
    }
}

Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Please enter your email'
        }
    }
}

Validator.isCitizen = function(selector){
    return {
        selector: selector,
        test: function (value){
            var reg = /^\d+$/;
            return reg.test(value) ? undefined : "Please enter your citizen"
        }
    }
}

Validator.isUsername = function(selector){
    return {
        selector: selector,
        test: function (value){
            var reg = /^(?=[a-z_\d]*[a-z])[a-z_\d]{6,}$/;
            var regSpecial = /^[^ !"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+$/;
            return value.length === 0 ? "Please enter your user name" : 
                (
                    regSpecial.test(value) ? (reg.test(value) ? undefined : "User name at least 6 characters")
                    : "User name do not contain any special characters or spaces"
                ); 
        }
    }
}

Validator.isPassword = function(selector){
    return {
        selector: selector,
        test: function (value){
            var reg = /[a-zA-Z0-9]{8,}/;
            return reg.test(value) ? undefined : "Password at least 8 characters";
        }
    }
}

Validator.confirmPassword = function(selector, password){
    return {
        selector: selector,
        test: function (value){
            return password === value ? undefined : "Does not match the password";
        }
    }
}

export default Validator;