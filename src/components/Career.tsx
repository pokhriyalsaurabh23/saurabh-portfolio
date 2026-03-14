import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer II</h4>
                <h5>Monotype</h5>
              </div>
              <h3>2024 – Present</h3>
            </div>
            <p>
              Leading the build of an end-to-end font license management system.
              Owning backend services in NestJS, SQL, and TypeORM, ETL pipelines
              from the Customer Data Lake (CDL), and a GraphQL aggregation layer
              that powers a Vue.js UI for automated license tracking and reporting.
              I also contribute to internal initiatives such as an Agentic platform
              and FontGPT—AI-driven tools that use vector embeddings and
              Typesense-based search to make font exploration and developer workflows
              smarter and more intuitive.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Experience Engineer</h4>
                <h5>Publicis Sapient</h5>
              </div>
              <h3>2021 – 2024</h3>
            </div>
            <p>
              Built and optimized high-traffic payment experiences for WorldPay FIS
              and Altria. Developed React and Next.js frontends, Node.js and Express
              backends (REST &amp; SOAP), integrated Apple Pay / Google Pay, improved
              performance with critical CSS &amp; lazy loading, and automated
              operational workflows using cron jobs and event-driven patterns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
