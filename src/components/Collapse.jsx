import { useState } from 'react';

import ArrowUp from '../assets/arrow-up.png'
import ArrowDown from '../assets/arrow-down.png'

const Collapse = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    

    return (
        <article className='collapse' onClick={() => setIsOpen(!isOpen)}>
            { isOpen ? (
                <hgroup className='collapse-group'>
                    <h2 className='collapse-group__title'>{ props.title }</h2>
                    <button className='collapse-group__button'>
                        <img className="arrow" src={ ArrowUp } alt="arrow"></img>
                    </button>
                </hgroup>
            )
            : ( 
                <hgroup className='collapse-group'>
                    <h2 className='collapse-group__title'>{ props.title }</h2>
                    <button className='collapse-group__button'>
                        <img className="arrow" src={ ArrowDown } alt="arrow"></img>
                    </button> 
                </hgroup>                 
                )
            }
            {isOpen && 
                <div>
                    {props.title === "Description" ? (
                        <p className='collapse-group__text'>
                            {props.description}
                        </p>
                    ):(
                        <ul className='collapse-group__list'>
                            {props.equipments.map((equipment, index) => (
                                <li key={index}>{ equipment} </li>
                            ))}
                        </ul>
                    )}
                </div>
            }                  
        </article> 
    )
}

export default Collapse;