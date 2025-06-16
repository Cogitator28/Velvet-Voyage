import { motion } from "framer-motion";

export default function Newsletter() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1 }}
            className="py-16 px-6 bg-white text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Stay in the Loop</h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Subscribe to get exclusive travel deals, updates, and inspiration delivered to your inbox.
            </p>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto"
            >
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full sm:w-auto flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#000080]"
                    required
                />
                <button
                    type="submit"
                    className="bg-[#000080] text-white px-6 py-3 rounded-md font-semibold hover:hover:text-[#FFA500] transition">
                    Subscribe
                </button>
            </form>
        </motion.section>
    );
}
