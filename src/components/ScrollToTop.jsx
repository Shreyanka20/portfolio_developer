import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const SECTION_PATHS = ["about", "projects", "experience", "skills", "contact"];

const getHashId = (hash) => {
  const rawId = hash.slice(1);

  try {
    return decodeURIComponent(rawId);
  } catch {
    return rawId;
  }
};

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === "POP") return;

    const sectionFromPath = SECTION_PATHS.find((section) => pathname === `/${section}`);

    if (sectionFromPath) {
      const timer = window.setTimeout(() => {
        document.getElementById(sectionFromPath)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
      return () => window.clearTimeout(timer);
    }

    if (hash) {
      const id = getHashId(hash);
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
      return () => window.clearTimeout(timer);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash, navigationType]);

  return null;
}
