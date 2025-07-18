import React from 'react'
import Home from './components/Home'
import Admissionmodal from './components/Admission'
import WhoWeAre from './components/Whoweare'
import MBBSAbroad from './components/MBBSAbroad'
import WhyAbroad from './components/WhyChoose'
import CollegeAdmissionSupport from './components/CollegeAdmission'
import Reviews from './components/Review'
import EduConsultants from './components/EduConsultants'
import Footer from './components/Footer'
import EnquiryModal from './components/EnquiryForm'
import WhatsappFloatButton from './components/Whatsapp'

const App = () => {
  return (
    <div>
      <Home/>
      <Admissionmodal/>
      <WhoWeAre/>
      <MBBSAbroad/>
      <WhyAbroad/>
      <CollegeAdmissionSupport/>
      <EduConsultants/>
      <Reviews/>
      <EnquiryModal/>
      <WhatsappFloatButton/>
      <Footer/>
    </div>
  )
}

export default App
