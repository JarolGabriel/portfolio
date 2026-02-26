import { ui } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang === "es") return "es";
  return "en";
}

export function useTranslations(lang: "es" | "en") {
  return function t(key: keyof (typeof ui)["en"]) {
    return ui[lang][key];
  };
}
