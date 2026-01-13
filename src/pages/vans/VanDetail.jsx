import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router";
import { getVans } from "../../api";
import { Loader } from "../../components/base/Loader";

export default function VanDetail() {
  const { id } = useParams();
  const location = useLocation();
  const [van, setVan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadVan() {
      setLoading(true);
      try {
        const data = await getVans(id);
        setVan(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVan();
  }, [id]);

  const search = location.state?.search || "";

  if (loading) {
    return (
      <section className="py-10">
        <div className="wrapper">
          <Loader />
        </div>
      </section>
    );
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <section className="py-10">
      <div className="wrapper">
        <Link to={`..${search}`} relative="path" className="block mb-10 text-sm font-semibold underline capitalize">
          &larr; back to {location.state.typeFilter ? `${location.state.typeFilter}` : "all"} vans
        </Link>

        {van && (
          <article className="max-w-[700px] mx-auto">
            <img className="mb-10" src={van.imageUrl} alt="van image" />
            <div className="mb-5">
              <button
                className={`${
                  van.type === "simple"
                    ? "bg-accent"
                    : van.type === "rugged"
                      ? "bg-green-900"
                      : van.type === "luxury"
                        ? "bg-black"
                        : ""
                } text-white py-2 px-4 rounded-sm capitalize hover:opacity-80 mb-6`}
              >
                {van.type}
              </button>
              <h1 className="mb-2 text-2xl font-bold">{van.name}</h1>
              <h3 className="mb-6">
                ${van.price}
                <span>/day</span>
              </h3>
              <p className="mb-10">{van.description}</p>
            </div>
            <Link
              to="#"
              className="block w-full p-4 text-center capitalize rounded-sm bg-accent hover:bg-accent/80 text-gray-50"
            >
              rent this van
            </Link>
          </article>
        )}
      </div>
    </section>
  );
}
