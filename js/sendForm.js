const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const postData = dataUser => fetch('test.php', {
    method: 'POST',
    body: dataUser,
  });
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const formData = new FormData(form),
     body = {};
  
    formData.append('form', form.classList.value);
  
    formData.forEach((value, field) => {
      body[field] = value;
    })
  
    postData(formData)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        alert('Ваша заявка успешно отправлена, с вами свяжуться в ближайшее время');
        console.log(response.status);       
      })
      .catch(err => {
        alert('К сожалению произошла ошибка');
        console.log(err);
      })
      .finally(() => {
        form.reset();
      });
  
    console.log(body);
  })
})
