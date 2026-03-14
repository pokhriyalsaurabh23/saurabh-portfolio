import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Agentic Platform",
    category: "AI Workflows & Automation",
    tools:
      "Node.js, NestJS, LLMs, Vector Embeddings, Typesense, Event-Driven Architecture",
    description:
      "Agentic orchestration layer that connects tools, workflows, and LLMs to automate complex product and engineering tasks.",
  },
  {
    title: "FontGPT",
    category: "AI-Powered Font Discovery",
    tools:
      "Next.js, Node.js, Embedding-based Search, Typesense, REST APIs, GraphQL",
    description:
      "AI assistant to help designers and developers discover the right fonts using natural language and embedding-based similarity search.",
  },
  {
    title: "License Management System",
    category: "Font License Automation",
    tools: "NestJS, TypeORM, SQL, ETL Pipelines, GraphQL, Vue.js",
    description:
      "Enterprise-grade system that automates font license workflows end to end, replacing manual Excel-based processes.",
  },
  {
    title: "Merchant Trial Tool",
    category: "Payment Gateway Experience",
    tools:
      "Next.js, React, Node.js, Express, TypeScript, Apple Pay, Google Pay, 3DS",
    description:
      "Interactive trial environment for experimenting with WorldPay payment options, including Apple Pay, Google Pay, and tokenized flows.",
  },
  {
    title: "WorldPay & VTEX Integrations",
    category: "Enterprise Payments",
    tools: "React, Node.js, REST & SOAP APIs, VTEX, AWS",
    description:
      "Deep integrations between WorldPay and VTEX, powering secure, scalable payment experiences and admin dashboards.",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        <p className="carousel-description">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
