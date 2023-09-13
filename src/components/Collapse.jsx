import { useState } from 'react';

import ArrowUp from '../assets/arrow-up.png'

const Collapse = (props) => {
    const [open, setOpen] = useState(true);
    const toggle = () => {
        setOpen(!open);
    }

    let classNameButton = 'collapse-button'
    let classNameDescription = 'collapse-description'
    let classNameText = 'collapse-description__text'
    let classNameList = 'collapse-description__list'

    if (!open) {
        classNameButton += ' open';
        classNameDescription += ' open';
        classNameText += ' open';
        classNameList += ' open';
    }

    return (
        <article className='collapse'>
            <hgroup className='collapse-group' onClick={toggle}>
                <h2 className='collapse-group__title'>{ props.title }</h2>
                <button className={classNameButton} 
                    style={{ backgroundImage:`url(${ ArrowUp })`}}>       
                </button>
            </hgroup>
            {props.title === "Equipements" ? (  
                <ul className={classNameDescription}>
                    {props.equipments.map((equipment, index) => (
                        <li key={index} className={classNameList}>{ equipment} </li>
                    ))}
                </ul>
            ):(
                <div className={classNameDescription}>
                    <div className={classNameText}>
                        {props.description}
                    </div>
                </div>                    
            )} 
        </article>
    )
}

export default Collapse;