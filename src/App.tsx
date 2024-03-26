import './App.scss'
import Header from './components/global/header/Header'
import Footer from './components/global/footer/Footer'
import ScreenPage from './components/global/screenPage/ScreenPage'
import BenefitPage from './components/global/benefitPage/BenefitPage'
import AccentPage from './components/global/accentPage/AccentPage'
import TargetPage from './components/global/targetPage/TargetPage'
import PricePage from './components/global/pricePage/PricePage'
import AboutPage from './components/global/aboutPage/AboutPage'
import QuestionsPage from './components/global/questionsPage/QuestionsPage'
import { useState } from 'react'

function App() {
  const [popupState, setPopupState] = useState<boolean>(false)
  const [popupStatePrice, setPopupStatePrice] = useState<boolean>(false)

  function togglePopup() {
    setPopupState(!popupState)
  }

  function togglePopupPrice() {
    setPopupStatePrice(!popupStatePrice)
  }


  return (
    <div className="wrapper">
      {popupState || popupStatePrice ? (
        <div className="backdrop"></div>
      ): null}
      <Header/>
      <main className='main'>
        <ScreenPage popupState={popupState} togglePopup={togglePopup} />
        <BenefitPage/>
        <AccentPage/>
        <TargetPage/>
        <PricePage popupState={popupStatePrice} togglePopup={togglePopupPrice} />
        <AboutPage/>
        <QuestionsPage/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
