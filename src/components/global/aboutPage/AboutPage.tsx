import './aboutPage.scss'
import { useState } from 'react';

interface aboutCardType {
   title?: string;
   subtitle?: string;
   img?: string;
}

function AboutPage() {
   const [aboutCard] = useState<aboutCardType[]>([
      {
         title: 'Сертификат FCE',
         subtitle: 'Будучи ученицей, сдала один из самых известных кембриджских экзаменов. С этого и началась любовь с английским языком',
      },
      {
         title: 'Ежегодное обучение',
         subtitle: 'Начиная с 2016 года я постоянно совершенствую свои навыки и знания. Участвую в конференциях и разрабатываю новые методики',
      },
      {
         img: '../../../../../img/about/u4FHaylFNwM.png'
      },
      {
         title: 'Профильное лингвистическое образование',
         subtitle: 'В 2018 году получила специальность — теория и дидактика перевода, что вывело подготовку студентов к ОГЭ и ЕГЭ на новый уровень',
      },
      {
         subtitle: 'Меня зовут Полина и я преподаю английский уже более 9 лет. С радостью делюсь своими знаниями и помогаю детям и взрослым осваивать этот язык. Горжусь каждым своим учеником и помогаю каждому, пришедшему на занятие поверить в себя',
      },
      {
         title: 'Постоянный контакт с носителями языка',
         subtitle: 'Опыт проживания за границей несёт в себе не только погружение в языковую среду, но и многочисленные контакты с носителями языка',
      },
   ])

   return (
      <section className="about__page page">
         <div className="about__container container">
            <div className="about__body body body__page">
               <div className="about__title">
                  <h2 className="about__title title__page">
                     Об авторе
                  </h2>
               </div>
               <div className="about__cards">
                  {aboutCard.map((card, index) => {
                     return (
                        <div className={`about__card card-${index}`} key={index}>
                           {card.img === undefined ? (
                              card.title === undefined ? (
                                 <div className="about__card-subtitle">
                                    <p className="about__card-subtitle-p">{card.subtitle}</p>
                                 </div>
                              ) : (
                                 <>
                                 <div className="about__card-title">
                                    <h2 className="about__card-title-h">{card.title}</h2>
                                 </div>
                                 <div className="about__card-subtitle">
                                    <p className="about__card-subtitle-p">{card.subtitle}</p>
                                 </div>
                                 </>
                              )
                           ): (
                              <div className="about__card-images">
                                 <img src={card.img} alt="photo" className="about__card-img" />
                              </div>
                           )}
                        </div>
                     )
                  })}
               </div>
            </div>
         </div>
      </section>
   )
}

export default AboutPage;