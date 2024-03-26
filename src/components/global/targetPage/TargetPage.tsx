import './targetPage.scss'
import { useState } from 'react';

interface targetCardType {
   img?: string;
   title?: string;
   subtitle?: string;
}

function TargetPage() {
   const [targetCard] =useState<targetCardType[]>([
      {
         img: '../../../../../img/target/icon-1.png',
         title: 'Подготовка к экзаменам',
         subtitle: 'ОГЭ, ЕГЭ, используя только актуальные материалы и действительно нужные задания',
      },
      {
         img: '../../../../../img/target/icon-2.png',
         title: 'Помощь учащимся',
         subtitle: 'Контрольные, тесты, ВПР — разберём любые сложности и вопросы',
      },
      {
         img: '../../../../../img/target/icon-3.png',
         title: 'Изучение языка',
         subtitle: 'Изучение английского языка с нуля, либо повышение уровня уже имеющихся знаний',
      },
      {
         img: '../../../../../img/target/icon-4.png',
         title: 'Разговорный клуб',
         subtitle: 'Обсудим интересующие темы, а заодно прокачаем свой speaking skill',
      }
   ])

   return (
      <section className="target__page page">
         <div className="target__container container">
            <div className="target__body body body__page">
               <div className="target__title">
                  <h2 className="target__title title__page">
                     К чему я готовлю
                  </h2>
               </div>
               <div className="target__cards cards">
                  {targetCard.map((card, index) => {
                     return (
                        <div className="target__card card" key={index}>
                           <div className={`target__card-icon target__card-icon-${index}`}>
                              <img src={card.img} alt="icon" className="target__card-img" />
                           </div>
                           <div className="target__card-content">
                              <div className="target__card-content-title mask__style">
                                 <h3 className="target__card-content-title-h">
                                    {card.title}
                                 </h3>
                              </div>
                              <div className="target__card-content-subtitle">
                                 <p className="target__card-content-subtitle-p">
                                    {card.subtitle}
                                 </p>
                              </div>
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

export default TargetPage;