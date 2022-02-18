document.getElementById('login-btn').addEventListener('click', function () {
    //email
    const emailFeild = document.getElementById('user-email');
    const userEmail = emailFeild.value;
    //pass
    const passFeild = document.getElementById('user-password');
    const userPass = passFeild.value;
   

    if(userEmail=='shorifulhabib.iit@gmail.com' && userPass=='12345'){
        window.location.href='banking.html';
    }
   
})
