import React from 'react'
import BackButton from './BackButton'
import { Link } from 'react-router-dom'
import Weekend from '../../assets/icons/Weekend.svg'

import "./App.css"

const Header = () => {
        return(
                <div className="header">
                    <BackButton />
                    <Link to= "/BasicListHome">
                    <img src={Weekend} alt="home button" className="icon"/>

                    </Link>
                </div>
        )
    }


export default Header