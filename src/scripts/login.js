const isValid = (elem, types) => {
    elem.setCustomValidity("");
    if(elem.classList.contains("invalid")) elem.classList.remove("invalid");
    for(const [key, value] of Object.entries(types)){
      if(elem.validity[key]){
        elem.setCustomValidity(value);
        elem.reportValidity();
        elem.classList.add("invalid");
      }
    }
  }
  window.isValid = isValid;
  const toggle1 = () => {
   const x = document.getElementById("typepass1");
    if (x.type == "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  window.toggle1 = toggle1;
const myFunction = (e) => {
  const pass = document.getElementById("typepass1");
  const user = document.getElementById("userd");
  isValid(pass, {
    valueMissing: 'Missing input of password',
  });
  isValid(user, {
    valueMissing: 'Missing input of username',
  });
  
}

window.myFunction = myFunction;