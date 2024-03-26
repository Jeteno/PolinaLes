import './accentPage.scss'
import { useState } from 'react';

interface accentContentType {
   index: string;
   title: string;
   subtitle: string;
   alternativeSubtitleTablet?: string;
   alternativeSubtitleMobile?: string;
}

function AccentPage() {
   const [accentContentCard] = useState<accentContentType[]>([
      {
         index: '01',
         title: 'Персональное обучение',
         subtitle: 'Я работаю с каждым учеником в индивидуальном порядке — подберу подходящую программу, интересную именно вам',      
      },
      {
         index: '02',
         title: 'Быстрый прогресс',
         subtitle: 'Поднимаю любой уровень языка — даже если знаний «0», а результаты будут видны уже через месяц',      
      },
      {
         index: '03',
         title: 'Говори легко',
         subtitle: 'Делаю упор на развитие коммуникативных навыков — будем много разговаривать, даже если сперва это кажется невозможным',      
      },
      {
         index: '04',
         title: 'Экспертные материалы',
         subtitle: 'Работаю с аутентичными источниками, а также с материалами издательств: Cambridge University, Hamilton House, Oxford University, MacMillan, Longman', 
         alternativeSubtitleTablet: 'Работаю с аутентичными источниками и материалами издательств: Cambridge University, Hamilton House, Oxford, MacMillan, Longman',
         alternativeSubtitleMobile: 'Работаю с аутентичными источниками и материалами издательств: Cambridge University, Hamilton House, Oxford, MacMillan'     
      },
      {
         index: '05',
         title: 'Индивидуальный подход',
         subtitle: 'Планирую занятия с учётом особенностей восприятия материала, в Вашем темпе',      
      },
      {
         index: '06',
         title: 'Обучение онлайн',
         subtitle: 'Заниматься можно из любой точки мира, все что потребуется — это телефон/планшет/ноутбук',      
      },     
   ])

   return (
      <section className="accent__page page">
         <div className="accent__container container">
            <div className="accent__body body body__page">
               <div className="accent__title">
                  <h2 className="accent__title title__page">
                     Акцент на важном                     
                  </h2>
               </div>
               <div className="accent__cards cards">
                  {accentContentCard.map((card, index) => {
                     return (
                        <div className="accent__card card" key={index}>
                           <span className="accent__card-span">{card.index}</span>
                           <div className="accent__card-content">
                              <div className="accent__card-title">
                                 <h2 className="accent__card-title-h">
                                    {card.title}
                                 </h2>
                              </div>
                              <div className="accent__card-subtitle">
                                 <p className="accent__card-subtitle-p">
                                 {window.innerWidth < 1024 && index === 3 ? 
                                    (window.innerWidth < 500 ? card.alternativeSubtitleMobile : card.alternativeSubtitleTablet)
                                    : card.subtitle}
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

export default AccentPage;