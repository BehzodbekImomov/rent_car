'use client'

import Image from "next/image";
import Link from "next/link";
import "./Footer.scss";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const{t}=useTranslation()
  return (
    <footer className="footer">
      <div className="container_custom foot">
        <div className="foot_content">
          <ul>
            <li>
              <Link href="#">
                <Image
                  src="/images/logo.png"
                  width={73}
                  height={33}
                  alt="logo"
                />
              </Link>
              <p>{t("footer")}</p>
              <div className="network">
                <a
                  href="https://www.instagram.com/portofino_luxurycarrental?igsh=aWpoeHJlaG5mYTk2"
                  target="_blank"
                >
                  <Image
                    src="/svg/facebook.svg"
                    width={53}
                    height={53}
                    alt="logo"
                  />
                </a>
                <a
                  href="https://www.instagram.com/portofino_luxurycarrental?igsh=aWpoeHJlaG5mYTk2"
                  target="_blank"
                >
                  <Image
                    src="/svg/twitter.svg"
                    width={53}
                    height={53}
                    alt="logo"
                  />
                </a>
                <a
                  href="https://www.instagram.com/portofino_luxurycarrental?igsh=aWpoeHJlaG5mYTk2"
                  target="_blank"
                >
                  <Image
                    src="/svg/instagram.svg"
                    width={53}
                    height={53}
                    alt="logo"
                  />
                </a>
              </div>
            </li>
            <li>
              <h4>{t("footer1")}</h4>
              <Link href="#">{t("footer1_desc")} </Link>
            </li>

            <li>
              <h4>{t("footer2")}</h4>

              <Link
                href="https://www.instagram.com/portofino_luxurycarrental?igsh=aWpoeHJlaG5mYTk2"
                target="_blank"
              >
                {t("inst")}
              </Link>
              <Link
                href="https://www.instagram.com/portofino_luxurycarrental?igsh=aWpoeHJlaG5mYTk2"
                target="_blank"
              >
                {t("twit")}
              </Link>
              <Link
                href="https://www.instagram.com/portofino_luxurycarrental?igsh=aWpoeHJlaG5mYTk2"
                target="_blank"
              >
                {t("face")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="line"></div>
        <div className="food_end">
          <Link
            id="location_id"
            href="https://maps.app.goo.gl/BpqwZZWG9rqxok3fA"
            target="_blank"
          >
            {t("our_loc")}
          </Link>
          <Link href="#">{t("foot_end1")}</Link>
          <Link href="#">{t('foot_end2')}</Link>
        </div>
      </div>
    </footer>
  );
}
