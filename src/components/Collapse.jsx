import { useState } from 'react';

const Collapse = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <article className='collapse'>            
            <hgroup className='collapse-up'>
                <h2 className='collapse-up__title'>{ props.title }</h2>
                <button className='collapse-up__button' onClick={() => setIsOpen(!isOpen)}>
                    { isOpen ? (
                        <img className="arrow" src={require('../assets/arrow-up.png')} alt="arrow"></img>
                    )
                    : ( 
                        <img className="arrow" src={require('../assets/arrow-down.png')} alt="arrow"></img>)
                    }
                    
                </button>
            </hgroup>            
            {isOpen && 
                <p className='collapse-down'>
                    { props.paragraph }
                </p>
            }             
        </article>
    );

}

export default Collapse;