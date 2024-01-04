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
              
                <a
                  href={project.link}
                  className="proj-link-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="proj-link-wrapper">
                    <img
                      className="proj-img"
                      src={project.thumb}
                      alt="My Portrait"
                    />
                    <h3 className="proj-thumb-title">{project.link_name} </h3>
                  </div>
                  <FaExternalLinkAlt className="link-icon" />
                </a>

                <div className="proj-lang-wrapper">
                  <h3 className="proj-lang-title">Project Description:</h3>
                  <br />
                  <div className="proj-desc">{project.desc}</div>
                </div>
                
                <div className="proj-feats-wrapper">
                  <h3 className="proj-lang-title">Key Features:</h3>
                  <br />
                  <ol className="proj-lang-list">
                    {Object.entries(project.feats).map(([title, desc]) => {
                      return (
                        <li>
                          <b>{title}:</b> &nbsp;
                          <span style={{fontSize: 'medium', fontWeight: '100px'}}>{desc}</span>
                        </li>
                      );
                    })}
                  </ol>
                </div>
                
                <div className="proj-lang-wrapper">
                  <h3 className="proj-lang-title">Skills Used:</h3>
                  <br />
                  <ul className="proj-lang-list">
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
