const highlights = [
  { title: "About", text: "Introduce yourself, your organization, or your project here." },
  { title: "Work", text: "Showcase your research, services, products, projects, or achievements." },
  { title: "Contact", text: "Add your preferred contact method and a clear call to action." },
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">YOUR NAME</a>
        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="heroGlow" />
        <p className="eyebrow">WELCOME TO MY WEBSITE</p>
        <h1>Build something <span>meaningful.</span></h1>
        <p className="heroText">
          Replace this text with a short, memorable introduction about you,
          your research, company, project, or personal brand.
        </p>
        <div className="actions">
          <a className="button primary" href="#work">Explore my work</a>
          <a className="button secondary" href="#contact">Get in touch</a>
        </div>
      </section>

      <section className="section" id="about">
        <p className="eyebrow">ABOUT</p>
        <h2>A clean foundation you can make your own.</h2>
        <p className="sectionLead">
          This starter is intentionally simple: edit the content in
          <code> app/page.tsx </code> and the design in <code>app/globals.css</code>.
          Add pages later as your website grows.
        </p>
        <div className="cards">
          {highlights.map((item) => (
            <article className="card" key={item.title}>
              <div className="cardNumber">0{highlights.indexOf(item) + 1}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section muted" id="work">
        <p className="eyebrow">FEATURED WORK</p>
        <h2>Replace these with your projects.</h2>
        <div className="projectGrid">
          {["Project One", "Project Two", "Project Three"].map((project, i) => (
            <article className="project" key={project}>
              <div className="projectImage">0{i + 1}</div>
              <div>
                <p className="projectType">PROJECT / CASE STUDY</p>
                <h3>{project}</h3>
                <p>Add a short description, result, publication, product, or link.</p>
                <a href="#contact">Learn more →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">CONTACT</p>
        <h2>Let’s connect.</h2>
        <p>Replace the email address below with your own.</p>
        <a className="email" href="mailto:hello@example.com">hello@example.com</a>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Your Name</span>
        <span>Built with Next.js · Hosted on Vercel</span>
      </footer>
    </main>
  );
}