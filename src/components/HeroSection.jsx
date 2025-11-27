import './HeroSection.css'

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <img src="/schia.png" alt="Schiavone" className="hero-left-image" />
        <button className="btn-hoja-vida">Hoja de vida</button>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          Tomas Franco<br />
          <span className="hero-title-name">Schiavone</span>
        </h1>
        <h2 className="hero-subtitle">Barberia y Estilismo</h2>
      </div>
    </section>
  )
}

export default HeroSection

