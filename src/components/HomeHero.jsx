import { Link } from "react-router";
import HeroContainer from "./HeroContainer";

export default function HomeHero() {
    return (
        <HeroContainer locatedAt="home">
            <h1 className="text-5xl font-bold mb-5 text-white max-w-[700px]">
                You got the travel plans, we got the travel vans.
            </h1>
            <p className="mb-8 max-w-[600px] text-gray-200">
                Add adventure to your life by joining the #vanlife movement.
                Rent the perfect van to make your perfect road trip.
            </p>
            <Link
                to="/vans"
                className="inline-block px-6 py-3 font-semibold text-white capitalize rounded-sm bg-accent text-gray-5"
            >
                find your van
            </Link>
        </HeroContainer>
    );
}
