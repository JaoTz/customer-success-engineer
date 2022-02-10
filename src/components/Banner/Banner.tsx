import { ReactElement, Suspense } from "react";
import { useContent, useCroct } from "@croct/plug-react";
import { PersonaBadge } from "../Buttons";
import "./style.css";
import { Link } from "react-router-dom";
type HomeBanner = {
  title: string;
  subtitle: string;
  cta: {
    label: string;
    link: string;
  };
};

const fallbackBanner: HomeBanner = {
  title: "Default title",
  subtitle: "Default subtitle",
  cta: {
    label: "Try now",
    link: "https://croct.com",
  },
};

function HomeBanner(): ReactElement {
  const { title, subtitle, cta } = useContent<HomeBanner>("home-banner", {
    fallback: fallbackBanner,
  });

  return (
    <div className="container">
      <div className="banner">
        <h1 className="title">{title}</h1>
        <p className="sub-title">{subtitle}</p>
        <a href={cta.link} className="link">
          {cta.label}
        </a>
      </div>
      <Link to="/" reloadDocument>
        <button className="btn-back">Voltar</button>
      </Link>
    </div>
  );
}

export default function BannerPage(): ReactElement {
  const croct = useCroct();
  async () => {
    croct.fetch<HomeBanner>("home-hero");
  };

  return (
    <Suspense fallback="Personalizing content...">
      <HomeBanner />
    </Suspense>
  );
}
