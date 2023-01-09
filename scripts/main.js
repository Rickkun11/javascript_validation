var users = [
    { username: 'admin', password: 'admin' },
    { username: 'user2', password: 'pass2' },
    { username: 'user3', password: 'pass3' }
];

var button = document.getElementById('login');

button.onclick = function() {
   var username = document.getElementById('username').value;
   var password = document.getElementById('password').value; 

      if(username == 'admin' && password == 'admin') {
         document.write('welcome admin');
      }else{
         alert('You are trying to break in!');
      
   }
}