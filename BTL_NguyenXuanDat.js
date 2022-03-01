//sự kiện kiểm tra đăng nhập
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#name').onchange = checkname;
    function checkname() {
        var username = document.querySelector('#name').value;
        if (username.length == '') {
            alert('Tên đăng nhập không được để trống');
        } else if (username.length < 8) {
            alert('Tên đăng nhập phải lớn hơn 8 kí tự')
        }
    }
    document.querySelector('#password').onchange = checkpass;
    function checkpass() {
        var password = document.querySelector('#password').value;
        if (password == '') {
            alert('mật khẩu không được để trống');;
        } else if (password.length < 6) {
            alert('Mật khẩu phải lớn hơn 6 kí tự');
        }
    }
    document.querySelector('#phonenumber').onchange = checknumber;
    function checknumber() {
        var phonenumber = document.querySelector('#phonenumber').value;
        if (phonenumber.length != 10) {
            alert('Số điện thoại không hợp lệ');
        }
        else if (isNaN(phonenumber)) {
            alert('số điện thoại phải là số');
        }
        return false;
    }
    document.querySelector('#form').onsubmit = function () {
        alert('chúc mừng bạn đăng kí thành công');
        }
    }
);