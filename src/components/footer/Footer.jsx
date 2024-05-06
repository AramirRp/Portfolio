import './footer.css'
import footer_logo from '../../assets/logo.svg'
import user_icon from '../../assets/user_icon.svg'


export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>crédits photos : <a href='https://www.instagram.com/ianmorlion/'>Ian Morlion</a> et <a href='https://www.facebook.com/vertigesphotovideo'>vertiges</a></p>
            </div>

        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">Crédits conception, mise en page, graphisme : Antoine Rogé-Picard</p>
        <div className="footer-bottom-right">
        </div>
        </div>
    </div>
  )
}

export default Footer