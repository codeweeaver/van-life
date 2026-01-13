import { useOutletContext } from "react-router";

export default function HostVanPhotos() {
    const { currentVan } = useOutletContext();

    return (
        <section>
            <img
                width="120px"
                height="100px"
                src={currentVan.imageUrl}
                alt={currentVan.name}
                className="rounded-sm"
            />
        </section>
    );
}
