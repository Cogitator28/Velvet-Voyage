import { motion } from "framer-motion";

export default function WhyChooseUs() {
    const features = [
        {
            title: "Handpicked Trips",
            desc: "Carefully curated travel experiences that suit your taste.",
            icon: "🌍",
        },
        {
            title: "Best Price Guarantee",
            desc: "Enjoy competitive rates with no hidden fees.",
            icon: "💰",
        },
        {
            title: "24/7 Support",
            desc: "We’re here to help you anytime, anywhere.",
            icon: "📞",
        },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1 }}
            className="py-16 px-6 bg-white text-center">
            <h2 className="text-3xl font-bold mb-10 text-gray-800">Why Choose Velvet Voyage</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
                {features.map((feature, index) => (
                    <div key={index} className="bg-[#000080] p-6 rounded-lg shadow hover:shadow-lg transition">
                        <div className="text-4xl mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-semibold mb-2 text-[#FFA500]">{feature.title}</h3>
                        <p className="text-[#FFA500]">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
