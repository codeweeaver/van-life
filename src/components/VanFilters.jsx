import { Link } from "react-router";

export default function VanFilters({ onClick, typeFilter }) {
    return (
        <>
            <div className="flex items-center gap-5 mb-10">
                <button
                    onClick={() => onClick("type", "simple")}
                    className={`${
                        typeFilter === "simple"
                            ? "bg-accent text-white "
                            : "bg-primary-light"
                    } py-2 px-4 rounded-sm capitalize text-sm hover:bg-accent hover:text-white`}
                >
                    simple
                </button>
                <button
                    onClick={() => onClick("type", "rugged")}
                    className={`${
                        typeFilter === "rugged"
                            ? "bg-green-900 text-white"
                            : "bg-primary-light"
                    } py-2 px-4 rounded-sm capitalize text-sm hover:bg-green-900 hover:text-white`}
                >
                    rugged
                </button>
                <button
                    onClick={() => onClick("type", "luxury")}
                    className={`${
                        typeFilter === "luxury"
                            ? "bg-gray-900 text-white"
                            : "bg-primary-light"
                    } py-2 px-4 rounded-sm capitalize text-sm hover:bg-gray-900 hover:text-white`}
                >
                    luxury
                </button>
                {typeFilter ? (
                    <button
                        onClick={() => onClick("type", null)}
                        className="py-2 px-4 underline capitalize text-sm hover:bg-accent-light/30"
                    >
                        clear filters
                    </button>
                ) : null}
            </div>
        </>
    );
}
