import React from 'react'
import './Header.css'
import LangButton from '../lang-button/langButton';


const Header = () => {

    return (
        <>
            <div className="header-div">
                <LangButton />
            </div>
            {/* <div>
                <InputSection />
            </div> */}
        </>
    )
}

export default Header
