import AboutMe from "../Components/AboutMe";
import ContactSection from "../Components/ContactSection";
import { Footer } from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import NavBar from "../Components/NavBar";
import ProjectsSection from "../Components/ProjectsSEction";
import { StarBackground } from "../Components/StarBackground";
const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* ThemeToggle*/}
        {/* Background Effects*/}
        <StarBackground/>
        {/*Nav Bar*/}
        <NavBar/>
        {/* Main Content */}
        <main>
            {/* Hero Section */}
            <HeroSection/>
            {/* About Me Section */}
            <AboutMe/>
            <ProjectsSection/>
            <ContactSection/>
        
         

        </main>
        {/*Footer*/}
        <Footer/>

    </div>;
};

export default Home;
