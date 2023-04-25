function submitProfile(evt) {
  evt.preventDefault();

  const data = {
    name: document.querySelector('#name-field').value,
    age: document.querySelector('#age-field').value,
    occupation : document.querySelector('#occupation-field').value,    
    // fill in the rest

  };
  fetch('/api/profile',{
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type' : 'application/json',
    },

 })
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('#profiles')
      .insertAdjacentHTML('beforeend',`<div>${data.fullname} is ${data.age} and is ${data.occupation}</div>`,
      );
    })
  
    

  // make request to server to get the data
  // add the data the server returns to the document
  // (you can add it to the end of the div with ID "profiles")
}

document.querySelector('#profile-form').addEventListener('submit', submitProfile);
