import Head from "next/head";

import { data } from "../data/haji-wada";

export const config = { amp: 'hybrid' };

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "amp-img": any;
      "amp-story": any;
      "amp-story-page": any;
      "amp-story-grid-layer": any;
      "amp-story-page-attachment": any;
      "amp-youtube": any;
      "amp-twitter": any;
      "amp-story-interactive-poll": any;
      "amp-story-interactive-results": any;
      "amp-story-cta-layer": any;
    }
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>

      <amp-story
        standalone=""
        title={data.title}
        publisher="TirtoID"
        publisher-logo-src="https://kodekuy.github.io/favicon.ico"
        poster-portrait-src="https://mmc.tirto.id/image/otf/400x0/2021/04/08/mozaik-glenn-fredly_ratio-9x16.jpg"
        poster-square-src="https://mmc.tirto.id/image/otf/400x0/2021/04/08/mozaik-glenn-fredly_square.jpg"
        poster-landscape-src="https://mmc.tirto.id/image/otf/700x0/2021/04/08/mozaik-glenn-fredly_ratio-16x9.jpg"
      >
        <style jsx>{`
          .j {
            color: ${data.txt_color};
            text-shadow: 2px 2px #000000;
            font-size: 1.5rem;
            font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue",
              "Helvetica", "Arial", sans-serif;
          }
          .p {
            line-height: 1.5;
            font-family: sans-serif;
            padding-bottom: 10px;
            font-size: 1.2rem;
            color: ${data.txt_color};
          }
          .p a {
            color: ${data.txt_color};
            text-decoration: none;
          }
          .ar {
            line-height: 1.6;
            font-family: sans-serif;
            padding-bottom: 10px;
            font-size: 1.4rem;
            color: ${data.txt_color};
          }
          .coklat {
            background-color: ${data.bg_color};
          }
          .cover {
            filter: blur(8px);
            -webkit-filter: blur(8px);
          }
          .end {
            background-color: ${data.bg_color};
          }
          .white {
            color: #ffffff;
          }
          .button {
            background-color: ${data.txt_color};
            color: ${data.bg_color};
            padding: 30px;
            border-radius: 10px;
          }
          @media only screen and (max-width: 600px) {
            .p {
              font-size: 1.1rem;
            }
          }
        `}</style>

        <amp-story-page id="cover">
          <amp-story-grid-layer template="fill">
            <amp-img
              src={data.cover}
              width="720"
              height="1280"
              layout="responsive"
              className="cover"
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="thirds">
            <div grid-area="lower-third">
              {data.subtitle && (
                <h3 animate-in="fly-in-right">
                  <span data-text-background-color={data.bg_color}>
                    {data.subtitle}
                  </span>
                </h3>
              )}
              <h1 className="j" animate-in="fly-in-left">
                <span
                  data-text-background-color="#000000"
                  style={{ color: "#FFFFFF" }}
                >
                  {data.title}
                </span>
              </h1>
            </div>
          </amp-story-grid-layer>
        </amp-story-page>

        {data.pages.map((pages, i) => (
          <amp-story-page id={i} key={i} className="coklat">
            {pages.layer.map((layer) => (
              <amp-story-grid-layer template={layer.template}>
                {layer.content.map((content, j) => (
                  <>
                    {content.image && (
                      <amp-img
                        key={`i-${j}`}
                        src={content.image}
                        width="720"
                        height="1280"
                        layout="responsive"
                      />
                    )}
                    {content.heading && (
                      <h1
                        key={`h-${j}`}
                        className="j"
                        grid-area={`${content.pos}-third`}
                        animate-in="fly-in-left"
                        animate-in-duration="1s"
                      >
                        {content.heading}
                      </h1>
                    )}
                    {content.text_arab && (
                      <blockquote dir="rtl" className="ar">
                        {content.text_arab}
                      </blockquote>
                    )}
                    {content.text && (
                      <p
                        key={`t-${j}`}
                        className="p"
                        animate-in="fade-in"
                        dangerouslySetInnerHTML={{ __html: content.text }}
                      ></p>
                    )}
                  </>
                ))}
              </amp-story-grid-layer>
            ))}
          </amp-story-page>
        ))}

        <amp-story-page id="end" className="end">
          <amp-story-grid-layer template="fill">
            <amp-img
              src={data.cover}
              width="720"
              height="1280"
              layout="responsive"
              className="cover"
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="thirds">
            <p className="p" grid-area="lower-third">
              {data.source && (
                <a className="white" href={data.source.url}>
                  Sumber dari {data.source.name}
                </a>
              )}
              <br />
              {data.cover_credit && (
                <span
                  className="p"
                  dangerouslySetInnerHTML={{ __html: data.cover_credit }}
                />
              )}
            </p>
          </amp-story-grid-layer>
        </amp-story-page>
      </amp-story>
    </>
  );
}
