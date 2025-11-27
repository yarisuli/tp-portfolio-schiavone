import './Contacto.css'

function Contacto() {
  return (
    <section className="contacto-section" id="contacto">
      <div className="contacto-content">
        <h2 className="contacto-title">Contactame</h2>
        <p className="contacto-text">Completa la informacion y me pondre en contacto</p>
        <form className="contacto-form">
          <input 
            type="text" 
            placeholder="Nombre y apellido" 
            className="contacto-input"
          />
          <input 
            type="tel" 
            placeholder="Numero de telefono" 
            className="contacto-input"
          />
          <div className="contacto-row">
            <input 
              type="text" 
              placeholder="Servicio de interes" 
              className="contacto-input"
            />
            <input 
              type="text" 
              placeholder="Motivo" 
              className="contacto-input"
            />
          </div>
          <textarea 
            placeholder="Descripcion amplia del motivo" 
            className="contacto-textarea"
            rows="5"
          />
          <button type="submit" className="contacto-button">
            Ponerme en contacto
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contacto

