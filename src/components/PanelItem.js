import React from 'react'


const PanelItem = ({image, text}) => {
    return(
        <div className='panel__item'>
            <div className='panel-container'><img className='panel__img' src={image} alt='Panel icon img'/></div>
            <div className='panel-container'><div className="panel__text">
                {text}
            </div>
            </div>
        </div>

        )

}

export {PanelItem as default};