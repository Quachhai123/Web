const loginBtn = document.querySelector('.btn-login');
const loginForm = document.querySelector('#login-form');

loginBtn.addEventListener('click', () => {
  loginForm.style.display = 'block';
});

function selectUserType(element) {
  var userTypes = document.querySelectorAll('.user-type');
  for (var i = 0; i < userTypes.length; i++) {
      userTypes[i].classList.remove('active');
      userTypes[i].style.backgroundColor = '';
      userTypes[i].style.color = '';
  }
  element.classList.add('active');
  element.style.backgroundColor = 'green';
  element.style.color = 'white';
}

document.getElementById('login-button1').addEventListener('click', function(event) {
  event.preventDefault(); // Ngăn chặn gửi form và tải lại trang

  var userType = document.querySelector('.user-type.active');
  if (userType) {
      if (userType.textContent === 'Admin') {
          window.location.href = 'giaodien-admin.html';
      } else if (userType.textContent === 'Nhân viên') {
          window.location.href = 'giaodien-user.html';
      }
  }
});


