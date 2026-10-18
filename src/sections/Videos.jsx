import SectionHeading from "../components/ui/SectionHeading.jsx";
import { copy, videos } from "../data/siteData.js";

export default function Videos({ language }) {
  const content = copy[language].videos;

  return (
    <section className="section videos" aria-labelledby="videos-title">
      <div className="container">
        <SectionHeading kicker={content.kicker} id="videos-title" title={content.title} />

        <div className="video-grid">
          {videos.map((video) => (
            <video
              key={video.src}
              className="video-card"
              src={video.src}
              poster={video.poster}
              preload="none"
              controls
              playsInline
              data-reveal
            >
              {video.label}
            </video>
          ))}
        </div>
      </div>
    </section>
  );
}
