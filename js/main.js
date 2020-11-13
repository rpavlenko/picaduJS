// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyARaRxAPIbLkkydzC6kkA2jNMLfoN_OE44',
  authDomain: 'picadu-2fbb8.firebaseapp.com',
  databaseURL: 'https://picadu-2fbb8.firebaseio.com',
  projectId: 'picadu-2fbb8',
  storageBucket: 'picadu-2fbb8.appspot.com',
  messagingSenderId: '771318644374',
  appId: '1:771318644374:web:5d7bdefd46348a87d08cb7',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log(firebase);

// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');

const regExpValidEmail = /^\w+@\w+\.\w{2,}$/;

const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignup = document.querySelector('.login-signup');
const exitElem = document.querySelector('.exit');
const editElem = document.querySelector('.edit');
const editContainer = document.querySelector('.edit-container');
const editUserName = document.querySelector('.edit-username');
const editPhotoURL = document.querySelector('.edit-photo');
const userAvatarElem = document.querySelector('.user-avatar');
const postsWrapper = document.querySelector('.posts');
const userElem = document.querySelector('.user');
const userNameElem = document.querySelector('.user-name');
const buttonNewPost = document.querySelector('.button-new-post');
const addPostElem = document.querySelector('.add-post');

const listUsers = [
  {
    id: '01',
    email: 'roman@gmail.com',
    password: '12345',
    displayName: 'RomanJS'
  },
  {
    id: '02',
    email: 'rp@gmail.com',
    password: '123456',
    displayName: 'JS',
    photo: 'https://i.pinimg.com/originals/50/8f/24/508f24061a790115cbf26b9624771e20.jpg',
  },
];

const setUsers = {
  user: null,
  logIn(email, password, handler) {
    if (!regExpValidEmail.test(email)) {
      return alert ('email не валиден')
    }
    const user = this.getUser(email);
    if (user && user.password === password) {
      this.authorizedUser(user);
      if (handler) {
        handler();
      }
    } else {
      alert('Пользователь с такими данными не найден')
    }
  },

  logOut(handler) {
    this.user = null;
    if (handler) {
      handler();
    }
  },

  signUp(email, password, handler) {

    if (!regExpValidEmail.test(email)) {
      return alert('email не валиден')
    }

    if (!email.trim() || !password.trim()) {
      alert('Введите данные')
      return;
    }

    if (!this.getUser(email)) {
      const user = { email, password, displayName: email.split('@')[0]}
      listUsers.push(user);
      this.authorizedUser(user);
      if (handler) {
        handler();
      }
    } else {
      alert('Пользователь уже зарегистрирован')
    }
  },

  editUser(userName, userPhoto = '', handler) {
    if (userName) {
      this.user.displayName = userName;
    }
    if (userPhoto) {
      this.user.photo = userPhoto;
    }

    if (handler) {
      handler();
    }
  },

  getUser(email) {
    return listUsers.find((item) => item.email === email);
  },

  authorizedUser(user) {
    this.user = user;
  }

}


const setPosts = {
  allPosts: [
    {
      title: 'Заголовок поста',
      text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
      tags: ['свежее', 'новое', 'горячее', 'мое', 'случайность'],
      author: { displayName: 'roman', photo: 'https://static.ekburg.tv/2019-09-15/1306fa80-d7f3-11e9-aa41-1be24cec0e2d/1304b090-d7f3-11e9-aa41-1be24cec0e2d.jpg'},
      date: '11.11.2020, 20:54:00',
      like: 15,
      comments: 20,
    },
    {
      title: 'Заголовок поста 2',
      text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу ит!',
      tags: ['свежее', 'новое', 'мое', 'случайность'],
      author: { displayName: 'rp', photo: 'https://i.pinimg.com/originals/50/8f/24/508f24061a790115cbf26b9624771e20.jpg' },
      date: '10.11.2020, 20:54:00',
      like: 45,
      comments: 12,
    },
    {
      title: 'Заголовок поста 3',
      text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни ',
      tags: ['свежее', 'новое', 'мое', 'случайность'],
      author: 'rp@gmail.com',
      date: '10.11.2020, 20:54:00',
      like: 45,
      comments: 12,
    },
    {
      title: 'Заголовок поста 4',
      text: 'Дх и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают пна берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
      tags: ['свежее', 'новое', 'мое', 'случайность'],
      author: 'rp@gmail.com',
      date: '10.11.2020, 20:54:00',
      like: 45,
      comments: 12,
    },

  ],

  addPost(title, text, tags, handler) {

    this.allPosts.unshift({
      title,
      text,
      tags: tags.split(',').map(item => item.trim()),
      author: {
        displayName: setUsers.user.displayName,
        photo: setUsers.user.photo,
      },
      date: new Date().toLocaleString(),
      like: 0,
      comments: 0,
    })

    if (handler){
      handler();
    }
    
  }
};

const toggleAuthDom = () => {
  const user = setUsers.user;
  console.log(user);

  if (user) {
    loginElem.style.display = 'none';
    userElem.style.display = '';
    userNameElem.textContent = user.displayName;
    userAvatarElem.src = user.photo || userAvatarElem.src;
    buttonNewPost.classList.add('visible');
  } else {
    loginElem.style.display = '';
    userElem.style.display = 'none';
    buttonNewPost.classList.remove('visible');
    addPostElem.classList.remove('visible');
    postsWrapper.classList.add('visible');
  }
};

const showAddPost = () => {
  addPostElem.classList.add('visible');
  postsWrapper.classList.remove('visible');
}

const showAllPosts = () => {

  let postsHTML = '';

  setPosts.allPosts.forEach(({ title, text, date, like, comments, author, tags }) => {

    postsHTML += `
      <section class="post">
        <div class="post-body">
          <h2 class="post-title">${title}</h2>
          <p class="post-text">
            ${text}
          </p>
          <div class="tags">

          ${tags.map(tag => {
            return `<a href="" class="tag">#${tag}</a>`
          }).join('')}
          </div>
          <!-- /.tags -->
        </div>
        <!-- /.post-body -->
        <div class="post-footer">
          <div class="post-buttons">
            <button class="post-button likes">
              <svg width="19" height="20" class="icon icon-like">
                <use xlink:href="img/icons.svg#like"></use>
              </svg>
              <span class="likes-counter">${like}</span>
            </button>
            <button class="post-button comments">
              <svg width="21" height="21" class="icon icon-comment">
                <use xlink:href="img/icons.svg#comment"></use>
              </svg>
              <span class="comments-counter">${comments}</span>
            </button>
            <button class="post-button save">
              <svg width="19" height="19" class="icon icon-save">
                <use xlink:href="img/icons.svg#save"></use>
              </svg>
            </button>
            <button class="post-button share">
              <svg width="17" height="19" class="icon icon-share">
                <use xlink:href="img/icons.svg#share"></use>
              </svg>
            </button>
          </div>
          <!-- /.post-buttons -->
          <div class="post-author">
            <div class="author-about">
              <a href="#" class="author-username">${author.displayName}</a>
              <span class="post-time">${date}</span>
            </div>
            <a href="#" class="author-link"><img src=${author.photo || "img/avatar.jpeg"} alt="avatar" class="author-avatar" /></a>
          </div>
          <!-- /.post-author -->
        </div>
        <!-- /.post-footer -->
      </section>
    `
  });

  postsWrapper.innerHTML = postsHTML;

  addPostElem.classList.remove('visible');
  postsWrapper.classList.add('visible');
}


const init = () => {

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    setUsers.logIn(emailValue, passwordValue, toggleAuthDom);
    loginForm.reset();
  });

  loginSignup.addEventListener('click', event => {
    event.preventDefault();

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    setUsers.signUp(emailValue, passwordValue, toggleAuthDom);
    loginForm.reset();
  });

  exitElem.addEventListener('click', event => {
    event.preventDefault();
    setUsers.logOut(toggleAuthDom);
  });

  editElem.addEventListener('click', event => {
    event.preventDefault();

    editContainer.classList.toggle('visible');
    editUserName.value = setUsers.user.displayName;
  });

  editContainer.addEventListener('submit', event => {
    event.preventDefault();

    setUsers.editUser(editUserName.value, editPhotoURL.value, toggleAuthDom);
    editContainer.classList.remove('visible');
  });

  addPostElem.addEventListener('submit', event => {
    event.preventDefault();
    const { title, text, tags } = addPostElem.elements;
    console.log(title, text, tags);

    if (title.value.length < 6) {
      alert('Слишком короткий заголовок');
      return;
    }

    if (text.value.length < 50) {
      alert('Слишком короткий текст');
      return;
    }

    setPosts.addPost(title.value, text.value, tags.value, showAllPosts);
    addPostElem.classList.remove('visible');
    addPostElem.reset();
  })

  // отслеживаем клик по кнопке меню и запускаем функцию 
  menuToggle.addEventListener('click', function (event) {
  // отменяем стандартное поведение ссылки
    event.preventDefault();
  // вешаем класс на меню, когда кликнули по кнопке меню 
    menu.classList.toggle('visible');
  })

  buttonNewPost.addEventListener('click', event => {
    event.preventDefault();
    showAddPost();
  })

  showAllPosts();
  toggleAuthDom();
}

document.addEventListener('DOMContentLoaded', init);