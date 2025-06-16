import { motion } from "framer-motion";

export default function xTestimonials() {
    const reviews = [
        {
            name: "Sarah L.",
            text: "Velvet Voyage gave me the trip of a lifetime! Everything was seamless and beautiful.",
        },
        {
            name: "David K.",
            text: "Highly professional and super friendly service. I’ll definitely book again.",
        },
        {
            name: "Aisha M.",
            text: "The destinations were breathtaking, and the support team was always helpful.",
        },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1 }}
            className="py-16 px-6 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">What Our Travelers Say</h2>
            <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {reviews.map((review, index) => (
                    <div key={index} className="bg-white rounded-lg shadow p-6 text-center">
                        <p className="text-gray-600 italic mb-4">“{review.text}”</p>
                        <h4 className="text-lg font-semibold text-[#000080]">{review.name}</h4>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
