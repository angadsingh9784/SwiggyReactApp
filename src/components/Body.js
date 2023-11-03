import React from 'react'
import FirstCardslider from './Slider/FirstCardslider'
import SecondCardslider from './Slider/SecondCardSlider'
import CardOverall from './CardContainer/CardOverall'
import ThirdCardslider from './Slider/ThirdCardSlider'
import { useContext } from 'react'
import MyContext from '../context/myContext'

const Body = () => {
    
    return (
        <div className='mx-14 '>
            <FirstCardslider />
            <hr />
            <SecondCardslider />
            <hr />
            <ThirdCardslider/>
            <hr/>
            <CardOverall />

        </div>
    )
}

export default Body
