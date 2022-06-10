document.querySelector('#registr')
  .addEventListener('submit', async (event) => {
  // event.target - элемент, по которому произошёл клик,
  // если event.target - чекбокс, то
    event.preventDefault();
    // console.log(event.target.sides.value);
    const name = event.target.name.value;
    const mail = event.target.login.value.toLowerCase();
    const password = event.target.password.value;

    const body = {
      name,
      mail,
      password,
    };
    console.log('1234');
    const response = await fetch('/rigistr', {
      method: 'POST',
      body,
      headers: { 'Content-TYPE': 'APPLICATION/JSON' },
    });
      // }
    if (response === 'true') {
      window.location.href = '/';
    } else {
      window.location.href = '/themes';
    }
  });

document.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.classList.contains('theme-btn')) {
    const { id } = e.target.closest('form').dataset.id;
    const responce = await fetch(`/question/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        id,
      },
    });
    const res = await responce.json();
    console.log('test', res);
  }
});
