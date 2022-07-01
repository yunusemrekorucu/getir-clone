import { ReactSVG } from "react-svg";
import Icon from "../../assets/svgs";
import DownArrow from "../../assets/svgs";
import "./footer.scss"

function Footer() {
  return (
    <>
      <nav className="footer">
        <div className="contents container">
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
          <div><p>Getir'i keşfedin</p>
          <ul>
            <li>Hakkımızda</li>
            <li>Kariyer</li>
            <li>Teknoloji Kariyerleri</li>
            <li>İletişim</li>
            <li>COVID-19 Duyuru</li>
            <li>Sosyal Sorumluluk Projeleri</li>
          </ul>
          </div>
          <div><p>Yardıma mı ihtiyacınız var?</p>
          <ul>
            <li>Sıkça Sorulan Sorular</li>
            <li>Kişisel Verilerin Korunması</li>
            <li>Gizlilik Politikası</li>
            <li>Kullanım Koşulları</li>
            <li>Çerez Politikası</li>
          </ul></div>
          <div><p>İş Ortağımız Olun</p>
          <ul>
            <li>Bayimiz Olun</li>
            <li>Deponuzu Kiralayın</li>
            <li>GetirYemek Restoranı Olun</li>
            <li>GetirÇarşı İşletmesi Olun</li>
            <li>Zincir Restoranlar</li>
          </ul></div>
          <span> <button>
            <img src="./images/barkod.png" alt="" width={72} height={84} />
          </button>
          </span>
        </div>
      </nav>
      <span className="footer-about">
        <div className="footer-c">
          <div>
          <span>© 2022 Getir </span>
          <li>Bilgi Toplumu Hizmetleri</li>
        </div>
        <div className="footer-icons">

          <li><Icon name="facebook" fill="#697488" size={18} /></li>
          <li><Icon name="twitter" fill="#697488" size={18} /></li>
          <li><Icon name="instagram" fill="#697488" size={18} /></li>

          <button className="footer-lang-btn">
            <Icon name="language" fill="#697488" size={16}/>
           <p> Türkçe (TR)</p>
          </button>
        </div>
        </div>
      </span>
    </>
  );
}

export default Footer;
