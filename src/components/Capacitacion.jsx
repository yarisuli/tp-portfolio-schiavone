import './Capacitacion.css'

function Capacitacion() {
  return (
    <section className="capacitacion-section" id="capacitacion">
      <div className="capacitacion-left">
        <img src="/barber.png" alt="Barber" className="capacitacion-image" />
      </div>
      <div className="capacitacion-content">
        <h2 className="capacitacion-title">Capacitacion</h2>
        <p className="capacitacion-text">
          <span className="capacitacion-text-orange">Barbero y colorista</span><br />
          <span className="capacitacion-text-white">Savage barbershop (actualidad)</span><br />
          <span className="capacitacion-text-extra-light">Navajas academia (2024)</span><br />
          <span className="capacitacion-text-normal">Seminario de gestion de redes e identidad</span><br />
          <span className="capacitacion-text-extra-light">Academia Scissors (2024)</span><br />
          <span className="capacitacion-text-normal">Seminario de tricologia y colorimetria</span><br />
          <span className="capacitacion-text-extra-light">Academia Scissors (2024)</span><br />
          <span className="capacitacion-text-normal">Seminario de tricologia y colorimetria</span><br />
          <span className="capacitacion-text-extra-light">Facundo Navajas (2024)</span><br />
          <span className="capacitacion-text-normal">Perfexionamiento privado</span><br />
          <span className="capacitacion-text-extra-light">Navajas academia (2023)</span><br />
          <span className="capacitacion-text-normal">Curso de barberia para caballeros</span>
        </p>
      </div>
    </section>
  )
}

export default Capacitacion

