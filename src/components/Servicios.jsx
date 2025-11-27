import './Servicios.css'

function Servicios() {
  return (
    <section className="servicios-section" id="servicios">
      <h2 className="servicios-title">Servicios</h2>
      <div className="servicios-images">
        <div className="servicio-item">
          <img src="/cortes.png" alt="Cortes" className="servicio-image" />
          <div className="ver-mas">
            <span>Ver más</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18l6-6-6-6" stroke="#000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="servicio-item">
          <img src="/color.png" alt="Color" className="servicio-image" />
          <div className="ver-mas">
            <span>Ver más</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18l6-6-6-6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="servicio-item">
          <img src="/peinado.png" alt="Peinado" className="servicio-image" />
          <div className="ver-mas">
            <span>Ver más</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18l6-6-6-6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Servicios

