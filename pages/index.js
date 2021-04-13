import Head from "next/head";

import { stories } from "../data";

export const config = { amp: true };

export default function Home() {
  return (
    <>
      <Head>
        <title>Kumpulan Kisah, Cerita, Tulisan | Guyub</title>
        <script
          async
          key="amp-story"
          custom-element="amp-story"
          src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
        />
      </Head>

      <amp-story
        standalone=""
        title="Kumpulan Kisah, Cerita, Tulisan"
        publisher="Heri Gunawan"
        publisher-logo-src="https://amp.dev/favicons/coast-228x228.png"
        poster-portrait-src="https://amp.dev/static/samples/img/story_dog2_portrait.jpg"
        poster-square-src="https://amp.dev/static/samples/img/story_dog2_square.jpg"
        poster-landscape-src="https://amp.dev/static/samples/img/story_dog2_landscape.jpg"
      >
        {stories.map((stories) => (
          <amp-story-page id={stories.slug}>
            <amp-story-grid-layer template="fill">
              <amp-img
                src={stories.cover}
                width="720"
                height="1280"
                layout="responsive"
                className="vignette-inset"
              />
            </amp-story-grid-layer>
            <amp-story-grid-layer template="thirds">
              <div grid-area="lower-third">
                {stories.subtitle && (
                  <h3 animate-in="fly-in-right">
                    <span data-text-background-color="#c3943c">
                      {stories.subtitle}
                    </span>
                  </h3>
                )}
                <h2 animate-in="fly-in-left">
                  <span data-text-background-color="#c3943c">
                    {stories.title_1}
                  </span>
                </h2>
                <h1 animate-in="fly-in-left">
                  <span data-text-background-color="crimson">
                    {stories.title_2}
                  </span>
                </h1>
              </div>
            </amp-story-grid-layer>
            <amp-story-page-attachment
              layout="nodisplay"
              href={`/${stories.slug}`}
              data-cta-text="Read more"
              theme="dark"
            ></amp-story-page-attachment>
          </amp-story-page>
        ))}

        {/* <!-- Here we have a page consisting of a video which autoplays and loops. --> */}
        {/* <amp-story-page id="page-2">
          <amp-story-grid-layer template="fill">
            <amp-video
              autoplay=""
              loop=""
              width="720"
              height="960"
              poster="https://amp.dev/static/samples/img/story_video_dog_cover.jpg"
              layout="responsive"
            >
              <source
                src="https://amp.dev/static/samples/video/story_video_dog.mp4"
                type="video/mp4"
              />
            </amp-video>
          </amp-story-grid-layer>
        </amp-story-page> */}

        {/* <!-- Pre-defined entry animations make it possible to create dynamic pages without videos. The length and initial delay can be customized using the `animate-in-duration` and `animate-in-delay` properties. The [animations sample](/documentation/examples/visual-effects/amp_story_animations/) shows all available animantions in action. --> */}
        {/* <amp-story-page id="animation-demo">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://amp.dev/static/samples/img/story_dog4.jpg"
              animate-in="fly-in-top"
              width="720"
              height="1280"
              layout="responsive"
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="thirds">
            <h2
              animate-in="fly-in-bottom"
              grid-area="lower-third"
              animate-in-delay="0.4s"
            >
              Best walk ever!
            </h2>
          </amp-story-grid-layer>
        </amp-story-page> */}

        {/* <!-- Stories can use predefined layouts to style the page. Here we're using the `thirds` template. For an overview about the available layouts take a look at the [layouts sample](/documentation/examples/style-layout/amp_story_layouts/). --> */}
        {/* <amp-story-page id="layout-demo">
          <amp-story-grid-layer template="thirds">
            <amp-img
              grid-area="upper-third"
              src="https://amp.dev/static/samples/img/story_thirds_1.jpg"
              width="560"
              height="420"
              layout="responsive"
            />
            <amp-img
              grid-area="middle-third"
              src="https://amp.dev/static/samples/img/story_thirds_2.jpg"
              width="560"
              height="420"
              layout="responsive"
            />
            <amp-img
              grid-area="lower-third"
              src="https://amp.dev/static/samples/img/story_thirds_3.jpg"
              width="560"
              height="420"
              layout="responsive"
            />
          </amp-story-grid-layer>
        </amp-story-page> */}

        {/* <!-- A "bookend" panel containing links to other resources will appear on the last page of your story if you include an `amp-story-bookend` that references a [bookend JSON config](/static/samples/json/bookend.json). --> */}
        {/* <amp-story-bookend
          src="https://amp.dev/static/samples/json/bookend.json"
          layout="nodisplay"
        /> */}
      </amp-story>
    </>
  );
}
