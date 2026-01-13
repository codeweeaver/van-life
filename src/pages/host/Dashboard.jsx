import { useEffect, useState } from "react";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
export default function Dashboard() {
  const [vans, setVans] = useState([]);
  const user = useAuth();

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const hostVansEl = vans.map((van) => (
    <div
      key={van.id}
      className="p-3 my-6 bg-white rounded-sm shadow-sm flex justify-between items-center"
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
      <Link to={"/edit"} className="capitalize text-sm pr-5 underline">
        edit
      </Link>
    </div>
  ));
  return (
    <>
      <section className="p-6 bg-primary text-gray-900 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold capitalize">
            Welcome <span className="">{user.user.name}</span>
          </h1>
          <p className="text-sm capitalize my-2">
            income last <span className="font-semibold underline">30 days</span>
          </p>
          <h1 className="text-3xl font-bold tracking-wide">$2,3900</h1>
        </div>
        <div>
          <Link to={`.`} className="text-sm">
            Details
          </Link>
        </div>
      </section>

      <section className="p-6 bg-secondary text-gray-900 flex justify-between items-center mb-10">
        <h1 className="text-lg font-semibold">
          Review score{" "}
          <span>
            ⭐50<span className="font-light">/5</span>
          </span>
        </h1>
        <div>
          <Link to={`.`} className="text-sm">
            Details
          </Link>
        </div>
      </section>

      {vans.length <= 0 ? (
        "loading...."
      ) : (
        <section>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg capitalize font-semibold">
              your listed vans
            </h1>
            <Link to={"vans"}>view all vans</Link>
          </div>
          {hostVansEl}
        </section>
      )}
    </>
  );
}
