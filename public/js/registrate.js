document.querySelector('#registr')
  .addEventListener('submit', async (event) => {
  // event.target - элемент, по которому произошёл клик,
  // если event.target - чекбокс, то
    event.preventDefault();
    // console.log(event.target.sides.value);
    const name = event.target.name.value;
    const mail = event.target.login.value.toLowerCase();
    const password = event.target.password.value;
    if (name.length === 0) {
      document.querySelector('#name').after('Пирожочек введи имечко');
    }
    if (mail.length === 0) {
      document.querySelector('#login').after('Котенок введи свою почту :3');
    }
    if (password.length === 0) {
      document.querySelector('#pass').after('И как ты собираешься входить?');
    }
    const body = {
      name,
      mail,
      password,
    };
    const response;
    if(name.length > 1 && name.mail > 1 && name.password >1){
      response = await fetch('/rigistr', {
      method: 'POST',
      body,
      headers: { 'Content-TYPE': 'APPLICATION/JSON' },
      });
    // }
    if(response==='true'){
      window.location.href="/"
    }else{
      window.location.href="/themes"
    }
  });
