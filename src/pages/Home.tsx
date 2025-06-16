import Hero from "../components/home/Hero";
import Navbar from "../components/Navbar";
import Destinations from "../components/home/Destinations";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import Newsletter from "../components/home/Newsletter";
import Footer from "../components/home/Footer";

export default function Home() {
    return (
        <div className="bg-white text-gray-800">
            <Navbar />
            <Hero />
            <Destinations />
            <WhyChooseUs />
            <Testimonials />
            <Newsletter />
            <Footer />
        </div>
    );
}
