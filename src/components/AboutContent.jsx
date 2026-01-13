import { Link } from "react-router";
export default function AboutContent() {
    return (
        <section>
            <div className="my-10 max-w-[768px]">
                <h2 className="text-4xl font-bold mb-4">
                    Don’t squeeze in a sedan when you could relax in a van.
                </h2>

                <p className="leading-[1.6]">
                    Our mission is to enliven your road trip with the perfect
                    travel van rental. Our vans are recertified before each trip
                    to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                </p>
                <p className="leading-[1.6]">
                    Our team is full of vanlife enthusiasts who know firsthand
                    the magic of touring the world on 4 wheels.
                </p>
            </div>
            <div className="bg-accent-light py-10 px-20 rounded-sm mb-10">
                <h3 className="text-2xl font-bold mb-5">
                    <span className="block">Your destination is waiting.</span>
                    <span className="block">Your van is ready.</span>
                </h3>
                <Link
                    className="bg-gray-900 inline-block py-3 px-6 text-white rounded-lg"
                    to="/vans"
                >
                    Explore our vans
                </Link>
            </div> 
        </section>
    );
}
