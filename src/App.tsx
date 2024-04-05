
import styled from 'styled-components'
import Header from './layouts/header'
import Home from './Home'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './layouts/footer'
import React from 'react'

const SectionContainer = styled.div`
  padding: 30px 0;
`

function App() {
  
  const ref_home = React.createRef<HTMLDivElement>();
  const ref_projects = React.createRef<HTMLDivElement>();
  const ref_skills = React.createRef<HTMLDivElement>();
  const ref_contact = React.createRef<HTMLDivElement>();

  return (
    <div className="App">

      <Header ref1={ref_home} ref2={ref_projects} ref3={ref_skills} ref4={ref_contact}/>

      <SectionContainer ref={ref_home}>
        <Home/>
      </SectionContainer>
      <SectionContainer ref={ref_projects}>
        <Projects/>
      </SectionContainer>
      <SectionContainer ref={ref_skills}>
        <Skills/>
      </SectionContainer>
      <SectionContainer ref={ref_contact}>
        <Contact/>
      </SectionContainer>
      <Footer/>
    </div>
  )
}

export default App
