import React from 'react'

const HeaderButton = () => {

    return (
        <>
         <div class="cta">
            <div className="mx-auto">
                <a href="#about"><button className="cta-about">About Me<i className="fas fa-eye"></i></button></a>
                <a href="#portfolio"><button className="cta-portfolio">Portfolio<i className="fas fa-eye"></i></button></a>
            </div>
            </div>
        </>
    )
}

export default HeaderButton
