import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";


export default function Hero() {
    return (
        <>
            <hr className="border-0.5 border-[#FFA500]/70" />
            <section className="flex flex-col items-center justify-center bg-gradient-to-r from-[#000080] to-[#FFA500] text-white py-10 px-6 text-center min-h-screen font-serif">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-4xl sm:text-6xl font-bold mb-4 text-[#FFA500]">
                    Discover the World with {' '}
                    <span className="">
                        <Typewriter
                            words={['Velvet Voyage', 'Paris', 'Zanzibar', 'Tokyo', 'Santorini']}
                            loop={0}
                            cursor
                            cursorStyle="✈"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={2000}

                        />
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-lg sm:text-xl mb-8 max-w-xl mx-auto text-[#000080]">
                    Explore breathtaking destinations, tailored just for you.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#000080] [transform-style:preserve-3d] hover:[transform:rotateY(180deg)] text-[#FFA500] px-6 py-3 font-semibold rounded-md shadow-md hover:bg-[#FFA500] hover:text-[#000080] cursor-pointer transition duration-500 hover:scale-110">
                    Start Your Journey
                </motion.button>
            </section>
        </>
    );
}
