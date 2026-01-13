import { useOutletContext } from "react-router";

export default function HostVanInfo() {
    const { currentVan } = useOutletContext();
    console.log(currentVan);
    return (
        <section className="font-semibold capitalize">
            <h4>
                name: <span className="font-normal">{currentVan.name}</span>
            </h4>
            <h4 className="my-4">
                category: <span className="font-normal">{currentVan.type}</span>
            </h4>
            <h4>
                description:{" "}
                <span className="font-normal text-base">
                    <span>{currentVan.description.slice(0, 20)}</span>
                    <span className="lowercase">
                        {currentVan.description.slice(20, -1)}
                    </span>
                </span>
            </h4>
        </section>
    );
}
