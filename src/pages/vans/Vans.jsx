import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { getVans } from "../../api";
import { Loader } from "../../components/base/Loader";
import VanFilters from "../../components/VanFilters";

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        setVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, []);

  function handleFilters(key, value) {
    setSearchParams((previousParams) => {
      if (value === null) {
        previousParams.delete(key);
      } else {
        previousParams.set(key, value);
      }
      return previousParams;
    });
  }

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  const vanElements = (
    typeFilter
      ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
      : vans
  ).map((van) => {
    return (
      <article key={van.id} className="max-w-xl mb-10 shadow-sm">
        <Link
          to={van.id}
          state={{
            search: `?${searchParams.toString()}`,
            typeFilter,
          }}
        >
          <img
            className="object-cover w-full"
            src={van.imageUrl}
            alt={van.name}
          />
          <div className="p-5">
            <div className="flex items-center justify-between py-4 text-2xl font-bold">
              <h2>{van.name}</h2>
              <h2>
                {van.price} <span className="text-lg font-semibold">/day</span>
              </h2>
            </div>
            <button
              className={`${
                van.type === "simple"
                  ? "bg-accent"
                  : van.type === "rugged"
                  ? "bg-green-900"
                  : van.type === "luxury"
                  ? "bg-gray-900"
                  : ""
              } text-white py-2 px-4 rounded-sm capitalize hover:opacity-80`}
            >
              {van.type}
            </button>
          </div>
        </Link>
      </article>
    );
  });

  return (
    <section className="py-10">
      <div className="wrapper">
        <h2 className="mb-5 text-2xl font-bold">Explore our van options</h2>
        <VanFilters onClick={handleFilters} typeFilter={typeFilter} />
        <section className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {vanElements}
        </section>
      </div>
    </section>
  );
}
