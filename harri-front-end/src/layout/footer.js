import Link from "next/link";
import Image from "next/image";
// internal
import logo from '@assets/img/logo/logo-black.svg';
import payment from '@assets/img/footer/footer-payment.png';
import SocialLinks from "@components/social";
import CopyrightText from "./copyright-text";

// single widget
function SingleWidget({ col, col_2, col_3, title, contents }) {
  return (
    <div
      className={`col-xxl-${col} col-xl-${col} col-lg-3 col-md-${col_2} col-sm-6"`}
    >
      <div className={`footer__widget mb-50 footer-col-11-${col_3}`}>
        <h3 className="footer__widget-title">{title}</h3>
        <div className="footer__widget-content">
          <ul>
            {contents.map((l, i) => (
              <li key={i}>
                <Link href={`/${l.url}`}>{l.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const Footer = () => {
  return (
    <>
      <footer>
        <div
          className="footer__area footer__style-4"
          data-bg-color="footer-bg-white"
        >
          <div className="footer__top">
            <div className="container">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-6">
                  <div className="footer__widget footer__widget-11 mb-50 footer-col-11-1">
                    <div className="footer__logo">
                      <Link href="/">
                        <Image src={logo} alt="logo" />
                      </Link>
                    </div>

                    <div className="footer__widget-content">
                      <div className="footer__info">
                        <p>
                          Profesyonel web tasarım, kartvizit ve QR menü çözümleri ile 
                          işletmenizi dijital dünyada öne çıkarın.
                        </p>
                        <div className="footer__social footer__social-11">
                          <SocialLinks/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <SingleWidget
                  col="2"
                  col_2="4"
                  col_3="2"
                  title="Şirket"
                  contents={[
                    { url: "/hakkimizda", title: "Hakkımızda" },
                    { url: "/kariyer", title: "Kariyer" },
                    { url: "/ofislerimiz", title: "Ofislerimiz" },
                    { url: "/blog", title: "Blog" },
                    { url: "/musteri-yorumlari", title: "Müşteri Yorumları" },
                  ]}
                />
                <SingleWidget
                  col="3"
                  col_2="3"
                  col_3="3"
                  title="Ürünler"
                  contents={[
                    { url: "/websiteleri", title: "Web Siteleri" },
                    { url: "/kartvizitler", title: "Kartvizitler" },
                    { url: "/qr-menu", title: "QR Menü" },
                    { url: "/logo-tasarim", title: "Logo Tasarım" },
                    { url: "/sosyal-medya", title: "Sosyal Medya" },
                  ]}
                />
                <SingleWidget
                  col="1"
                  col_2="3"
                  col_3="4"
                  title="Destek"
                  contents={[
                    { url: "/sss", title: "Sık Sorulan Sorular" },
                    { url: "/yardim", title: "Yardım Merkezi" },
                    { url: "/iletisim", title: "İletişim" },
                    { url: "/teslimat", title: "Teslimat Bilgileri" },
                    { url: "/iade", title: "İade ve Değişim" },
                  ]}
                />

                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-6">
                  <div className="footer__widget mb-50 footer-col-11-5">
                    <h3 className="footer__widget-title">İletişim</h3>

                    <div className="footer__widget-content">
                      <p className="footer__text">
                        Size en yakın lokasyonu bulun.{" "}
                        <a href="/ofislerimiz">Ofislerimizi</a> görün
                      </p>
                      <div className="footer__contact">
                        <div className="footer__contact-call">
                          <span>
                            <a href="tel:+905551234567">+90 555 123 45 67</a>
                          </span>
                        </div>
                        <div className="footer__contact-mail">
                          <span>
                            <a href="mailto:info@harri.com.tr">
                              info@harri.com.tr
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="container">
              <div className="footer__bottom-inner">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="footer__copyright">
                      <CopyrightText />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="footer__payment text-sm-end">
                      <Image src={payment} alt="payment" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
