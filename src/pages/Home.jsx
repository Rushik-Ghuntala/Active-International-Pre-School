import CourseSection from "../components/CourseSection";
import DaycareSection from "../components/DaycareSection";
import FacilitiesComponent from "../components/FacilitiesComponent";
import Footer from "../components/Footer";
import FounderSection from "../components/FounderSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import PhotoGallery from "../components/PhotoGallary";
import SuperBar from "../components/SuperBar";

function Home() {
  return (
    <div>
      <SuperBar />
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="courses"></div>
      <CourseSection />
      <div id="daycare">
        <DaycareSection />
      </div>
      <div id="gallery">
        <PhotoGallery />
      </div>
      <div id="facilities">
        <FacilitiesComponent />
      </div>
      <div id="founder">
        <FounderSection />
      </div>
      <Footer />
      {/* <div className=" h-[100rem] bg-orange-300">hello</div> */}
    </div>
  );
}

export default Home;
