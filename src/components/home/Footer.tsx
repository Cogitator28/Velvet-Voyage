export default function Footer() {
    return (
        <footer className="bg-[#000080] text-[#FFA500] py-10 px-6">
            <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                <div>
                    <h3 className="text-xl font-bold mb-4">Velvet Voyage</h3>
                    <p className="text-sm">
                        Travel made effortless. Discover unforgettable journeys crafted just for you.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Company</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">About Us</a></li>
                        <li><a href="#" className="hover:text-white">Careers</a></li>
                        <li><a href="#" className="hover:text-white">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Support</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">Help Center</a></li>
                        <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Contact</h4>
                    <p className="text-sm">hello@velvetvoyage.com</p>
                    <p className="text-sm mt-2">+234 900 000 0000</p>
                </div>
            </div>
            <p className="text-center mt-10 text-sm text-gray-500">
                © {new Date().getFullYear()} Velvet Voyage. All rights reserved.
            </p>
        </footer>
    );
}
