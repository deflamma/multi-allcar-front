// var loginForm = document.querySelector("#login_form");

function loginCheck() {

    // event.preventDefault();
    var inputId = document.getElementById('size_textbox1').value;
    if (inputId === '' || inputId === null) {
        alert("아이디를 입력해 주세요.")
        inputId.focus()
        
        return false;
    }

    var inputPw = document.getElementById('size_textbox2').value;
    if (inputPw === '' || inputPw === null) {
        alert("비밀번호를 입력해 주세요.")
        inputPw.focus()
        
        return false;
    }    
}

// loginForm.addEventListener("submit", loginCheck);