// Import Swiper React components
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { projects } from "./project_obj.js";
import { FaExternalLinkAlt } from "react-icons/fa";
// Import Slideshow styles
import "./Slideshow.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

export const Slideshow = () => {
  return (
    <Swiper
      className="swiper"
      modules={[Pagination, Navigation]}
      navigation
      slidesPerView={1}
      pagination={{ dynamicBullets: true }}
    >
      {projects.map((project) => (
        <SwiperSlide>
          <div className="slide">
            <div className="proj-title-wrapper">
              <h2>{project.title}</h2>
              <div className="proj-timeline">{project.dates}</div>
            </div>

            <div className="proj-grid-container">
              <div className="proj-link-card-wrapper" id="cell1">
                <a
                  href={project.link}
                  className="proj-link-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="proj-link-wrapper" id="cell2">
                    <img
                      className="proj-img"
                      src={project.thumb}
                      alt="My Portrait"
                    />
                    <h3 className="proj-link-title">{project.link_name} </h3>
                  </div>
                  <FaExternalLinkAlt className="proj-link-icon" />
                </a>
              </div>

              <div className="proj-text-wrapper" id="cell2">
                <h3>Project Description:</h3>
                <br />
                <div className="proj-desc">{project.desc}</div>
              </div>

              <div className="proj-text-wrapper" id="cell3">
                <h3>Key Features:</h3>
                <br />
                <ol className="list-push">
                  {Object.entries(project.feats).map(([title, desc]) => {
                    return (
                      <li>
                        <b>{title}:</b> &nbsp;
                        <span
                          style={{ fontSize: "medium", fontWeight: "100" }}
                        >
                          {desc}
                        </span>
                      </li>
                    );
                  })}
                </ol>
              </div>

              <div className="proj-text-wrapper" id="cell4">
                <h3>Skills Used:</h3>
                <br />
                <ul className="list-push">
                  {project.langs.map((lang) => (
                    <li>{lang}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
