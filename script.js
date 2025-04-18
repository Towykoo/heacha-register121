
const scriptURL = 'YOUR_SCRIPT_URL_HERE';

document.getElementById('registerForm')?.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(document.getElementById('registerForm'))
  }).then(response => {
    alert('สมัครสมาชิกเรียบร้อย!');
    window.location.href = 'login.html';
  }).catch(error => alert('เกิดข้อผิดพลาด'));
});

document.getElementById('loginForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;
  // เพิ่มโค้ดตรวจสอบจาก Google Apps Script ที่นี่
  alert('เข้าสู่ระบบเรียบร้อย (ตัวอย่าง)');
});
