import { Link } from "react-router";
import { getHostVans } from "../../api";
import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";
import useAuth from "../../hooks/useAuth";
// import { requiresAuth } from "../../utils";

// // eslint-disable-next-line react-refresh/only-export-components
// export async function loader() {
//     const loggInState = await requiresAuth();
//     const vans = await getHostVans();
//     return {
//         loggInState,
//         vans,
//     };
// }

export default function Vans() {
    // const { vans, loggInState } = useLoaderData();
    const [vans, setVans] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    useEffect(() => {
        async function loadVan() {
            setLoading(true);
            try {
                const data = await getHostVans(user.user.id);
                setVans(data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }

        loadVan();
    }, [user.user.id]);

    const hostVansEl = vans.map((van) => (
        <Link
            to={van.id}
            key={van.id}
            className="block p-3 my-6 bg-white rounded-sm shadow-sm"
        >
            <div className="flex items-center gap-5" key={van.id}>
                <img
                    className="w-[25%] rounded-sm"
                    src={van.imageUrl}
                    alt="van image"
                />
                <div>
                    <h3>{van.name}</h3>
                    <p>{van.price}</p>
                </div>
            </div>
        </Link>
    ));

    return loading ? (
        <div className="flex justify-center items-center h-[50vh]">
            <PacmanLoader color="#FF8C38" />
        </div>
    ) : (
        <section>
            <h1 className="text-lg mb-5 capitalize font-semibold">
                your listed vans
            </h1>
            {hostVansEl}
        </section>
    );
}
