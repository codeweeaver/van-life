import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router";
import { PacmanLoader } from "react-spinners";
import { getHostVans } from "../../api";
import BaseLink from "../../components/base/BaseLink";
import useAuth from "../../hooks/useAuth";

export default function HostVanDetails() {
  const params = useParams();
  const [currentVan, setCurrentVan] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    async function loadVan() {
      setLoading(true);

      try {
        if (!user) {
          navigate("/login");
        }
        const data = await getHostVans(params.id);
        setCurrentVan(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }

    loadVan();
  }, [navigate, user, params]);

  const vanDetailEl = (
    <div className="flex items-center gap-6" key={currentVan.id}>
      <img
        className="w-[35%] rounded-sm"
        src={currentVan.imageUrl}
        alt="currentVan image"
      />
      <div className="font-bold">
        <button
          className={`${
            currentVan.type === "simple"
              ? "bg-accent"
              : currentVan.type === "rugged"
              ? "bg-green-900"
              : currentVan.type === "luxury"
              ? "bg-black"
              : ""
          } text-white py-2 px-4 rounded-sm capitalize hover:opacity-80 font-normal mb-4`}
        >
          {currentVan.type}
        </button>
        <h3 className="mb-2 text-xl">{currentVan.name}</h3>
        <p>
          ${currentVan.price}
          <span className="font-medium">/day</span>
        </p>
      </div>
    </div>
  );

  return loading ? (
    <div className="flex justify-center items-center h-[50vh]">
      <PacmanLoader color="#FFEAD0" />
    </div>
  ) : (
    <section>
      <Link
        to=".."
        relative="path"
        className="block mb-10 text-sm font-semibold underline capitalize"
      >
        &larr; back to all vans
      </Link>

      <div>
        {vanDetailEl}

        <nav className="flex gap-5 py-6 capitalize">
          <BaseLink to="." end>
            details
          </BaseLink>
          <BaseLink to="pricing">pricing</BaseLink>
          <BaseLink to="photos">photos</BaseLink>
        </nav>

        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
}
