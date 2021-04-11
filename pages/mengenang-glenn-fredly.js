import Head from "next/head";

import { data } from "../data/mengenang-glenn-fredly";

export const config = { amp: true };

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
        {/* <amp-sidebar id="sidebar1" layout="nodisplay" className="sidebar">
          <ul>
            <li>
              <a href="#page=bacon-page"> Bacon page </a>
            </li>
            <li>
              <a href="https://www.amp.dev"> External Link </a>
            </li>
          </ul>
        </amp-sidebar> */}
        <style jsx>{`
          .j {
            color: azure;
            text-shadow: 2px 2px #000000;
            font-size: 1.5rem;
            font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue",
              "Helvetica", "Arial", sans-serif;
          }
          .p {
            line-height: 1.5;
            text-shadow: 1px 1px #8c8c8c;
            font-family: sans-serif;
            padding-bottom: 10px;
            font-size: 1.2rem;
            color: antiquewhite;
          }
          .coklat {
            background-color: #c3943c;
          }
          @media only screen and (max-width: 600px) {
            .p {
              font-size: 1.1rem;
            }
          }
        `}</style>

        <amp-story-page id="cover">
          {/* <amp-story-player layout="fixed" width="360" height="600">
            <a href="https://preview.amp.dev/documentation/examples/introduction/stories_in_amp/">
              <img
                src="https://amp.dev/static/samples/img/story_dog2_portrait.jpg"
                width="360"
                height="600"
                loading="lazy"
                data-amp-story-player-poster-img
              />
              Stories in AMP - Hello World
            </a>
          </amp-story-player> */}
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://mmc.tirto.id/image/otf/400x0/2021/04/08/mozaik-glenn-fredly_ratio-9x16.jpg"
              width="720"
              height="1280"
              layout="responsive"
              className="vignette-inset"
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="thirds">
            <div grid-area="lower-third">
              <h3 animate-in="fly-in-right">
                <span data-text-background-color="#c3943c">
                  {data.subtitle}
                </span>
              </h3>
              <h1 className="j" animate-in="fly-in-left">
                <span
                  data-text-background-color="crimson"
                  style={{ color: "#FFFFFF;" }}
                >
                  {data.title}
                </span>
              </h1>
            </div>
          </amp-story-grid-layer>
        </amp-story-page>

        {data.pages.map((pages) => (
          <amp-story-page id={pages.id} key={pages.id} className="coklat">
            {pages.layer.map((layer) => (
              <amp-story-grid-layer template={layer.template}>
                {layer.content.map((content) => (
                  <>
                    {content.image && (
                      <amp-img
                        src={content.image}
                        width="720"
                        height="1280"
                        layout="responsive"
                      />
                    )}
                    {content.heading && (
                      <h1
                        className="j"
                        grid-area={`${content.pos}-third`}
                        animate-in="fly-in-left"
                        animate-in-duration="1s"
                      >
                        {content.heading}
                      </h1>
                    )}
                    {content.text && (
                      <p
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

        <amp-story-page id="end">
          <amp-story-cta-layer>
            <a
              href="https://tirto.id/mengenang-glenn-fredly-kebaikan-bernyanyi-melampaui-maut-gbUU"
              className="button"
            >
              Sumber: Tirto.id
            </a>
          </amp-story-cta-layer>
        </amp-story-page>

        {/* <amp-story-page id="13">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://images.unsplash.com/photo-1575992949670-c2a234a0506c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
              width="720"
              height="1280"
              layout="responsive"
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="thirds">
            <h1
              grid-area="upper-third"
              animate-in="fly-in-left"
              animate-in-duration="1s"
            >
              Kenapa mau repot pulang ke Ambon?
            </h1>
            <h1
              animate-in="fly-in-right"
              animate-in-after="fade-in-obj"
              animate-in-delay="1s"
              grid-area="lower-third"
            >
              Glenn menjawab:
              <br />
              <span data-text-background-color="crimson">Ini rumah beta!</span>
            </h1>
          </amp-story-grid-layer>
        </amp-story-page> */}
      </amp-story>
    </>
  );
}
