import './questionsPage.scss'
import { useState } from 'react'

interface accordionContentType {
   title: string;
   subtitle: string;
   state: boolean;
}

function QuestionsPage() {
   const [accordionContent, setAccordionContent] = useState<accordionContentType[]>([
      {
         title: 'Как часто необходимо заниматься?',
         subtitle: 'Всё заваисит от вашей цели. Если цель — разговаривать, то необходимо заниматься как минимум 2 раза в неделю или чаще. Если же цель — грамматика / понимание речи на слух / расширение словарного запаса, то вполне можно заниматься и один раз в неделю, но с более объёмным домашним заданием.',
         state: false,
      },
      {
         title: 'Занятие проходит полностью на английском?',
         subtitle: 'В основном Да, русская речь используется по минимуму либо не используется совсем, однако я всегда адаптирую свою речь, если занятие проходит со студентами невысокого уровня.',
         state: false,
      },
      {
         title: 'С какого возраста вы начинаете обучать детей?',
         subtitle: 'Я работаю с детьми и взрослым начиная с 12 лет.',
         state: false,
      },
      {
         title: 'Есть ли у вас разговорные курсы?',
         subtitle: 'Да, для взрослых и детей с 16 лет есть разговорный клуб, в котором можно обсудить книги, фильмы, игры, а также любые интересующие вас темы.',
         state: false,
      },
   ])

   const toggleStateAccordion = (index:number) => {
      const updatedAccordionContent = accordionContent.map((item, i) => {
         if (i === index) {
           return { ...item, state: !item.state };
         } else {
           return item;
         }
       });
     
      setAccordionContent(updatedAccordionContent);
   }

   return (
      <section className="questions__page page">
         <div className="questions__container container">
            <div className="questions__body body body__page">
               <div className="questions__title">
                  <h2 className="questions__title title__page">
                     Частые вопросы
                  </h2>
               </div>
               <div className="questions__accordion accordion__wrapper">
                  {accordionContent.map((card, index) => {
                     return (
                        <div className="accordion" key={index}>
                           <div className="accordion__item">
                              <div className="accordion__title">
                                 <h3 className="accordion__title-h">
                                    {card.title}
                                 </h3>
                              </div>
                              <span className={`accordion__button-span ${card.state ? `accordion__button-span--open` : `accordion__button-span--hidden`}`} onClick={() => toggleStateAccordion(index)}></span>
                           </div>
                           <div className={`accordion__content ${card.state ? `accordion__content-open` : `accordion__content-hidden`}`}>
                              <p className="accordion__content-paragraph">
                                 {card.subtitle}
                              </p>
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

export default QuestionsPage