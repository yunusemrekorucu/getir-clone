const Navbar = () => {
  return (
    <div className="navbar container">
      <div className="left">
        <ul className="categorys">
          <li>
            <img src="./svg/getir.svg" alt="" width={38} height={24} />
          </li>
          <li>
            <img src="./svg/getiryemek.svg" alt="" width={87} height={16} />
          </li>
          <li>
            <img src="./svg/getirbüyük.svg" alt="" width={81} height={16} />
          </li>
          <li>
            <img src="./svg/getirsu.svg" alt="" width={52} height={16} />
          </li>
          <li>
            <img src="./svg/getirçarşı.svg" alt="" width={72} height={16} />
          </li>
        </ul>
      </div>
      <div className="right">
        <ul>
          <li>
            <img src="./svg/language.svg" alt="" width={16} height={16} />
            <p>Türkçe</p>
          </li>
          <li>
            <img src="./svg/login-person.svg" alt="" width={16} height={16} />
            <p>Giriş Yap</p>
          </li>
          <li>
            <img
              src="./svg/register-person.svg"
              width={16}
              height={16}
              alt=""
            />
            <p>Kayıt Ol</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
