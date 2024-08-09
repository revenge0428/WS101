const form = document.querySelector('form');


form.addEventListener('submit', (e) => {
  e.preventDefault();


  const fullName = document.getElementById('fullName');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const gender = document.getElementsByName('gender');
  const dob = document.getElementById('dob');
  const phone = document.getElementById('phone');
  const address = document.getElementById('address');
  const newsletter = document.getElementById('newsletter');


  if (fullName.value.trim() === '') {
    alert('Please enter your full name');
    fullName.focus();
    return;
  }

  if (email.value.trim() === '') {
    alert('Please enter your email address');
    email.focus();
    return;
  }

  if (password.value.trim() === '') {
    alert('Please enter your password');
    password.focus();
    return;
  }

  if (!gender[0].checked && !gender[1].checked && !gender[2].checked) {
    alert('Please select your gender');
    gender[0].focus();
    return;
  }

  if (dob.value.trim() === '') {
    alert('Please enter your date of birth');
    dob.focus();
    return;
  }

  if (phone.value.trim() === '') {
    alert('Please enter your phone number');
    phone.focus();
    return;
  }

  if (address.value.trim() === '') {
    alert('Please enter your address');
    address.focus();
    return;
  }

  if (!newsletter.checked) {
    alert('Please subscribe to the newsletter');
    newsletter.focus();
    return;
  }
  alert('Form submitted successfully!');
  return true;
});


function getSelectedGender(gender) {
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      return gender[i].value;
    }
  }
  return '';
}
