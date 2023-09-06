const Banner = (props) => {
    return (       
        <div className="banner">
            { props.title ? <h1>{ props.title }</h1> : null }
            { props.children }
        </div>
    )  
}

export default Banner;