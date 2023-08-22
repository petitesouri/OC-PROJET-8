import Header from "../components/Header";
import Banner from '../components/Banner';
import Footer from "../components/Footer";
import AdList from "../components/AdList";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Banner/>
            <AdList />
            <Footer />
        </div>
    )
}

export default Home;