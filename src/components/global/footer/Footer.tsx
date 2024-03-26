import './footer.scss'
import { useState } from "react";
import Logo from '../../local/logo/Logo'
import Social from '../../local/social/Social'

function Footer() {
   const [fillColorLogo] = useState<string>('#ffffff');
   const [fillColorLogoAdditional] = useState<string>('#ffffff');


   return(
      <footer className="footer__page page">
         <div className="footer__container container">
            <div className="footer__body body">
               <Logo fillColorLogo={fillColorLogo} fillColorLogoAdditional={fillColorLogoAdditional}/>
               <Social fillColorLogo={fillColorLogo}/>
            </div>
         </div>
      </footer>
   )
}

export default Footer;