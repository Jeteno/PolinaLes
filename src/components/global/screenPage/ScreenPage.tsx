import './screenPage.scss'
import PopupPage from '../popapPage/PopapPage';

type ChildComponentProps = {
   popupState: boolean;
   togglePopup: () => void;
}

function ScreenPage({ popupState, togglePopup }: ChildComponentProps) {
   return (
      <section className="screen-page__page page">
         <div className="screen-page__container container">
            <div className="screen-page__body body">
               <div className="screen-page__content">
                  <div className="screen-page__title">
                     <h1 className="screen-page__title-h">
                        English Language
                     </h1>
                  </div>
                  <div className="screen-page__subtitle">
                     <p className="screen-page__subtitle-p">
                     — это просто
                     </p>
                  </div>
                  <ul className="screen-page__list">
                     <li className="screen-page__paragraph">
                        <span className="screen-page__paragraph-icon">
                           <svg className='screen-page__paragraph-icon-img' width="29.000000" height="30.000000" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <defs/>
                              <path id="Star 1" d="M14 0L12.38 9.5L5.89 2.38L9.66 11.24L0.35 8.76L8.32 14.18L-0.85 17.13L8.78 17.38L2.66 24.82L10.9 19.82L9.77 29.39L14 20.72L18.22 29.39L17.09 19.82L25.33 24.82L19.21 17.38L28.84 17.13L19.67 14.18L27.64 8.76L18.33 11.24L22.1 2.38L15.61 9.5L14 0Z" fill="#FDD402" fill-opacity="1.000000" fill-rule="evenodd"/>
                           </svg>
                        </span>
                        <p className="screen-page__paragraph-title">
                           Научиться говорить на английском языке — абсолютно реально для каждого
                        </p>
                     </li>
                     <li className="screen-page__paragraph">
                        <span className="screen-page__paragraph-icon">
                           <svg className='screen-page__paragraph-icon-img' width="29.000000" height="30.000000" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <defs/>
                              <path id="Star 1" d="M14 0L12.38 9.5L5.89 2.38L9.66 11.24L0.35 8.76L8.32 14.18L-0.85 17.13L8.78 17.38L2.66 24.82L10.9 19.82L9.77 29.39L14 20.72L18.22 29.39L17.09 19.82L25.33 24.82L19.21 17.38L28.84 17.13L19.67 14.18L27.64 8.76L18.33 11.24L22.1 2.38L15.61 9.5L14 0Z" fill="#FDD402" fill-opacity="1.000000" fill-rule="evenodd"/>
                           </svg>                        </span>
                        <p className="screen-page__paragraph-title">
                           Если вы уже давно стараетесь овладеть английским — вам сюда
                        </p>
                     </li>
                  </ul>
                  <button className="screen-page__button mask__style" onClick={togglePopup}>
                     Записаться на занятие
                  </button>
               </div>
               {popupState ? (
                  <PopupPage togglePopup={togglePopup}/>
               ) : null}
            </div>
         </div>
      </section>
   )
}

export default ScreenPage;