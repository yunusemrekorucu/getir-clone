import * as React from "react";
import Modal from "@mui/material/Modal";
import "./login-modal.scss";
import TextInput from "../common/TextInput/TextInput";
import CountryInput from "../common/SelectInput/CountryInput";

export default function LoginModal({ modal, setModal }) {
  return (
    <div>
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal">
          <div className="header">
            <div />
            <p>Giriş yap veya kayıt ol</p>
            <button onClick={() => setModal(false)}>
              <img src="./svg/close.svg" alt="" width={10} height={10} />
            </button>
          </div>

          <div className="auth-form">
            <div className="form">
              <CountryInput />
              <TextInput placeholder="Telefon Numarası" />
            </div>
            <button className="auth-button">
              Telefon numarası ile devam et
            </button>
            <p>
              Kişisel verilerinize dair Aydınlatma Metni için{" "}
              <a href="">tıklayınız</a> .
            </p>
          </div>
          <div className="login-footer">
              <p>Hala kayıt olmadın mı? <a href="">Kayıt Ol</a></p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
