import React from 'react'
import Home from './components/Home'
import Admissionmodal from './components/Admission'
import WhoWeAre from './components/Whoweare'
import MBBSAbroad from './components/MBBSAbroad'
import WhyAbroad from './components/WhyChoose'
import CollegeAdmissionSupport from './components/CollegeAdmission'

const App = () => {
  return (
    <div>
      <Home/>
      <Admissionmodal/>
      <WhoWeAre/>
      <MBBSAbroad/>
      <WhyAbroad/>
      <CollegeAdmissionSupport/>
    </div>
  )
}

export default App
