import React, { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../contexts/ThemeContext'
//import { HeaderData } from '../../data/HeaderData'

function Footer() {

//    const shortname = (name) => {        if(name.length > 10) {            return name.split(" ")[0]        } else {            return name        }}

    const { theme }  = useContext(ThemeContext)

    return (
        <div className="footer" style={{backgroundColor: theme.secondary}}>
            <p style={{color: theme.tertiary}}>
                { <span style={{color: theme.primary, margin: '0 0.5rem -1rem 0.5rem'}}>
                    Alpha ❤
                </span>/*
                 by   {shortname( HeaderData.name)}
                 */
                 }
            </p>
        </div>
    )
}

export default Footer