const Banner = (props) => {
    return (       
        <div className="banner">
            <h1>{ props.title }</h1>
            { props.children }
        </div>
    )  
}

export default Banner;