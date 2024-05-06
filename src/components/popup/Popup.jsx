
import "./popup.css"

export const Popup = (props) => {
    
  return (props.trigger) ? (

    <div className="popup" onClick={() => props.setTrigger(false)}>
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>fermer</button>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default Popup
