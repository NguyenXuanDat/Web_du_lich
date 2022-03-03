document.addEventListener('DOMContentLoaded', function() {
        // Kiểm tra số điện thoại phải là 10 hoặc 11 số
        document.querySelector('#phone').onchange = function() {
          var phone = document.querySelector("#phone").value;
          if ((phone.length === 10) ||  (phone.length === 11) ) {
            document.querySelector("#check_phone").innerHTML = "SĐT hợp lệ";
            document.querySelector("#check_phone").style.color = "blue";
          }
          else {
            document.querySelector("#check_phone").innerHTML = "*SĐT phải là 10 hoặc 11 số";
            document.querySelector("#check_phone").style.color = "red";
          }
        }
        // Kiểm tra mật khẩu nhập lại phải trùng mật khẩu gốc
        document.querySelector('#pass').onchange = function() {
        var pass = document.querySelectorAll(".password");
        if(pass[0].value == pass[1].value) {
          document.querySelector("#check_pass").innerHTML = "Chính xác";
          document.querySelector("#check_pass").style.color = "blue";
        }
        else{
          document.querySelector("#check_pass").innerHTML = "*Nhập sai";
          document.querySelector("#check_pass").style.color = "red";
        }
      }
      // Kiểm tra tính hợp lệ của email
      document.querySelector('#email').onchange = function() {
        var email = document.querySelector("#email").value;
        var check_email_1 = email.indexOf("@");
        var check_email_2 = email.indexOf(".");
        if ((check_email_1 < 1) || (check_email_2 < 1)) {
          document.querySelector("#check_email").innerHTML ="*Email không hợp lệ";
          document.querySelector("#check_email").style.color = "red";
          return false;
        }
          else {
              document.querySelector("#check_email").innerHTML = "Email hợp lệ";
              document.querySelector("#check_email").style.color = "blue";
          }
      }
      document.querySelector('.custom-control-label').onclick = function() {
        document.querySelector("#submit_button").style.visibility = "visible";
      }
      document.querySelector('#submit_button').onclick = function() {
        document.querySelector("#check_submit").innerHTML = "Chúc mừng bạn đã đăng ký thành công";
        document.querySelector("#check_submit").style.color = "blue";
      }

    });
