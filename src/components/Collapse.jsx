import { useState } from 'react';

const Collapse = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className='collapse'>            
            <hgroup className='collapse-up'>
                <h2 className='collapse-up__title'>{ props.title }</h2>
                <button className='collapse-up__button' onClick={() => setIsOpen(!isOpen)}>
                    <img src={require('../assets/arrow-down.png')} alt="banniere accueil"></img>
                </button>
            </hgroup>            
            {isOpen && 
                <p className='collapse-down'>
                    { props.paragraph }
                </p>
            }             
        </section>
    );
}

export default Collapse;