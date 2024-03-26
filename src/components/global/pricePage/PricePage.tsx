import './pricePage.scss'
import { useState } from 'react';
import PopupPage from '../popapPage/PopapPage';

interface priceCardType {
   title?: string,
   subtitle?: string,
   OneTitle?: string,
   priceOneTitle?: string,
   TwoTitle?: string,
   priceTwoTitle?: string,
   ThreeSubtitle?: string,
   ThreeTitle?: string,
   priceThreeTitle?: string,
   img?: string
}

type ChildComponentProps = {
   popupState: boolean;
   togglePopup: () => void;
}

function PricePage({ popupState, togglePopup }: ChildComponentProps) {
   const [priceCard] = useState<priceCardType[]>([
   {
      title: 'Индивидуальное занятие',
      OneTitle: '60 минут',
      priceOneTitle: '800 ₽',
      TwoTitle: '40 минут',
      priceTwoTitle: '600 ₽',
      ThreeSubtitle: 'Разговорный клуб',
      ThreeTitle: '60 минут',
      priceThreeTitle: '800 ₽',
   },
   {
      title: 'Парное занятие',
      OneTitle: '60 минут',
      priceOneTitle: '700 ₽/чел',
      TwoTitle: '40 минут',
      priceTwoTitle: '500 ₽/чел',
      ThreeSubtitle: 'Разговорный клуб',
      ThreeTitle: '60 минут',
      priceThreeTitle: '700 ₽/чел',
   },
   {
      title: 'Групповое занятие',
      subtitle: '(3-4 чел)',
      OneTitle: '60 минут',
      priceOneTitle: '650 ₽/чел',
      TwoTitle: '40 минут',
      priceTwoTitle: '450 ₽/чел',
      ThreeSubtitle: 'Разговорный клуб',
      ThreeTitle: '60 минут',
      priceThreeTitle: '650 ₽/чел',
   },
   {
      img: '../../../../public/img/price/arrow.svg'
   }
   ])

   return (
      <section className="price__page page">
         <div className="price__container container">
            <div className="price__body body body__page">
               <div className="price__title">
                  <h2 className="price__title title__page">
                     Занятия и стоимость
                  </h2>
               </div>
               <div className="price__cards cards">
                  {priceCard.map((card, index) => {
                     return (
                        <div className="price__card" key={index}>
                           {card.img === undefined ? (
                           <>
                           <div className="price__title">
                              <h3 className="price__title-h">
                                 {card.title}
                              </h3>
                              {card.subtitle !== undefined ? (
                                 <span className="price__title-span">{card.subtitle}</span>
                              ) : null}
                           </div>
                           <div className="price__content">
                              <div className="price__row">
                                 <h4 className="price__row-title">{card.OneTitle}</h4>    
                                 <div className="price__row-tag">{card.priceOneTitle}</div>                    
                              </div>
                              <div className="price__row">
                                 <h4 className="price__row-title">{card.TwoTitle}</h4>    
                                 <div className="price__row-tag">{card.priceTwoTitle}</div>                    
                              </div>
                              <div className="price__row">
                                 <div className="price__row-wrapper">
                                    <span className="price__row-span">{card.ThreeSubtitle}</span>
                                    <h4 className="price__row-title">{card.ThreeTitle}</h4>    
                                 </div>
                                 <div className="price__row-tag">{card.priceThreeTitle}</div>                    
                              </div>
                           </div>
                           </>
                           ) : (
                              <div className="price__images">
                                 <img src={card.img} alt="arrow" className="price__images-arrow" onClick={togglePopup}/>
                              </div>
                           )}
                        </div>
                     )
                  })}
               </div>
               {popupState ? (
                  <PopupPage togglePopup={togglePopup}/>
               ) : null}
            </div>
         </div>
      </section>
   )
}

export default PricePage;