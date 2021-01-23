// validation script here
const patterns = {
    telephone: /^\d{11}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/i,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([\w\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

const inputs = document.querySelectorAll('input');

function validate(field, regex){
    // console.log(regex.test(field.value));
    if(regex.test(field.value)){
        field.className = "valid";
    }
    else {
        field.className = "invalid";
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', (e)=>{
        // console.log(e.target);
        // console.log(e.target.attributes);
        // console.log(e.target.attributes.name);
        // console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
})


