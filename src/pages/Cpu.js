import React from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'

import Navbar from '../components/Navbar/Navbar'

export const Cpu = () => {
    const { id } = useParams()
    const cpuId = Number(id)
    const currentCpu = useSelector(({cpu}) => cpu.items.find(c => c.id === cpuId))

    return(
        <React.Fragment>
            <Navbar />
            <div className='container'>
                <h1>{currentCpu.name}</h1>
            </div>
        </React.Fragment>
    )
}