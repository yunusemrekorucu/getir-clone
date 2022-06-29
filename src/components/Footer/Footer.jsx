import "./footer.scss"

function Footer() {
  return (
    <>
      <div className="footer container">
        <div>
          <p>Getir' indirin!</p>
          <a href="#">
            <img
              src="./svg/appstore.svg"
              alt=""
              style={{ marginBottom: "12px" }}
            />
          </a>
          <a href="#">
            <img
              src="./svg/googleplay.svg"
              alt=""
              style={{ marginBottom: "12px" }}
            />
          </a>
          <a href="#">
            <img src="./svg/appgallery.svg" alt="" />
          </a>
        </div>
        <div>
          <p>Getir'i keşfedin</p>
          <ul>
            <li>Hakkımızda</li>
            <li>Kariyer</li>
            <li>Teknoloji Kariyerleri</li>
            <li>İletişim</li>
            <li>COVID-19 Duyuru</li>
            <li>Sosyal Sorumluluk Projeleri</li>
          </ul>
        </div>
        <div>
          <p>Yardıma mı ihtiyacınız var?</p>
          <ul>
            <li>Sıkça Sorulan Sorular</li>
            <li>Kişisel Verilerin Korunması</li>
            <li>Gizlilik Politikası</li>
            <li>Kullanım Koşulları</li>
            <li>Çerez Politikası</li>
          </ul>
        </div>
        <div>
          <p>İş Ortağımız Olun</p>
          <ul>
            <li>Bayimiz Olun</li>
            <li>Deponuzu Kiralayın</li>
            <li>GetirYemek Restoranı Olun</li>
            <li>GetirÇarşı İşletmesi Olun</li>
            <li>Zincir Restoranlar</li>
          </ul>
        </div>
        <span>
          <div>
            <img src="./images/barkod.png" alt="" width={72} height={84} />
          </div>
        </span>
      </div>
      <span className="footer-about">
        <div>
          <span>© 2022 Getir </span>
          <li>Bilgi Toplumu Hizmetleri</li>
        </div>
        <div>
          <img src="./svg/facebook.svg" alt="" width={20} height={20} />
          <img src="./svg/twitter.svg" alt="" width={20} height={20} />
          <img src="./svg/instagram.svg" alt="" width={20} height={20} />
          <span>
            <img src="./svg/language.svg" alt="" width={20} height={20} />
            Türkçe TR
          </span>
        </div>
      </span>
    </>
  );
}

export default Footer;
