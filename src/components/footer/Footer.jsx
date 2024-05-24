import './footer.css'
import footer_logo from '../../assets/logo.svg'


export const Footer = () => {
  return (
    <div className="footer flex flex-col gap-[6px]">
        <div className="footer-top flex justify-between">
            <div className="footer-top-left text-xl">
                <img src={footer_logo} alt="" className='w-[35%] h-[50%] mb-2 ml-2' />
                <p className='italic font-light'>crédits photos : <a href='https://www.instagram.com/ianmorlion/'>Ian Morlion</a> et <a href='https://www.facebook.com/vertigesphotovideo'>vertiges</a></p>
            </div>

        </div>
        <hr />
        <div className="footer-bottom flex justify-between text-lg">
            <p className="footer-bottom-left">Crédits conception, mise en page, graphisme : Antoine Rogé-Picard</p>
        <div className="footer-bottom-right flex gap-[50px] mb-[50px]">
        </div>
        </div>
    </div>
  )
}

export default Footer