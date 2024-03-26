import './header.scss'
import { useState } from "react";
import Logo from '../../local/logo/Logo'
import Social from '../../local/social/Social'

function Header() {
   const [fillColorLogo] = useState<string>('#94504D');
   const [fillColorLogoAdditional] = useState<string>('#000000');

   return(
      <header className="header__page page">
         <div className="header__container container">
            <div className="header__body body">
               <Logo fillColorLogo={fillColorLogo} fillColorLogoAdditional={fillColorLogoAdditional}/>
               <Social fillColorLogo={fillColorLogo}/>
            </div>
         </div>
      </header>
   )
}

export default Header;