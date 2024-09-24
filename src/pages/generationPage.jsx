import Navbar from "../components/Navbar";
import GptPage from "../components/GptPage";
import Footer from "../components/Footer";

const GenerationPage = () => {
    return (
        <div>
            <Navbar />
            {/* <InfoBlock number={5} /> */}
            <GptPage />
            <Footer />
        </div>
    );
};

export default GenerationPage;
