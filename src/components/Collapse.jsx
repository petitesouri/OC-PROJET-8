import { useState } from 'react';

import ArrowUp from '../assets/arrow-up.png'

const Collapse = (props) => {
    const [open, setOpen] = useState(true);
    const toggle = () => {
        setOpen(!open);
    }

    return (
        <article className={open ? "collapse" : "collapse open" }>
            <hgroup className='collapse-group' onClick={toggle}>
                <h2 className='collapse-group__title'>{ props.title }</h2>
                <button className={open ? "collapse-button" : "collapse-button open" } 
                    style={{ backgroundImage:`url(${ ArrowUp })`}}>       
                </button>
            </hgroup>
            <div className={open ? "collapse-description" : "collapse-description open" }>
                <div className={open ? "collapse-description__text" : "collapse-description__text open" }>
                    {props.children}
                </div>                                    
            </div>
        </article>
    )
}

export default Collapse;