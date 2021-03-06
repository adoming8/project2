const userObject = [];


// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
      console.log('user logged in: ', user);
      userObject.push(user);
      setupUI(user);
    } else {
      console.log('user logged out');
      setupUI();
    }
  });

  
  // signup
  const signupForm = document.querySelector('#signup-form');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
     
    var newUser = {
      email: $('#signup-email').val(),
      password:$('#signup-password').val()
    };
    console.log(newUser)
    $.post("/api/new",newUser)
    // get user info
     const email = signupForm['signup-email'].value;
     const password = signupForm['signup-password'].value;
  
    // sign up the user
    auth.createUserWithEmailAndPassword(email,password).then(cred => {
      // close the signup modal & reset form
      const modal = document.querySelector('#modal-signup');
      M.Modal.getInstance(modal).close();
      signupForm.reset();
    });
  });
  
  // logout
  const logout = document.querySelector('#logout');
  logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
  });
  
  // login
  const loginForm = document.querySelector('#login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
  
    // log the user in
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
      // close the signup modal & reset form
      const modal = document.querySelector('#modal-login');
      M.Modal.getInstance(modal).close();
      loginForm.reset();
    });
  
  });

  //module.exports = userObject;