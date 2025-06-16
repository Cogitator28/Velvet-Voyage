import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
    return (
        <>
            <hr className="border-0.5 border-[#FFA500]/70" />
            <section className="flex flex-col items-center justify-center bg-gradient-to-r from-[#000080] to-[#FFA500] text-white py-10 px-6 text-center min-h-screen font-serif">
                <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-[#FFA500]">
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
                </h1>

                <p className="text-lg sm:text-xl mb-8 max-w-xl mx-auto text-[#000080]">
                    Explore breathtaking destinations, tailored just for you.
                </p>

                <button className="bg-[#000080] text-[#FFA500] px-6 py-3 font-semibold rounded-md shadow-md hover:bg-[#FFA500] hover:text-[#000080] cursor-pointer transition duration-500 hover:scale-110">
                    Start Your Journey
                </button>
            </section>
        </>
    );
}
