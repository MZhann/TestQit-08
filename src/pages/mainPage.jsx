import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InfoBlock from "../components/InfoBlock";
import StoryOptions from "../components/StoryOptions";

const MainPage = () => {
    return (
        <div className="flex flex-col justify-between min-h-[100vh]">
            <div>
                <Navbar />
                <InfoBlock />
                <StoryOptions />
            </div>

            <Footer />
        </div>
    );
};

export default MainPage;
