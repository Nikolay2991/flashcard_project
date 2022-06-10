document.querySelector('#registr')
  ?.addEventListener('submit', async (event) => {
  // event.target - элемент, по которому произошёл клик,
  // если event.target - чекбокс, то
    event.preventDefault();
    // console.log(event.target.sides.value);
    const name = event.target.name.value;
    const mail = event.target.login.value.toLowerCase();
    const password = event.target.password.value;

    if (name.length === 0) {
      try {
        document.querySelector('.empty-warning').remove();
      } catch (err) {
        console.log(err);
      }
      document.querySelector('#name').insertAdjacentHTML('beforeend', '<p class="empty-warning" style = "color:red">*Пирожочек введи имечко</p>');
    }
    if (mail.length === 0) {
      try {
        document.querySelector('.empty-warning').remove();
      } catch (err) {
        console.log(err);
      }
      document.querySelector('#login').insertAdjacentHTML('beforeend', '<p class="empty-warning" style = "color:red">*Котенок введи свою почту :3</p>');
    }
    if (password.length === 0) {
      try {
        document.querySelector('.empty-warning').remove();
      } catch (err) {
        console.log(err);
      }
      document.querySelector('#pass').insertAdjacentHTML('beforeend', '<p class="empty-warning" style = "color:red">*И как ты собираешься входить?</p>');
    }
    const body = {
      name,
      mail,
      password,
    };
    const response = '';
    if (name.length > 1 && name.mail > 1 && name.password > 1) {
      response = await fetch('/rigistr', {
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
    }
  });

document?.addEventListener('click', async (e) => {
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
