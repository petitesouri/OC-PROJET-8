import Header from "../components/Header";
import Footer from "../components/Footer";
//import Card from "../components/Card";
import useFetch from "../components/useFetch";

const Offers = () => {
    
    return (
        <div>
            <Header />
            { useFetch () }
            <Footer />            
        </div>
    )
}

export default Offers;