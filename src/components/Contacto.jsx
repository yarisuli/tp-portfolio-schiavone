import './Contacto.css'

function Contacto() {
  return (
    <section className="contacto-section" id="contacto">
      <img src="/fancy.png" alt="Fancy" className="contacto-fancy-image" />
      <div className="contacto-content">
        <h2 className="contacto-title">Contactame</h2>
        <p className="contacto-text">Completa la informacion y me pondre en contacto</p>
        <form className="contacto-form">
          <div className="contacto-field">
            <input 
              type="text" 
              className="contacto-input"
              placeholder="Nombre y apellido"
            />
          </div>
          <div className="contacto-field">
            <input 
              type="tel" 
              className="contacto-input"
              placeholder="Numero de telefono"
            />
          </div>
          <div className="contacto-row">
            <div className="contacto-field">
              <input 
                type="text" 
                className="contacto-input"
                placeholder="Servicio de interes"
              />
            </div>
            <div className="contacto-field">
              <input 
                type="text" 
                className="contacto-input"
                placeholder="Motivo"
              />
            </div>
          </div>
          <div className="contacto-field">
            <textarea 
              className="contacto-textarea"
              rows="5"
              placeholder="Descripcion amplia del motivo"
            />
          </div>
          <a href="https://www.youtube.com/watch?v=eNNkG0s9CB0" target="_blank" rel="noopener noreferrer" className="contacto-button">
            Ponerme en contacto
          </a>
        </form>
        <div className="contacto-social">
          <div className="contacto-social-item">
            <img src="/instagram.png" alt="Instagram" className="contacto-social-icon" />
            <span className="contacto-social-text">@barberschia</span>
          </div>
          <div className="contacto-social-item">
            <img src="/whatsapp.png" alt="WhatsApp" className="contacto-social-icon" />
            <span className="contacto-social-text">+11 28071592</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto

