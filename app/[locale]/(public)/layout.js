"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState, useEffect } from "react";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import { useParams } from "next/navigation";
import Loading from "./loading";
const i18nNamespaces = ["home", "common"];

export default function PublicLayout({ children }) {
  const { locale } = useParams();
  const [translations, setTranslations] = useState(null);

  useEffect(() => {
    const fetchTranslations = async () => {
     
      const { t, resources } = await initTranslations(locale, i18nNamespaces);
      setTranslations({ t, resources });
    };

    fetchTranslations();
  }, [locale]);

  if (!translations) {
    return <Loading/>;
  }

  const { t, resources } = translations;

  return (
    resources && (
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </TranslationsProvider>
    )
  );
}
