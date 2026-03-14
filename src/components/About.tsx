import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Full Stack Engineer with 4+ years of experience building scalable web
          applications and platforms using React, Vue, Next.js, Node.js, and NestJS.
          I have worked across payments, insurance, and license management, designing
          performant backends, ETL pipelines, and GraphQL layers that power production
          UIs. Recently, I&apos;ve been focused on AI-driven features—agentic workflows,
          font discovery, and semantic search using embeddings and tools like Typesense—
          turning raw data into intelligent, user-friendly experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
