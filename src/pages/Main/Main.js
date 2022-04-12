import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Education, Experience, Contacts,
    // Projects, 
    //Services, Achievement Blog
 } from '../../components'
import { HeaderData } from '../../data/HeaderData'
//<Testimonials />  Testimonials <Achievement /> <Services />   <Blog />  <Projects />

function Main() {
    return (
        <div>
            <Helmet>
                <title>{HeaderData.name} - Porfolio</title>
            </Helmet>

            <Navbar />
            <Landing />
            <About />
            <Education />
            <Skills />
            <Experience />
            
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main