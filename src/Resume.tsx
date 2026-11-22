import { useScrollFadeIn } from "./hooks/useScrollFadeIn"

function Resume() {
  useScrollFadeIn('header, .bullet-icon', { stepDelay: 200 })

  return (
    <div className="bio container">
      <h1 className="sweep">Work Experience &amp; Education</h1>

      <header style={{
          opacity: 0,
          display: "flex", 
          alignItems: "flex-end", 
          gap: ".5rem", 
          margin: "2rem 0" 
        }}
      >
        <span style={{ 
            color: "var(--accent)", 
            fontFamily: "var(--mono)",
            fontWeight: "700",
            flex: "1 0 max-content"
          }}
        >Professional Summary</span>
        <hr />
      </header>

      <p className="sweep" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
        I build digital experiences where thoughtful design meets reliable front-end engineering with HTML, CSS, JavaScript, TypeScript, React, Angular, WordPress and PHP. I'm especially drawn to projects that need both creative direction and technical structure. I care about clean code, practical problem-solving, and the small details that make an experience feel intentional.
      </p>

      <header style={{
          opacity: 0,
          display: "flex", 
          alignItems: "flex-end", 
          gap: ".5rem", 
          margin: "2rem 0" 
        }}
      >
        <span style={{ 
            color: "lightgreen", 
            fontFamily: "var(--mono)", 
            fontWeight: "700",
            flex: "1 0 max-content"
          }}
        >Work History</span>
        <hr />
      </header>

      <div className="job sweep">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>Digital Marketing Specialist</h3>
          <p className="ibm-plex-mono-regular" style={{ lineHeight: 1.25, fontSize: "0.85rem", marginBottom: ".5rem" }}>Warren CAT &bull; Tulsa, OK &bull; 01-2025 - Current</p>
        </div>
        <ul style={{ marginTop: '1rem', width: '65%' }}>
          <li>
            <span className="bullet-icon"></span>
            <span>Developed and maintained business websites using WordPress, PHP, and MySQL.</span>
          </li>
          <li>
            <span className="bullet-icon"></span>
            <span>Created and implemented digital marketing campaigns, including email marketing and ppc advertising.</span>
          </li>
          <li>
            <span className="bullet-icon"></span>
            <span>Responded to internal customer requests for technical support or app development</span>
          </li>
          <li>
            <span className="bullet-icon"></span>
            <span>Met with principal stakeholders to establish project scope, goals and milestones.</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Resume