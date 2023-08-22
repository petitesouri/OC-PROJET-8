import '../assets/Home-banner.jpg'

const Banner = () => {
    return (
        <div className="banner">
            <h1>Chez vous, partout et ailleurs</h1>
            <img src={require('../assets/Home-banner.jpg')} alt="home banner" />
        </div>
    )
}

export default Banner;