import './benefitPage.scss'
import { useState } from 'react';

interface cardBenifitType {
   img: string;
   title: string;
}

function BenefitPage() {
   const [cardBenifit] = useState<cardBenifitType[]>([
      {
      img: '../../../../../img/benefit/icon-1.png',
      title: 'Изучал язык, но боится говорить'
      },
      {
         img: '../../../../../img/benefit/icon-2.png',
         title: 'Готовится к экзамену, а уверенности в своих силах совсем нет'
      },
      {
         img: '../../../../../img/benefit/icon-3.png',
         title: 'Не понимает правил грамматики'
      },
      {
         img: '../../../../../img/benefit/icon-4.png',
         title: 'Хочет улучшить своё произношение'
      },
   ])

   return (
      <section className="benefit__page page">
         <div className="benefit__container container">
            <div className="benefit__body body body__page">
               <div className="benefit__title">
                  <h2 className="benefit__title title__page">
                     Уроки будут полезны тем, кто
                  </h2>
               </div>
               <div className="benefit__cards cards">
                  {cardBenifit.map((card, index) => {
                     return (
                        <div className="benefit__card card" key={index}>
                           <div className={`card__icon-${index}`}>
                              <img src={card.img} alt="icon" className="card__icon-img" />
                           </div>
                           <div className="card__content">
                              <h3 className="card__content-title">
                                 {card.title}
                              </h3>
                           </div>
                        </div>
                     )
                  })}
               </div>
            </div>
         </div>
      </section>
   )
}

export default BenefitPage;