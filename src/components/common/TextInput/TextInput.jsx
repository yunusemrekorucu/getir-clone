import React, { useState } from "react";
import "./text-ınput.scss";

function TextInput(props) {
  const { setLoginForm, loginForm, placeholder } = props;
  const [focus, setFocus] = useState(false);

  return (
    <div className="text-input-box">
      <input
        maxLength="10"
        onFocus={() => setFocus(true)}
        onBlur={() => (loginForm === '' ? setFocus(false) : setFocus(true))}
        className="text-ınp"
        onChange={e => setLoginForm(e.target.value)}
        value={loginForm}
        type="text"
      />
      <label className={`placeholder ${focus ? "placeholder-focus" : ""}`}>
        {placeholder}
      </label>
    </div>
  );
}

export default TextInput;
