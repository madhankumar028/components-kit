import React, { useState } from 'react';
import { Button } from '../Button';
import RegularFooterMenu from './RegularFooterMenu';
import BengkelFooterMenu from './BengkelFooterMenu';
import './Footer.scss';

interface IFooter {
  isAgent?: boolean;
  footerImage?: string;
  showRegularFooter?: boolean;
  showBengkelFooter?: boolean;
}

export const Footer = (props: IFooter) => {
  const { isAgent, footerImage, showRegularFooter, showBengkelFooter } = props;

  const [emailInput, setEmailInput] = useState('');

  const year = new Date().getFullYear();

  const agentFooter = () => {
    return (
      <p className="copy__rights footer__info">
        Copyright © {year} Lifepal. Bekerjasama dengan © 1992 PT Anugrah Atma
        Adiguna adalah pialang asuransi berizin dan diawasi oleh OJK sesuai
        KEP-018/KMK. 17/1992 dan anggota APPARINDO 60-2001/APPARINDO/{year}.
      </p>
    );
  };

  const validateEmail = (email: string) => {
    const re = /^[^@]+@[^.]+\..+$/;

    return re.test(email);
  };

  const userFooter = () => {
    return (
      <div>
        {showRegularFooter && (
          <div className="footer__form--group">
            <div className="mb-2 footer__form--title">
              <p className="heading-sm-m">
                Dapatkan Tips dan Informasi Terpercaya untuk Keuangan dan
                Asuransimu
              </p>
            </div>
            <div className="mb-2 footer__form">
              <form id="newsletter" action="/media/newsletter/" noValidate>
                <input type="hidden" name="utm_source" value="core" />
                <input
                  type="hidden"
                  name="utm_campaign"
                  value="CORE_Newsletter"
                />
                <input
                  type="hidden"
                  name="utm_medium"
                  value="footer_subscription"
                />
                <div className="footer__form--item">
                  <input
                    onChange={(e) =>
                      setEmailInput((e.target as HTMLInputElement).value)
                    }
                    name="email"
                    type="email"
                    placeholder="email@anda.com"
                    className="required email"
                    disabled={false}
                    maxLength={40}
                  />
                  <Button
                    className="btn-subscribe"
                    type="submit"
                    variant="primary"
                    onClick={() => {}}
                    disabled={!validateEmail(emailInput)}
                  >
                    Langganan
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showRegularFooter &&
          (showBengkelFooter ? <BengkelFooterMenu /> : <RegularFooterMenu />)}

        {showRegularFooter && (
          <div>
            <div className="footer__item--group">
              <div className="footer__item grid__one">
                <div className="company__name">
                  PT Lifepal Technologies Indonesia
                </div>
                <div className="company__info">
                  <p className="company__address">
                    Multika Building, Jl. Mampang Prpt. Raya No.71-73 RT.1/RW.1,
                    Tegal Parang, Mampang Prapatan, South Jakarta City, Jakarta
                    12790
                  </p>
                </div>
              </div>

              <div className="footer__item grid__two">
                <div className="company__name">Lifepal</div>

                <ul>
                  <li>
                    <a
                      className="text-muted"
                      href="/media/tentang/"
                      rel="noopener noreferrer"
                      title="Tentang Kami"
                    >
                      Tentang Kami
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-muted"
                      href="/ketentuan/"
                      rel="noopener noreferrer"
                      title="Ketentuan"
                    >
                      Ketentuan
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-muted"
                      href="/asuransi/"
                      rel="noopener noreferrer"
                      title="Asuransi"
                    >
                      Asuransi
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer__item grid__three">
                <div className="company__name">Social Media</div>

                <ul>
                  <li>
                    <a
                      className="text-muted"
                      target="_blank"
                      href="https://www.facebook.com/lifepal"
                      rel="noopener noreferrer me nofollow"
                      title="Facebook Lifepal"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-muted"
                      href="https://www.instagram.com/lifepal"
                      target="_blank"
                      rel="noopener noreferrer me nofollow"
                      title="Instagram Lifepal"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/lifepal"
                      target="_blank"
                      rel="noopener noreferrer me nofollow"
                      className="text-muted"
                      title="Twitter Lifepal"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-muted"
                      href="https://www.youtube.com/channel/UC-14O1IUXJ_m5t8PRAfWm5w"
                      rel="noopener noreferrer me nofollow"
                      title="Youtube Lifepal"
                    >
                      Youtube
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer__item grid__four">
                <div className="footer__image--group">
                  <div className="company__name">
                    Metode Pembayaran & Program Cicilan 0%
                  </div>
                  <img
                    alt="Metode Pembayaran"
                    loading="lazy"
                    src={footerImage}
                    width="300px"
                    height="143px"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="footer__info">
          <p className="copy__rights">
            Copyright © {year} Lifepal. Bekerjasama dengan © 1992 PT Anugrah
            Atma Adiguna adalah pialang asuransi berizin dan diawasi oleh OJK
            sesuai KEP-018/KMK.17/1992 dan anggota APPARINDO 60-2001/APPARINDO/
            {year}. Semua ulasan yang tertulis termasuk rating dilakukan oleh
            rekan pialang kami. Lifepal berusaha untuk menyajikan informasi yang
            akurat dan terbaru namun dapat berbeda dari informasi yang diberikan
            oleh penyedia layanan / institusi keuangan. Keseluruhan informasi
            diberikan tanpa jaminan, kami menyarankan untuk melakukan verifikasi
            sebelum melakukan keputusan finansial Anda.
          </p>
        </div>
      </div>
    );
  };

  return <footer>{isAgent ? agentFooter() : userFooter()}</footer>;
};
