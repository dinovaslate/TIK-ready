 //Facade pattern
 const isValid = (elem, types, callback) => {
    elem = document.querySelector(elem);
    elem.setCustomValidity("");
    if (elem.classList.contains("invalid"))
      elem.classList.remove("invalid");
    for (const [key, value] of Object.entries(types)) {
      if (elem.validity[key]) {
        elem.setCustomValidity(value);
        elem.reportValidity();
        elem.classList.add("invalid");
      }
    }
    if (typeof callback === "function") {
      callback(elem);
    }
  };

  window.isValid = isValid;

  const toggle1 = () => {
    const x = document.querySelector("#typepass1");
    if (x.type == "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
window.toggle1 = toggle1;
  const myFunction = (e) => {
    isValid("#typepass1", {
      valueMissing: "Missing input of password",
      patternMismatch:
        "Must contain at least 1 uppercase and lowercase letter and also Special character",
      tooShort: "Password must be at least 8 characters long",
    });
    isValid("#first", {
      valueMissing: "Missing input of Fisrtname",
      patternMismatch:
        "Must contain at least one capital letter and must not contain number",
    });
    isValid("#last", {
      valueMissing: "Missing input of Lastname",
      patternMismatch:
        "Must contain at least one capital letter and must not contain number",
    });
    isValid("#phone", {
      valueMissing: "Missing input of Phone",
      tooShort: "Phone numbers must contain at least 4 characters",
      patternMismatch: "Must not contain letters",
    });
    isValid("#date", {
      valueMissing: "Missing input of date",
      patternMismatch: "Date must not contain letters",
      rangeOverflow: "Calendar has a maximum date of 31",
      rangeUnderflow: "Calendar has a minimum date of 1",
    });
    isValid("#month", {
      valueMissing: "Missing input of month",
      patternMismatch: "Month must not contain letters",
      rangeOverflow: "Calendar has a maximum month of 12",
      rangeUnderflow: "Calendar has a minimum month of 1",
    });
    isValid("#email", {
      valueMissing: "Missing input of email",
      patternMismatch: "Please input valid email (ex. dinova123@gmail.com)",
      typeMismatch: "Please input valid email (ex. dinova123@gmail.com)",
    });
    isValid("#year", {
      valueMissing: "Missing input of year",
      patternMismatch: "Year must not contain letters",
      rangeOverflow: "You can't born after 2022",
      rangeUnderflow:
        "Please input valid year, below 1920 seems unreasonable",
      tooShort: "You can't born in ancient roman",
    });
    const male = document.querySelector("#male");
    const female = document.querySelector("#female");
    console.log(!male.checked && !female.checked);
    male.setCustomValidity("");
    if (!male.checked && !female.checked) {
      male.setCustomValidity("Must input at least one gender");
      male.reportValidity();
    }
  };
  window.myFunction = myFunction;
  const toggle2 = (e) => {
    const email = document.querySelector("#emails");
    const phone = document.querySelector("#phones");
    email.classList.toggle("d-none");
    phone.classList.toggle("d-none");
    email.toggleAttribute("required");
    phone.toggleAttribute("required");
    e.currentTarget.innerText = `Use ${
      email.classList.contains("d-none") ? "email" : "phone number"
    } `;
  };
  window.toggle2 = toggle2;
  const insertAt = (array, index, ...elementsArray) => {
    array.splice(index, 0, ...elementsArray);
  };
  const preventstring = (evt) => {
      if (evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
      }
    };
    window.preventstring = preventstring;
  const format = (e) => {
    let initial = e.currentTarget.value;
    initial = initial.split("");
    if (initial.length > 4 && initial[4] !== "-") {
      insertAt(initial, 4, "-");
    }
    if (initial.length > 9 && initial[9] !== "-") {
      insertAt(initial, 9, "-");
    }
    e.currentTarget.value = initial.join("");
  };

  window.format = format;