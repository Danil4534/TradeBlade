import React from "react";
import "./registerForm.style.scss";
function RegisterForm() {
  return (
    <>
      <div className="RegisterContainer">
        <h1>Начните прямо сейчас с бесплатным 5–и дневным пробным периодом!</h1>
        <div className="sendEmailForm">
          <div className="sendEmailInput">
            <input type="email" placeholder="ВАШ E-MAIL" />
            <button className="sendEmailBtn">Зарегистрироваться</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;
