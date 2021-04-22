import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

function About() {
    return(
        <React.Fragment>
            <Navbar />
            <div className='container about'>
                <div className='alert alert-danger' role='alert'>
                    <h4 className='alert-heading'>Информация</h4>
                    <hr />
                    <p>Версия приложения: 1.0</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About
