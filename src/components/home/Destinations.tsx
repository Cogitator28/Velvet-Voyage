import { motion } from "framer-motion";

const destinations = [
    {
        name: "Bali",
        image:
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmFsaXxlbnwwfHwwfHx8MA%3D%3D",
        description: "Explore the beaches and temples of Bali.",
    },
    {
        name: "Paris",
        image:
            "https://plus.unsplash.com/premium_photo-1717346482132-838fef0ebbd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFBhcmlzfGVufDB8fDB8fHww",
        description: "Romance and architecture await you in Paris.",
    },
    {
        name: "Tokyo",
        image:
            "https://images.unsplash.com/photo-1549693578-d683be217e58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VG9reW98ZW58MHx8MHx8fDA%3D",
        description: "Experience the vibrant city life of Tokyo.",
    },
    {
        name: "New York",
        image:
            "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TmV3JTIwWW9ya3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Discover the city that never sleeps.",
    },
];

export default function Destinations() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1 }}
            className="py-16 px-6 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-10">Top Destinations</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto perspective">
                {destinations.map((dest) => (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        key={dest.name}
                        className="group w-full h-64 [transform-style:preserve-3d] transition-transform duration-700 hover:[transform:rotateY(180deg)] relative"
                    >
                        {/* FRONT SIDE */}
                        <div className="absolute inset-0 [backface-visibility:hidden] bg-[#000080] rounded-lg overflow-hidden shadow-md">
                            <img src={dest.image} alt={dest.name} className="w-full h-48 object-cover" />
                            <div className="p-4 text-center font-semibold text-[#FFA500] font-serif">
                                {dest.name}
                            </div>
                        </div>
                        {/* BACK SIDE */}
                        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-[#FFA500] text-[#000080] rounded-lg p-4 flex flex-col items-center justify-center text-center font-serif">
                            <h3 className="text-xl font-bold mb-2">{dest.name}</h3>
                            <p className="text-sm">{dest.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
