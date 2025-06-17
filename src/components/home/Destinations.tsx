import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

const destinations = [
    {
        name: "Bali",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&auto=format&fit=crop&q=60",
        description: "Explore the beaches and temples of Bali.",
    },
    {
        name: "Paris",
        image: "https://plus.unsplash.com/premium_photo-1717346482132-838fef0ebbd1?w=500&auto=format&fit=crop&q=60",
        description: "Romance and architecture await you in Paris.",
    },
    {
        name: "Tokyo",
        image: "https://images.unsplash.com/photo-1549693578-d683be217e58?w=500&auto=format&fit=crop&q=60",
        description: "Experience the vibrant city life of Tokyo.",
    },
    {
        name: "New York",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500&auto=format&fit=crop&q=60",
        description: "Discover the city that never sleeps.",
    },
];



export default function Destinations() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024); // lg breakpoint
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="py-16 px-6 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-10">Top Destinations</h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
                {destinations.map((dest, i) => (
                    <FlipCard key={i} dest={dest} isMobile={isMobile} delay={i * 0.2} />
                ))}
            </div>
        </section>
    );
}

// 👉 Subcomponent with scroll-based flip on mobile
interface Destination {
    name: string;
    image: string;
    description: string;
}

function FlipCard({ dest, isMobile, delay }: { dest: Destination; isMobile: boolean; delay: number }) {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { amount: 0.3 });
    const flipped = isMobile && isInView;

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, ...(isMobile && { rotateY: 180 }) }}
            animate={{ opacity: 1, ...(isMobile && { rotateY: flipped ? 180 : 0 }) }}
            transition={{ duration: 1, delay }}
            className={`relative w-full h-64 [transform-style:preserve-3d] transition-transform duration-700  ${!isMobile ? "group hover:[transform:rotateY(180deg)]" : ""
                }`}
        >
            {/* FRONT */}
            <div className="absolute inset-0 [backface-visibility:hidden] bg-[#000080] rounded-lg overflow-hidden shadow-md">
                <img src={dest.image} alt={dest.name} className="w-full h-48 object-cover" />
                <div className="p-4 text-center font-semibold text-[#FFA500] font-serif">{dest.name}</div>
            </div>

            {/* BACK */}
            <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-[#FFA500] text-[#000080] 
                flex flex-col text-center font-serif items-center justify-center rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2">{dest.name}</h3>
                <p className="text-sm">{dest.description}</p>
                <button className="absolute bottom-10 bg-[#000080] text-[#FFA500] rounded-md p-2 cursor-pointer">
                    Explore {dest.name}
                </button>
            </div>
        </motion.div>
    );
}

