"use client";

import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";

import "./Navigate.scss";

import TemporaryDrawer from "../Drawer";
import LanguageChanger from "../LanguageChanger";
import { useTranslation } from "react-i18next";

const Navigate = () => {
  const { t } = useTranslation();
  return (
    <nav id="nav">
      <div className="container_custom navigations ">
        <Link className="logo" href="#nav">
          <Image src="/images/logo.png" height={44} width={98} alt="" />
        </Link>
        <ul className="menu">
          <li>
            {" "}
            <a className="anchor" href="/">
              {t("common:home")}
            </a>
          </li>
          <li>
            <a className="anchor" href="#rental">
              {t("common:rental")}
            </a>
          </li>
          <li>
            <a className="anchor" href="#choose">
              {t("common:why")}
            </a>
          </li>

          <li>
            {" "}
            <a className="anchor" href="#brands">
              {t("common:brands")}
              {/* <Image src="/svg/vector.svg" width={15} height={6} alt="" /> */}
            </a>
          </li>

          <LanguageChanger />
        </ul>
        <div className="nav_btn_lang">
          <div className="lan">
            <LanguageChanger />
          </div>
          <TemporaryDrawer
            id="burger"
            icon={<MenuIcon sx={{ color: "var(--white)" }} />}
            bg_color={"var(--black)"}
            title={
              <>
                <ul className="menu">
                  <li>
                    {" "}
                    <a className="anchor" href="/">
                      {t("common:home")}
                    </a>
                  </li>
                  <li>
                    <a className="anchor" href="#rental">
                      {t("common:rental")}
                    </a>
                  </li>
                  <li>
                    <a className="anchor" href="#choose">
                      {t("common:why")}
                    </a>
                  </li>

                  <li>
                    {" "}
                    <a className="anchor" href="#brands">
                      {t("common:brands")}
                    </a>
                  </li>
                </ul>
              </>
            }
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigate;
