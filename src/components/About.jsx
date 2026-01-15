import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      {/* Profile Stats Grid */}
      <Reveal>
        <div className="stats-grid">
          <div className="stat-box">
            <h4>Age</h4>
            <p>20</p>
          </div>
          <div className="stat-box">
            <h4>Location</h4>
            <p>Mumbai, India</p>
          </div>
          <div className="stat-box">
            <h4>Education</h4>
            <p>B.Tech CE (3rd Year)</p>
          </div>
          <div className="stat-box">
            <h4>Focus Areas</h4>
            <p>Data Science, AI, ML</p>
          </div>
        </div>
      </Reveal>

      <div className="about-divider"></div>
      
      {/* Who I Am */}
      <Reveal>
        <div className="about-block">
          <h3>Who I Am</h3>
          <p>
            I am a third-year B.Tech Computer Engineering student with a strong interest 
            in Data Science, Artificial Intelligence, and computational problem solving. 
            I enjoy understanding how algorithms behave, how systems scale, and how 
            computing principles can be applied to real-world challenges.
          </p>
        </div>
      </Reveal>

      <div className="about-divider"></div>

      {/* What I Do */}
      <Reveal>
        <div className="about-block">
          <h3>What I Do</h3>
          <p>
            I work with Python, Java, and C, and have hands-on experience with TensorFlow, 
            Keras, Tkinter, and MySQL. I build machine learning models, algorithm-driven 
            applications, and GUI-based tools. My academic projects include CNN image 
            classifiers, Java-based automation systems, and computational logic apps.
          </p>
        </div>
      </Reveal>

      <div className="about-divider"></div>

      {/* What I Aim For */}
      <Reveal>
        <div className="about-block">
          <h3>What I Aim For</h3>
          <p>
            My long-term goal is to build a strong career in Data Science and AI. I aim to work on 
            intelligent systems, scalable ML solutions, and research-driven applications 
            that combine analytical reasoning with practical innovation.
          </p>
        </div>
      </Reveal>

      <div className="about-divider"></div>

      {/* Beyond Coding */}
      <Reveal>
        <div className="about-block">
          <h3>Beyond Coding</h3>
          <p>
            Outside the technical world, I enjoy watching movies, discussing storytelling and cinematography.
            I am also a cricket enthusiast who loves analyzing matches, players, 
            and strategies. In my free time, I explore tech videos and enjoy learning something new every day.
          </p>
        </div>
      </Reveal>

      <div className="about-divider"></div>

      {/* Personality Traits */}
      <Reveal>
        <div className="traits-section">
          <div className="trait-box">
            <h4>Curious Thinker</h4>
            <p>I enjoy exploring concepts deeply and understanding how systems work.</p>
          </div>

          <div className="trait-box">
            <h4>Analytical Problem Solver</h4>
            <p>I break complex problems into small, logical steps and solve them effectively.</p>
          </div>

          <div className="trait-box">
            <h4>Growth Oriented</h4>
            <p>I constantly learn new tools and technologies to improve myself.</p>
          </div>

          <div className="trait-box">
            <h4>Consistent & Focused</h4>
            <p>I maintain discipline, practice regularly, and stay committed to my goals.</p>
          </div>
        </div>
      </Reveal>

    </section>
  );
}
