import Animes from "../../components/Animes/Animes";
import Banner from "../../components/Banner/Banner";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Services from "../../components/Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Animes></Animes>
            <NewsLetter></NewsLetter>
            
        </div>
    );
};

export default Home;